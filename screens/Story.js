import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import NavBarLt from "../components/NavBarLt";
import Button2 from "../components/Button2";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Story = () => {
  return (
    <View style={[styles.story, styles.storyLayout]}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtMarginLeft="unset"
        navBarLtTop={0}
        navBarLtLeft={0}
        logoHeight="38"
        urbanCultureFontSize={22}
      />
      <Text
        style={styles.elevateYourOnline}
      >{`Elevate your online store with the Open Fashion UI Kit, a free resource designed for efficient and stunning ecommerce design. This kit includes over 50 versatile components, supporting both light and dark modes to suit various user preferences. With more than 60 ready-to-use mobile screens, it streamlines the design process, helping you launch your shop quickly and effectively.
To get started, open the Urban Culture - Ecommerce UI Kit file in Figma. This intuitive tool will help you utilize the kit’s components to create a sleek, user-friendly ecommerce experience. Transform your store with ease using this comprehensive UI kit.`}</Text>
      <Text style={styles.receiveEarlyAccess}>
        Receive early access to new arrivals, sales, exclusive content, events
        and much more!
      </Text>
      <Text style={[styles.ourStory, styles.signUpTypo]}>OUR Story</Text>
      <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      <Image
        style={[styles.starIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/star.png")}
      />
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/4.png")}
      />
      <View style={styles.inputtextlightfocus}>
        <View style={[styles.input, styles.textPosition]}>
          <View style={[styles.line, styles.linePosition]} />
          <View style={[styles.frame, styles.linePosition]}>
            <Text style={[styles.text, styles.textPosition]}>
              Email address
            </Text>
          </View>
        </View>
      </View>
      <Button2
        text="Submit"
        iconPlaceholders={require("../assets/forward-arrow1.png")}
        showIcon
        buttonPosition="absolute"
        buttonBorderStyle="unset"
        buttonBorderColor="unset"
        buttonTop={846}
        buttonLeft={0}
        buttonBackgroundColor="#020202"
        buttonWidth={375}
        buttonHeight={56}
        buttonMarginLeft="unset"
        buttonColor="#dec1ff"
      />
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storyLayout: {
    width: "100%",
    overflow: "hidden",
  },
  signUpTypo: {
    fontFamily: FontFamily.tavirajLight,
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: 4,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    lineHeight: 24,
    color: Color.colorGray_100,
    position: "absolute",
  },
  iconPosition: {
    width: 125,
    left: 126,
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    position: "absolute",
  },
  linePosition: {
    bottom: "0.8%",
    left: "0%",
    position: "absolute",
  },
  elevateYourOnline: {
    top: 144,
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    height: 205,
    width: 345,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.bodyL,
    left: 14,
    position: "absolute",
  },
  receiveEarlyAccess: {
    top: 711,
    fontSize: FontSize.size_sm,
    height: 46,
    textAlign: "center",
    color: Color.greyPlaceholder,
    lineHeight: 24,
    width: 345,
    fontFamily: FontFamily.bodyL,
    left: 14,
    position: "absolute",
  },
  ourStory: {
    top: 94,
    left: 76,
    width: 226,
    height: 33,
  },
  signUp: {
    top: 665,
    left: 18,
    width: 341,
    height: 85,
  },
  starIcon: {
    top: 121,
    height: 18,
  },
  icon: {
    top: 697,
    height: 9,
  },
  line: {
    height: "2%",
    width: "99.62%",
    top: "97.2%",
    right: "0.38%",
    backgroundColor: "#d4d4d4",
  },
  text: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.bodyL_size,
    color: Color.greyPlaceholder,
    lineHeight: 24,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.bodyL,
  },
  frame: {
    height: "100%",
    width: "94.75%",
    top: "-0.8%",
    right: "5.25%",
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden",
  },
  input: {
    height: "98.04%",
    top: "1.96%",
    right: "0%",
    bottom: "0%",
    overflow: "hidden",
    width: "100%",
  },
  inputtextlightfocus: {
    top: 767,
    left: 16,
    width: 343,
    height: 51,
    position: "absolute",
  },
  imageIcon: {
    top: 379,
    left: -1,
    width: 376,
    height: 237,
    position: "absolute",
  },
  story: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 902,
    overflow: "hidden",
  },
});

export default Story;
