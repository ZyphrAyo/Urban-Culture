import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Emailpassword from "./Emailpassword";
import Button3 from "./Button3";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame5 = memo(() => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameFlexBox}>
        <View style={styles.forgotPasswordParent}>
          <Text style={[styles.forgotPassword, styles.forgotPasswordTypo]}>
            Forgot Password?
          </Text>
          <View style={styles.frameParent}>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.emailpasswordParent}>
                <Emailpassword
                  user1={require("../assets/user2.png")}
                  usernameOrEmail="Enter Your Email Address"
                  emailpasswordPosition="absolute"
                  emailpasswordTop={0}
                  emailpasswordLeft={0}
                  rectangleViewBorderRadius={6}
                  rectangleViewBackgroundColor="rgba(255, 255, 255, 0.6)"
                  rectangleViewBorderColor="#fff"
                  rectangleViewBorderWidth={0.2}
                  usernameOrEmailFontWeight="unset"
                  usernameOrEmailFontFamily="Taviraj-Regular"
                  usernameOrEmailColor="#919191"
                />
                <Text
                  style={[
                    styles.weWillSendContainer,
                    styles.forgotPasswordTypo,
                  ]}
                >
                  <Text style={styles.text}>*</Text>
                  <Text style={styles.text1}>{` `}</Text>
                  <Text style={styles.weWillSend}>
                    We will send you a message to set or reset your new password
                  </Text>
                </Text>
              </View>
            </View>
            <Button3
              text="Submit"
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
              buttonMarginTop={30}
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
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  forgotPasswordTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
  },
  frameFlexBox: {
    alignItems: "center",
    width: 320,
  },
  forgotPassword: {
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
    alignSelf: "stretch",
  },
  text: {
    color: Color.inputPurple,
  },
  text1: {
    color: Color.colorDimgray_100,
  },
  weWillSend: {
    color: Color.colorDarkslategray_100,
  },
  weWillSendContainer: {
    top: 74,
    left: 0,
    fontSize: FontSize.bodyM_size,
    lineHeight: 24,
    width: 235,
    height: 30,
    position: "absolute",
  },
  emailpasswordParent: {
    height: 55,
    width: 320,
  },
  frameWrapper: {
    height: 123,
  },
  frameParent: {
    marginTop: 44,
    alignSelf: "stretch",
  },
  forgotPasswordParent: {
    alignSelf: "stretch",
  },
  frame: {
    top: 240,
    left: 27,
    width: 321,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
  },
});

export default Frame5;
