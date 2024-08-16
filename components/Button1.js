import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = memo(
  ({
    iconPlaceholders,
    text = "button",
    showIcon = true,
    buttonPosition,
    buttonHeight,
    buttonMarginLeft,
    buttonBottom,
    buttonLeft,
    buttonWidth,
    buttonTop,
    buttonMarginTop,
  }) => {
    const button2Style = useMemo(() => {
      return {
        ...getStyleValue("position", buttonPosition),
        ...getStyleValue("height", buttonHeight),
        ...getStyleValue("marginLeft", buttonMarginLeft),
        ...getStyleValue("bottom", buttonBottom),
        ...getStyleValue("left", buttonLeft),
        ...getStyleValue("width", buttonWidth),
        ...getStyleValue("top", buttonTop),
        ...getStyleValue("marginTop", buttonMarginTop),
      };
    }, [
      buttonPosition,
      buttonHeight,
      buttonMarginLeft,
      buttonBottom,
      buttonLeft,
      buttonWidth,
      buttonTop,
      buttonMarginTop,
    ]);

    return (
      <View style={[styles.stateiconLeftDefault, button2Style]}>
        <View style={styles.iconPlaceholdersParent}>
          {showIcon && (
            <Image
              style={styles.iconPlaceholders}
              resizeMode="cover"
              source={iconPlaceholders}
            />
          )}
          <Text style={styles.button}>{text}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconPlaceholders: {
    width: 18,
    height: 18,
  },
  button: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.inputPurple,
    textAlign: "left",
    marginLeft: 10,
  },
  iconPlaceholdersParent: {
    flexDirection: "row",
  },
  stateiconLeftDefault: {
    backgroundColor: Color.blackTitleActive,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
  },
});

export default Button1;
