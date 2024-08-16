import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const FollowUs = memo(() => {
  return (
    <View style={styles.followUs}>
      <View style={styles.frame}>
        <Text style={styles.followUs1}>Follow us</Text>
        <Image
          style={styles.instagramIcon}
          resizeMode="cover"
          source={require("../assets/instagram1.png")}
        />
      </View>
      <View style={styles.frame1}>
        <View style={styles.frameFlexBox}>
          <Image
            style={styles.imageIconLayout}
            resizeMode="cover"
            source={require("../assets/image9.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/image9.png")}
          />
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Image
            style={styles.imageIconLayout}
            resizeMode="cover"
            source={require("../assets/image9.png")}
          />
          <Image
            style={[styles.imageIcon1, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/image9.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  imageIconLayout: {
    width: 164,
    height: 164,
  },
  frameFlexBox: {
    flexDirection: "row",
    height: 164,
    width: 342,
    overflow: "hidden",
    alignItems: "center",
  },
  followUs1: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.grayScaleTitleActive,
    textAlign: "center",
  },
  instagramIcon: {
    width: 24,
    height: 24,
    marginTop: 18,
    overflow: "hidden",
  },
  frame: {
    width: 134,
    height: 66,
    overflow: "hidden",
    alignItems: "center",
  },
  imageIcon1: {
    marginLeft: 14,
  },
  frame3: {
    marginTop: 15,
  },
  frame1: {
    height: 343,
    width: 342,
    marginTop: 18,
    overflow: "hidden",
    alignItems: "center",
  },
  followUs: {
    position: "absolute",
    top: 3798,
    left: 0,
    width: 375,
    height: 456,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_base,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_mid,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
  },
});

export default FollowUs;
