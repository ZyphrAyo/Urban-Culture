import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Password = memo(
  ({
    group34013,
    password,
    eye,
    rectangleViewBorderRadius,
    rectangleViewBackgroundColor,
    rectangleViewBorderColor,
    rectangleViewBorderWidth,
    passwordFontWeight,
    passwordFontFamily,
    passwordColor,
  }) => {
    const rectangleView1Style = useMemo(() => {
      return {
        ...getStyleValue("borderRadius", rectangleViewBorderRadius),
        ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
        ...getStyleValue("borderColor", rectangleViewBorderColor),
        ...getStyleValue("borderWidth", rectangleViewBorderWidth),
      };
    }, [
      rectangleViewBorderRadius,
      rectangleViewBackgroundColor,
      rectangleViewBorderColor,
      rectangleViewBorderWidth,
    ]);

    const passwordStyle = useMemo(() => {
      return {
        ...getStyleValue("fontWeight", passwordFontWeight),
        ...getStyleValue("fontFamily", passwordFontFamily),
        ...getStyleValue("color", passwordColor),
      };
    }, [passwordFontWeight, passwordFontFamily, passwordColor]);

    return (
      <View style={styles.passwordLayout}>
        <View
          style={[
            styles.passwordChild,
            styles.passwordLayout,
            rectangleView1Style,
          ]}
        />
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <View style={[styles.groupParent, styles.parentFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={group34013}
            />
            <Text style={[styles.password1, passwordStyle]}>{password}</Text>
          </View>
          <Image style={styles.eyeIcon} resizeMode="cover" source={eye} />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  passwordLayout: {
    height: 55,
    width: 316,
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  passwordChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    position: "absolute",
  },
  frameChild: {
    width: 16,
    height: 20,
  },
  password1: {
    fontSize: FontSize.bodyM_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.uILables,
    color: Color.primaryGrey,
    textAlign: "center",
    marginLeft: 41,
  },
  groupParent: {
    width: 111,
  },
  eyeIcon: {
    width: 20,
    overflow: "hidden",
    marginLeft: 140,
    height: 20,
  },
  frameParent: {
    marginTop: -11.5,
    marginLeft: -141,
    top: "50%",
    left: "50%",
    width: 281,
    position: "absolute",
  },
});

export default Password;
