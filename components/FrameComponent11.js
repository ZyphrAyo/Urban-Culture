import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";

const FrameComponent11 = memo(() => {
  return (
    <View style={styles.imageParent}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image36.png")}
      />
      <View style={styles.softStarParent}>
        <Image
          style={styles.softIconLayout}
          resizeMode="cover"
          source={require("../assets/soft-star6.png")}
        />
        <Image
          style={[styles.softStarIcon1, styles.softIconLayout]}
          resizeMode="cover"
          source={require("../assets/soft-star7.png")}
        />
        <Image
          style={[styles.softStarIcon1, styles.softIconLayout]}
          resizeMode="cover"
          source={require("../assets/soft-star7.png")}
        />
        <Image
          style={[styles.softStarIcon1, styles.softIconLayout]}
          resizeMode="cover"
          source={require("../assets/soft-star7.png")}
        />
        <Image
          style={[styles.softStarIcon1, styles.softIconLayout]}
          resizeMode="cover"
          source={require("../assets/soft-star7.png")}
        />
      </View>
      <Image
        style={styles.resizeIcon}
        resizeMode="cover"
        source={require("../assets/resize.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  softIconLayout: {
    height: 10,
    width: 10,
  },
  imageIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    height: 460,
    width: "100%",
    zIndex: 0,
  },
  softStarIcon1: {
    marginLeft: 6,
  },
  softStarParent: {
    flexDirection: "row",
    zIndex: 1,
    marginTop: 15,
    alignItems: "center",
  },
  resizeIcon: {
    top: 415,
    left: 293,
    width: 24,
    height: 24,
    zIndex: 2,
    position: "absolute",
  },
  imageParent: {
    top: 77,
    left: 16,
    width: 343,
    alignItems: "center",
    position: "absolute",
  },
});

export default FrameComponent11;
