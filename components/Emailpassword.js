import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Emailpassword = memo(
  ({
    user1,
    usernameOrEmail,
    emailpasswordPosition,
    emailpasswordTop,
    emailpasswordLeft,
    rectangleViewBorderRadius,
    rectangleViewBackgroundColor,
    rectangleViewBorderColor,
    rectangleViewBorderWidth,
    usernameOrEmailFontWeight,
    usernameOrEmailFontFamily,
    usernameOrEmailColor,
  }) => {
    const emailpasswordStyle = useMemo(() => {
      return {
        ...getStyleValue("position", emailpasswordPosition),
        ...getStyleValue("top", emailpasswordTop),
        ...getStyleValue("left", emailpasswordLeft),
      };
    }, [emailpasswordPosition, emailpasswordTop, emailpasswordLeft]);

    const rectangleViewStyle = useMemo(() => {
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

    const usernameOrEmailStyle = useMemo(() => {
      return {
        ...getStyleValue("fontWeight", usernameOrEmailFontWeight),
        ...getStyleValue("fontFamily", usernameOrEmailFontFamily),
        ...getStyleValue("color", usernameOrEmailColor),
      };
    }, [
      usernameOrEmailFontWeight,
      usernameOrEmailFontFamily,
      usernameOrEmailColor,
    ]);

    return (
      <View style={[styles.emailpasswordLayout, emailpasswordStyle]}>
        <View
          style={[
            styles.emailpasswordChild,
            styles.emailpasswordLayout,
            rectangleViewStyle,
          ]}
        />
        <View style={styles.userParent}>
          <Image style={styles.userIcon} resizeMode="cover" source={user1} />
          <Text style={[styles.usernameOrEmail, usernameOrEmailStyle]}>
            {usernameOrEmail}
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  emailpasswordLayout: {
    height: 55,
    width: 314,
  },
  emailpasswordChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhitesmoke_100,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_100,
    borderWidth: 1,
    position: "absolute",
  },
  userIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  usernameOrEmail: {
    fontSize: FontSize.bodyM_size,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.uILables,
    color: Color.primaryGrey,
    textAlign: "center",
    marginLeft: 32,
  },
  userParent: {
    marginTop: -11.5,
    marginLeft: -139,
    top: "50%",
    left: "50%",
    width: 277,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
});

export default Emailpassword;
