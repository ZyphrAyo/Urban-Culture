import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button2 = memo(
  ({
    iconPlaceholders,
    text = "button",
    iconPlaceholders1,
    showIcon = true,
    buttonPosition,
    buttonTop,
    buttonLeft,
    buttonBackgroundColor,
    buttonWidth,
    buttonColor,
  }) => {
    const buttonStyle = useMemo(() => {
      return {
        ...getStyleValue("position", buttonPosition),
        ...getStyleValue("top", buttonTop),
        ...getStyleValue("left", buttonLeft),
        ...getStyleValue("backgroundColor", buttonBackgroundColor),
        ...getStyleValue("width", buttonWidth),
      };
    }, [
      buttonPosition,
      buttonTop,
      buttonLeft,
      buttonBackgroundColor,
      buttonWidth,
    ]);

    const button1Style = useMemo(() => {
      return {
        ...getStyleValue("color", buttonColor),
      };
    }, [buttonColor]);

    return (
      <View style={[styles.statelfIcon, buttonStyle]}>
        <View style={styles.iconPlaceholdersParent}>
          {showIcon && (
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={iconPlaceholders}
            />
          )}
          <Text style={[styles.button, button1Style]}>{text}</Text>
          <Image
            style={[styles.iconPlaceholders1, styles.iconLayout]}
            resizeMode="cover"
            source={iconPlaceholders1}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconLayout: {
    height: 18,
    width: 18,
  },
  button: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.greyMLabel,
    textAlign: "left",
    marginLeft: 30,
  },
  iconPlaceholders1: {
    marginLeft: 30,
  },
  iconPlaceholdersParent: {
    flexDirection: "row",
  },
  statelfIcon: {
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

export default Button2;
