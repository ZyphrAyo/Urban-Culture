import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import FrameComponent10 from "../components/FrameComponent10";
import { Border, Color } from "../GlobalStyles";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreen1}>
      <Image
        style={styles.splashScreen1Child}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      />
      <View style={[styles.btnhome, styles.btnhomeLayout]}>
        <Image
          style={[styles.backgroundIcon, styles.btnhomeLayout]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <View style={styles.view} />
      </View>
      <FrameComponent10 />
    </View>
  );
};

const styles = StyleSheet.create({
  btnhomeLayout: {
    height: 35,
    width: 375,
    left: 0,
    position: "absolute",
  },
  splashScreen1Child: {
    marginTop: -409,
    marginLeft: -188.5,
    top: "50%",
    left: "50%",
    width: 377,
    height: 819,
    position: "absolute",
  },
  backgroundIcon: {
    top: 0,
  },
  view: {
    top: 21,
    left: 121,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkgray_100,
    width: 134,
    height: 5,
    position: "absolute",
  },
  btnhome: {
    top: 777,
  },
  splashScreen1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SplashScreen;
