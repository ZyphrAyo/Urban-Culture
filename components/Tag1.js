import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tag1 = memo(
  ({
    men,
    close1,
    showCloseIcon,
    tagPosition,
    tagWidth,
    tagHeight,
    tagMarginLeft,
  }) => {
    const tagStyle = useMemo(() => {
      return {
        ...getStyleValue("position", tagPosition),
        ...getStyleValue("width", tagWidth),
        ...getStyleValue("height", tagHeight),
        ...getStyleValue("marginLeft", tagMarginLeft),
      };
    }, [tagPosition, tagWidth, tagHeight, tagMarginLeft]);

    return (
      <View style={[styles.styleborder, tagStyle]}>
        <Text style={styles.men}>{men}</Text>
        {showCloseIcon && (
          <Image style={styles.closeIcon} resizeMode="cover" source={close1} />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  men: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyS,
    color: Color.greyMLabel,
    textAlign: "center",
  },
  closeIcon: {
    width: 18,
    height: 18,
    marginLeft: 4,
  },
  styleborder: {
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 1,
    width: 89,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
  },
});

export default Tag1;
