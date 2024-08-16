import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Emailpassword from "./Emailpassword";
import Password from "./Password";
import Button3 from "./Button3";
import SignUp1 from "./SignUp1";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Frame3 = memo(() => {
  return (
    <View style={styles.frame}>
      <View style={[styles.frameParent, styles.parentLayout]}>
        <View style={styles.welcomeBackParent}>
          <Text style={styles.welcomeBack}>Welcome Back!</Text>
          <View style={styles.frameGroup}>
            <View style={[styles.emailpasswordParent, styles.parentLayout]}>
              <Emailpassword
                user1={require("../assets/user.png")}
                usernameOrEmail="Username or Email"
                emailpasswordPosition="relative"
                emailpasswordTop="unset"
                emailpasswordLeft="unset"
                rectangleViewBorderRadius={6}
                rectangleViewBackgroundColor="rgba(255, 255, 255, 0.6)"
                rectangleViewBorderColor="#f9f9f9"
                rectangleViewBorderWidth={1}
                usernameOrEmailFontWeight="unset"
                usernameOrEmailFontFamily="Taviraj-Regular"
                usernameOrEmailColor="#919191"
              />
              <View style={styles.passwordParent}>
                <Password
                  group34013={require("../assets/group-34013.png")}
                  password="Password"
                  eye={require("../assets/eye.png")}
                  rectangleViewBorderRadius={6}
                  rectangleViewBackgroundColor="rgba(255, 255, 255, 0.6)"
                  rectangleViewBorderColor="#f9f9f9"
                  rectangleViewBorderWidth={1}
                  passwordFontWeight="unset"
                  passwordFontFamily="Taviraj-Regular"
                  passwordColor="#919191"
                />
                <View
                  style={[styles.frameContainer, styles.groupWrapperFlexBox]}
                >
                  <View
                    style={[styles.groupWrapper, styles.groupWrapperFlexBox]}
                  >
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../assets/group-340131.png")}
                    />
                  </View>
                  <Image
                    style={styles.eyeIcon}
                    resizeMode="cover"
                    source={require("../assets/eye1.png")}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
          <Button3
            text="Login"
            iconPlaceholders={require("../assets/icon-placeholders.png")}
            showIcon={false}
            buttonPosition="unset"
            buttonBorderStyle="unset"
            buttonBorderColor="unset"
            buttonMarginLeft="unset"
            buttonBottom="unset"
            buttonLeft="unset"
            buttonBackgroundColor="rgba(139, 190, 178, 0.6)"
            buttonWidth={314}
            buttonHeight={55}
            buttonBorderRadius={6}
            buttonMarginTop={44}
            buttonPaddingHorizontal="unset"
            buttonPaddingVertical="unset"
            buttonColor="#020202"
            buttonFontSize={16}
            iconPlaceholdersWidth={18}
            iconPlaceholdersHeight={18}
            iconPlaceholdersMarginLeft={10}
          />
        </View>
        <SignUp1
          createAnAccount="Create An Account"
          signUp="Sign Up"
          group42110={require("../assets/group-42110.png")}
          group42111={require("../assets/group-42111.png")}
          group42112={require("../assets/group-42112.png")}
          signUpMarginTop={50}
          createAnAccountWidth="96.84%"
          createAnAccountRight="0.79%"
          createAnAccountLeft="2.37%"
          createAnAccountFontSize={15}
          signUpColor="#89608e"
          signUpFontWeight="600"
          signUpFontFamily="Taviraj-SemiBold"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  parentLayout: {
    width: 314,
    alignItems: "center",
  },
  groupWrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  welcomeBack: {
    fontSize: FontSize.size_21xl,
    letterSpacing: 4,
    lineHeight: 40,
    textTransform: "uppercase",
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    textShadowColor: "rgba(0, 0, 0, 0.07)",
    textShadowOffset: {
      width: 0,
      height: 100,
    },
    textShadowRadius: 80,
    fontFamily: FontFamily.bodyS,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 16,
    height: 20,
  },
  groupWrapper: {
    width: 111,
  },
  eyeIcon: {
    width: 20,
    marginLeft: 140,
    height: 20,
    overflow: "hidden",
  },
  frameContainer: {
    width: 281,
    marginTop: -37,
  },
  passwordParent: {
    height: 55,
    justifyContent: "flex-end",
    marginTop: 30,
    width: 316,
    alignItems: "center",
  },
  emailpasswordParent: {
    height: 136,
    alignItems: "center",
  },
  forgotPassword: {
    fontSize: FontSize.bodyM_size,
    lineHeight: 24,
    color: Color.primary,
    textAlign: "right",
    marginTop: 14,
    width: 316,
    fontFamily: FontFamily.bodyS,
  },
  frameGroup: {
    height: 167,
    marginTop: 44,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeBackParent: {
    alignSelf: "stretch",
  },
  frameParent: {
    alignItems: "center",
  },
  frame: {
    position: "absolute",
    top: 118,
    left: 30,
    width: 315,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Frame3;
