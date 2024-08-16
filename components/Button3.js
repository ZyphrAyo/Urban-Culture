import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button3 = memo(
  ({
    text = "button",
    iconPlaceholders,
    showIcon = true,
    buttonPosition,
    buttonBorderStyle,
    buttonBorderColor,
    buttonBorderWidth,
    buttonMarginLeft,
    buttonBottom,
    buttonLeft,
    buttonBackgroundColor,
    buttonWidth,
    buttonHeight,
    buttonBorderRadius,
    buttonMarginTop,
    buttonPaddingHorizontal,
    buttonPaddingVertical,
    buttonColor,
    buttonFontSize,
    iconPlaceholdersWidth,
    iconPlaceholdersHeight,
    iconPlaceholdersMarginLeft,
  }) => {
    const button3Style = useMemo(() => {
      return {
        ...getStyleValue("position", buttonPosition),
        ...getStyleValue("borderStyle", buttonBorderStyle),
        ...getStyleValue("borderColor", buttonBorderColor),
        ...getStyleValue("borderWidth", buttonBorderWidth),
        ...getStyleValue("marginLeft", buttonMarginLeft),
        ...getStyleValue("bottom", buttonBottom),
        ...getStyleValue("left", buttonLeft),
        ...getStyleValue("backgroundColor", buttonBackgroundColor),
        ...getStyleValue("width", buttonWidth),
        ...getStyleValue("height", buttonHeight),
        ...getStyleValue("borderRadius", buttonBorderRadius),
        ...getStyleValue("marginTop", buttonMarginTop),
        ...getStyleValue("paddingHorizontal", buttonPaddingHorizontal),
        ...getStyleValue("paddingVertical", buttonPaddingVertical),
      };
    }, [
      buttonPosition,
      buttonBorderStyle,
      buttonBorderColor,
      buttonBorderWidth,
      buttonMarginLeft,
      buttonBottom,
      buttonLeft,
      buttonBackgroundColor,
      buttonWidth,
      buttonHeight,
      buttonBorderRadius,
      buttonMarginTop,
      buttonPaddingHorizontal,
      buttonPaddingVertical,
    ]);

    const button4Style = useMemo(() => {
      return {
        ...getStyleValue("color", buttonColor),
        ...getStyleValue("fontSize", buttonFontSize),
      };
    }, [buttonColor, buttonFontSize]);

    const iconPlaceholdersStyle = useMemo(() => {
      return {
        ...getStyleValue("width", iconPlaceholdersWidth),
        ...getStyleValue("height", iconPlaceholdersHeight),
        ...getStyleValue("marginLeft", iconPlaceholdersMarginLeft),
      };
    }, [
      iconPlaceholdersWidth,
      iconPlaceholdersHeight,
      iconPlaceholdersMarginLeft,
    ]);

    return (
      <View style={[styles.statehover, button3Style]}>
        <View style={styles.buttonParent}>
          <Text style={[styles.button, button4Style]}>{text}</Text>
          {showIcon && (
            <Image
              style={[styles.iconPlaceholders, iconPlaceholdersStyle]}
              resizeMode="cover"
              source={iconPlaceholders}
            />
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.greyMLabel,
    textAlign: "left",
  },
  iconPlaceholders: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  buttonParent: {
    flexDirection: "row",
  },
  statehover: {
    borderStyle: "solid",
    borderColor: Color.primary,
    borderWidth: 1,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
  },
});

export default Button3;
