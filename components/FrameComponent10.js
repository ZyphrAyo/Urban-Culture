import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const FrameComponent10 = memo(() => {
  return (
    <View style={styles.splashIntroParent}>
      <View style={styles.splashIntro}>
        <View style={styles.mainLogo}>
          <Text style={styles.urbanCulture}>
            <Text style={styles.urban}>URBAN</Text>
            <Text style={styles.text}>{` 
`}</Text>
            <Text style={styles.culture}>CULTURE</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <View style={styles.buttonFlexBox}>
          <Text style={styles.getStarted}>Get Started</Text>
          <Image
            style={styles.forwardArrowIcon}
            resizeMode="cover"
            source={require("../assets/forward-arrow1.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  buttonFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  urban: {
    color: Color.primary,
  },
  text: {
    color: Color.blackTitleActive,
  },
  culture: {
    color: Color.colorCadetblue_100,
  },
  urbanCulture: {
    fontSize: FontSize.size_56xl_1,
    lineHeight: 88,
    fontWeight: "700",
    fontFamily: FontFamily.arefRuqaaInkBold,
    textAlign: "center",
  },
  mainLogo: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  splashIntro: {
    height: 253,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  getStarted: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    textAlign: "left",
    color: Color.primary,
  },
  forwardArrowIcon: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  button: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBisque,
    borderStyle: "solid",
    borderColor: Color.offWhite,
    borderWidth: 0.2,
    height: 56,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  splashIntroParent: {
    position: "absolute",
    marginTop: -154,
    marginLeft: -164.5,
    top: "50%",
    left: "50%",
    width: 330,
    alignItems: "center",
  },
});

export default FrameComponent10;
