import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Emailpassword from "../components/Emailpassword";
import Password from "../components/Password";
import Button3 from "../components/Button3";
import SignUp1 from "../components/SignUp1";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const SignUp = () => {
  return (
    <View style={styles.signUp}>
      <Image
        style={[styles.frameIcon, styles.framePosition]}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.frameParent}>
          <View style={styles.createAnAccountParent}>
            <Text
              style={[styles.createAnAccount, styles.createAnAccountFlexBox]}
            >{`Create an account `}</Text>
            <View style={styles.formElement}>
              <Emailpassword
                user1={require("../assets/user1.png")}
                usernameOrEmail="Username or Email"
                emailpasswordPosition="relative"
                emailpasswordTop="unset"
                emailpasswordLeft="unset"
                rectangleViewBorderRadius={6}
                rectangleViewBackgroundColor="rgba(255, 255, 255, 0.6)"
                rectangleViewBorderColor="#fff"
                rectangleViewBorderWidth={0.2}
                usernameOrEmailFontWeight="unset"
                usernameOrEmailFontFamily="Taviraj-Regular"
                usernameOrEmailColor="#919191"
              />
              <View style={[styles.passwordWrapper, styles.frameFlexBox]}>
                <Password
                  group34013={require("../assets/group-340132.png")}
                  password="Password"
                  eye={require("../assets/eye2.png")}
                  rectangleViewBorderRadius={6}
                  rectangleViewBackgroundColor="rgba(255, 255, 255, 0.6)"
                  rectangleViewBorderColor="#fff"
                  rectangleViewBorderWidth={0.2}
                  passwordFontWeight="unset"
                  passwordFontFamily="Taviraj-Regular"
                  passwordColor="#919191"
                />
              </View>
              <View style={[styles.passwordWrapper, styles.frameFlexBox]}>
                <Password
                  group34013={require("../assets/group-340132.png")}
                  password="Confirm Password"
                  eye={require("../assets/eye2.png")}
                  rectangleViewBorderRadius={6}
                  rectangleViewBackgroundColor="rgba(255, 255, 255, 0.6)"
                  rectangleViewBorderColor="#fff"
                  rectangleViewBorderWidth={0.2}
                  passwordFontWeight="unset"
                  passwordFontFamily="Taviraj-Regular"
                  passwordColor="#919191"
                />
              </View>
            </View>
            <View style={styles.byClickingTheRegisterButtoParent}>
              <Text
                style={[
                  styles.byClickingTheContainer,
                  styles.createAnAccountFlexBox,
                ]}
              >
                <Text style={styles.byClickingThe}>{`By clicking the `}</Text>
                <Text style={styles.register}>
                  <Text style={styles.register1}>Register</Text>
                </Text>
                <Text style={styles.buttonYouAgreeToThePubli}>
                  <Text style={styles.register}>{` `}</Text>
                  <Text style={styles.buttonYouAgree}>
                    button, you agree to the public offer
                  </Text>
                </Text>
              </Text>
              <Button3
                text="Register"
                iconPlaceholders={require("../assets/icon-placeholders1.png")}
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
                buttonMarginTop={20}
                buttonPaddingHorizontal="unset"
                buttonPaddingVertical="unset"
                buttonColor="#020202"
                buttonFontSize={16}
                iconPlaceholdersWidth={18}
                iconPlaceholdersHeight={18}
                iconPlaceholdersMarginLeft={10}
              />
            </View>
          </View>
          <SignUp1
            createAnAccount="I already have an account"
            signUp="Login"
            group42110={require("../assets/group-421101.png")}
            group42111={require("../assets/group-421111.png")}
            group42112={require("../assets/group-421121.png")}
            signUpMarginTop={45}
            createAnAccountWidth="114.74%"
            createAnAccountRight="-8.16%"
            createAnAccountLeft="-6.58%"
            createAnAccountFontSize={15}
            signUpColor="#89608e"
            signUpFontWeight="700"
            signUpFontFamily="Taviraj-Bold"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: "absolute",
    overflow: "hidden",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  createAnAccountFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  frameIcon: {
    top: -3,
    left: -1,
    width: 377,
    height: 819,
  },
  createAnAccount: {
    fontSize: FontSize.size_21xl,
    letterSpacing: 4,
    lineHeight: 40,
    textTransform: "uppercase",
    color: Color.colorDarkslategray_200,
    textShadowColor: "rgba(0, 0, 0, 0.07)",
    textShadowOffset: {
      width: 0,
      height: 100,
    },
    textShadowRadius: 80,
    fontFamily: FontFamily.bodyS,
  },
  passwordWrapper: {
    width: 316,
    marginTop: 30,
  },
  formElement: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  byClickingThe: {
    color: Color.blackMBody,
    fontFamily: FontFamily.bodyS,
  },
  register1: {
    fontWeight: "600",
    fontFamily: FontFamily.tavirajSemiBold,
  },
  register: {
    color: Color.primary,
  },
  buttonYouAgree: {
    color: Color.blackMBody,
  },
  buttonYouAgreeToThePubli: {
    fontFamily: FontFamily.bodyS,
  },
  byClickingTheContainer: {
    fontSize: FontSize.bodyM_size,
    lineHeight: 24,
  },
  byClickingTheRegisterButtoParent: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  createAnAccountParent: {
    alignSelf: "stretch",
  },
  frameParent: {
    width: 320,
    alignItems: "center",
  },
  frame: {
    top: 91,
    left: 27,
    width: 321,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignUp;
