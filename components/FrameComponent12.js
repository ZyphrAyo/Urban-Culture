import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent12 = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.newParent}>
        <Text style={styles.new}>New</Text>
        <Text style={styles.apparel}>Apparel</Text>
        <Text style={styles.apparel}>Bags</Text>
        <Text style={styles.apparel}>Shoes</Text>
        <Text style={styles.apparel}>{`Tshirts `}</Text>
        <Text style={styles.hoodies}>Hoodies</Text>
      </View>
      <View style={styles.dropdown}>
        <Image
          style={styles.forwardIcon}
          resizeMode="cover"
          source={require("../assets/forward6.png")}
        />
        <Image
          style={styles.forwardIcon1}
          resizeMode="cover"
          source={require("../assets/forward6.png")}
        />
        <Image
          style={styles.forwardIcon1}
          resizeMode="cover"
          source={require("../assets/forward6.png")}
        />
        <Image
          style={styles.forwardIcon1}
          resizeMode="cover"
          source={require("../assets/forward6.png")}
        />
        <Image
          style={styles.forwardIcon1}
          resizeMode="cover"
          source={require("../assets/forward6.png")}
        />
        <Image
          style={styles.forwardIcon1}
          resizeMode="cover"
          source={require("../assets/forward6.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  new: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.grayScaleTitleActive,
    textAlign: "left",
  },
  apparel: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.grayScaleTitleActive,
    textAlign: "left",
    marginTop: 25,
  },
  hoodies: {
    position: "relative",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.grayScaleTitleActive,
    textAlign: "left",
    width: 63,
    marginTop: 25,
  },
  newParent: {
    width: 58,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  forwardIcon: {
    position: "relative",
    width: 24,
    height: 24,
  },
  forwardIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    marginTop: 25,
  },
  dropdown: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameParent: {
    width: 306,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 269,
    marginLeft: 12,
    marginTop: 27,
  },
});

export default FrameComponent12;
