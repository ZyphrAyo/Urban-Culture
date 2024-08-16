import React, { useMemo, memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = memo(({ zYPHRUIX, propLeft }) => {
  const frameLinearGradientStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <LinearGradient
      style={[styles.frameWrapper, frameLinearGradientStyle]}
      locations={[0, 1]}
      colors={["#434343", "#000"]}
      useAngle={true}
      angle={90}
    >
      <View style={styles.mastercardParent}>
        <Image
          style={styles.mastercardIcon}
          resizeMode="cover"
          source={require("../assets/mastercard1.png")}
        />
        <View style={styles.frameParent}>
          <View style={styles.zyphrUixParent}>
            <Text style={styles.text1Typo}>{zYPHRUIX}</Text>
            <Text style={styles.text}>03/25</Text>
          </View>
          <Text style={[styles.text1, styles.text1Typo]}>
            2365 3654 2365 3698
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  text1Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyL_size,
  },
  mastercardIcon: {
    width: 52,
    height: 32,
  },
  text: {
    textAlign: "right",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyL_size,
  },
  zyphrUixParent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  text1: {
    alignSelf: "stretch",
  },
  frameParent: {
    marginTop: 70,
    alignSelf: "stretch",
  },
  mastercardParent: {
    width: 277,
    alignItems: "flex-end",
  },
  frameWrapper: {
    position: "absolute",
    top: 0,
    left: 331,
    borderRadius: Border.br_mini,
    width: 316,
    height: 190,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_xl,
    backgroundColor: Color.cardGrad,
  },
});

export default FrameComponent1;
