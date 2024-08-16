import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import NavBarLt from "../components/NavBarLt";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterPrimary from "../components/FooterPrimary";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ContactUs = () => {
  return (
    <View style={styles.contactUs}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtMarginLeft="unset"
        navBarLtTop={0}
        navBarLtLeft={0}
        logoHeight="38"
        urbanCultureFontSize={22}
      />
      <Text style={[styles.contactUs1, styles.toSendUsFlexBox]}>
        Contact us
      </Text>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star.png")}
      />
      <FrameComponent />
      <FrameComponent1 />
      <View
        style={[styles.toSendUsAPrivateOrDirectParent, styles.sendPosition]}
      >
        <Text style={[styles.toSendUs, styles.sendPosition]}>
          To send us a private or direct message, like @Zyphr_uix on Instagram
          or follow us on Twitter. We’ll get back to you ASAP. Please include
          your name, order number, and email address for a faster response!
        </Text>
        <Image
          style={styles.twitterIcon}
          resizeMode="cover"
          source={require("../assets/twitter.png")}
        />
      </View>
      <FooterPrimary
        youTube={require("../assets/youtube.png")}
        softStar={require("../assets/soft-star.png")}
        softStar1={require("../assets/soft-star.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft="unset"
        footerPrimaryBottom="unset"
        footerPrimaryLeft={0}
        footerPrimaryTop={1032}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  toSendUsFlexBox: {
    textAlign: "center",
    lineHeight: 24,
  },
  sendPosition: {
    width: 345,
    left: 14,
    position: "absolute",
  },
  contactUs1: {
    top: 94,
    left: 76,
    fontSize: FontSize.size_lg,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.tavirajLight,
    color: Color.colorBlack,
    width: 226,
    height: 33,
    position: "absolute",
  },
  starIcon: {
    top: 126,
    left: 126,
    width: 125,
    height: 18,
    position: "absolute",
  },
  toSendUs: {
    top: 66,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bodyL,
    color: Color.grayScaleBody,
    height: 123,
    textAlign: "center",
    lineHeight: 24,
  },
  twitterIcon: {
    top: 0,
    left: 148,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  toSendUsAPrivateOrDirectParent: {
    top: 817,
    height: 189,
  },
  contactUs: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1365,
    overflow: "hidden",
  },
});

export default ContactUs;
