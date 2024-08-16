import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SignUp1 = memo(
  ({
    createAnAccount,
    signUp,
    group42110,
    group42111,
    group42112,
    signUpMarginTop,
    createAnAccountWidth,
    createAnAccountRight,
    createAnAccountLeft,
    createAnAccountFontSize,
    signUpColor,
    signUpFontWeight,
    signUpFontFamily,
  }) => {
    const signUpStyle = useMemo(() => {
      return {
        ...getStyleValue("marginTop", signUpMarginTop),
      };
    }, [signUpMarginTop]);

    const createAnAccountStyle = useMemo(() => {
      return {
        ...getStyleValue("width", createAnAccountWidth),
        ...getStyleValue("right", createAnAccountRight),
        ...getStyleValue("left", createAnAccountLeft),
      };
    }, [createAnAccountWidth, createAnAccountRight, createAnAccountLeft]);

    const createAnAccount1Style = useMemo(() => {
      return {
        ...getStyleValue("fontSize", createAnAccountFontSize),
      };
    }, [createAnAccountFontSize]);

    const signUp1Style = useMemo(() => {
      return {
        ...getStyleValue("color", signUpColor),
        ...getStyleValue("fontWeight", signUpFontWeight),
        ...getStyleValue("fontFamily", signUpFontFamily),
      };
    }, [signUpColor, signUpFontWeight, signUpFontFamily]);

    return (
      <View style={[styles.signUp, signUpStyle]}>
        <View style={[styles.createAnAccount, createAnAccountStyle]}>
          <Text
            style={[
              styles.createAnAccount1,
              styles.orContinueWithTypo,
              createAnAccount1Style,
            ]}
          >
            {createAnAccount}
          </Text>
          <Text style={[styles.signUp1, styles.signUp1Layout, signUp1Style]}>
            {signUp}
          </Text>
        </View>
        <View style={styles.goodleFbTwitterSignIn}>
          <Text style={[styles.orContinueWith, styles.orContinueWithTypo]}>
            - OR Continue With -
          </Text>
          <View style={styles.buttons}>
            <View style={styles.groupParent}>
              <Image
                style={styles.frameLayout}
                resizeMode="cover"
                source={group42110}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={group42111}
              />
              <Image
                style={[styles.frameItem, styles.frameLayout]}
                resizeMode="cover"
                source={group42112}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  orContinueWithTypo: {
    fontFamily: FontFamily.bodyS,
    textAlign: "center",
  },
  signUp1Layout: {
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
  },
  frameLayout: {
    height: 50,
    width: 50,
  },
  createAnAccount1: {
    color: Color.greyMLabel,
    textAlign: "center",
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
  },
  signUp1: {
    fontWeight: "600",
    fontFamily: FontFamily.tavirajSemiBold,
    color: Color.inputPurple,
    marginLeft: 5,
    textAlign: "center",
  },
  createAnAccount: {
    height: "13.24%",
    width: "82.63%",
    top: "87.13%",
    right: "7.89%",
    bottom: "-0.37%",
    left: "9.47%",
    flexDirection: "row",
    position: "absolute",
  },
  orContinueWith: {
    fontSize: FontSize.bodyM_size,
    lineHeight: 24,
    color: Color.blackMBody,
    textAlign: "center",
  },
  frameItem: {
    marginLeft: 20,
  },
  groupParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    marginTop: 20,
    flexDirection: "row",
  },
  goodleFbTwitterSignIn: {
    height: "69.12%",
    width: "100%",
    top: "-3.31%",
    right: "0%",
    bottom: "34.19%",
    left: "0%",
    alignItems: "center",
    position: "absolute",
  },
  signUp: {
    width: 190,
    height: 136,
  },
});

export default SignUp1;
