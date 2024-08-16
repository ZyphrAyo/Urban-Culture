import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Group = memo(
  ({
    ellipse36,
    s,
    groupViewMarginLeft,
    groupViewPosition,
    groupViewWidth,
    groupViewHeight,
    groupViewMarginTop,
    groupViewTop,
    groupViewLeft,
    sLeft,
    sFontSize,
    sFontFamily,
    sTop,
  }) => {
    const groupViewStyle = useMemo(() => {
      return {
        ...getStyleValue("marginLeft", groupViewMarginLeft),
        ...getStyleValue("position", groupViewPosition),
        ...getStyleValue("width", groupViewWidth),
        ...getStyleValue("height", groupViewHeight),
        ...getStyleValue("marginTop", groupViewMarginTop),
        ...getStyleValue("top", groupViewTop),
        ...getStyleValue("left", groupViewLeft),
      };
    }, [
      groupViewMarginLeft,
      groupViewPosition,
      groupViewWidth,
      groupViewHeight,
      groupViewMarginTop,
      groupViewTop,
      groupViewLeft,
    ]);

    const sStyle = useMemo(() => {
      return {
        ...getStyleValue("left", sLeft),
        ...getStyleValue("fontSize", sFontSize),
        ...getStyleValue("fontFamily", sFontFamily),
        ...getStyleValue("top", sTop),
      };
    }, [sLeft, sFontSize, sFontFamily, sTop]);

    return (
      <View style={[styles.ellipseParent, groupViewStyle]}>
        <Image
          style={styles.componentChild}
          resizeMode="cover"
          source={ellipse36}
        />
        <Text style={[styles.s, sStyle]}>{s}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  componentChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  s: {
    top: "25.83%",
    left: "35.42%",
    fontSize: 10,
    lineHeight: 12,
    fontFamily: FontFamily.price,
    color: Color.grayScaleLabel,
    textAlign: "center",
    position: "absolute",
  },
  ellipseParent: {
    width: 24,
    height: 24,
  },
});

export default Group;
