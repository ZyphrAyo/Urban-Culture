import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import FrameComponent12 from "../components/FrameComponent12";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={styles.frame}>
        <Image
          style={styles.closeIcon}
          resizeMode="cover"
          source={require("../assets/close2.png")}
        />
        <View style={styles.menParent}>
          <Text style={styles.men}>MEn</Text>
          <Text style={styles.women}>Women</Text>
          <Text style={styles.women}>Kids</Text>
        </View>
      </View>
      <View style={styles.frame1}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame3.png")}
        />
        <FrameComponent12 />
        <View style={styles.customerServiceParent}>
          <View style={styles.customerService}>
            <Image
              style={styles.closeIcon}
              resizeMode="cover"
              source={require("../assets/call.png")}
            />
            <Text style={styles.text}>(00)123456789</Text>
          </View>
          <View style={styles.storeLocator}>
            <Image
              style={styles.closeIcon}
              resizeMode="cover"
              source={require("../assets/location.png")}
            />
            <Text style={styles.text}>Store locator</Text>
          </View>
        </View>
        <View style={styles.softStarParent}>
          <Image
            style={styles.softStarIcon}
            resizeMode="cover"
            source={require("../assets/soft-star.png")}
          />
          <View style={styles.socialsGrp}>
            <Image
              style={styles.twitterIcon}
              resizeMode="cover"
              source={require("../assets/twitter.png")}
            />
            <Image
              style={styles.instagramIcon}
              resizeMode="cover"
              source={require("../assets/instagram.png")}
            />
            <Image
              style={styles.instagramIcon}
              resizeMode="cover"
              source={require("../assets/youtube.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  men: {
    position: "relative",
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.blackTitleActive,
    textAlign: "left",
    width: 41,
    height: 20,
  },
  women: {
    position: "relative",
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.greyMLabel,
    textAlign: "left",
    marginLeft: 54,
  },
  menParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 20,
    marginLeft: 17,
    marginTop: 31,
  },
  frame: {
    width: 281,
    height: 75,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameIcon: {
    position: "relative",
    width: 314,
    height: 12,
    overflow: "hidden",
  },
  text: {
    position: "relative",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.grayScaleLabel,
    textAlign: "left",
    marginLeft: 16,
  },
  customerService: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  storeLocator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  customerServiceParent: {
    width: 151,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 68,
    marginLeft: 5,
    marginTop: 27,
  },
  softStarIcon: {
    position: "relative",
    width: 125,
    height: 18,
  },
  twitterIcon: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  instagramIcon: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
    marginLeft: 45,
  },
  socialsGrp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 28,
  },
  softStarParent: {
    width: 162,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 70,
    marginLeft: 93,
    marginTop: 27,
  },
  frame1: {
    width: 318,
    height: 523,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 3,
  },
  menu: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default Menu;
