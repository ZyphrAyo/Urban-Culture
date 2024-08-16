import React, { useMemo, memo } from "react";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tag = memo(({ prop, tagPosition, tagMarginLeft }) => {
  const tag1Style = useMemo(() => {
    return {
      ...getStyleValue("position", tagPosition),
      ...getStyleValue("marginLeft", tagMarginLeft),
    };
  }, [tagPosition, tagMarginLeft]);

  return (
    <View style={[styles.stylefill, tag1Style]}>
      <Text style={styles.text}>{prop}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyS,
    color: Color.blackMBody,
    textAlign: "center",
  },
  stylefill: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.yellow,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_5xs,
  },
});

export default Tag;
