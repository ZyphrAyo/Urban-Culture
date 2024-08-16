import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Logo1 from "./Logo1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const URBANCULTURE = memo(() => {
  return (
    <View style={styles.urbanCulture}>
      <View style={styles.urbanCulture}>
        <View style={styles.logoWrapper}>
          <Logo1 />
        </View>
        <Text style={styles.streamlineYourDesign}>
          Streamline your design process with the Urban Culture eCommerce UI Kit
        </Text>
      </View>
      <Text style={styles.byZyphruix}>bY_ZyphrUIX</Text>
      <Image
        style={styles.softStarIcon}
        resizeMode="cover"
        source={require("../assets/soft-star1.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  logoWrapper: {
    width: 277,
    alignItems: "center",
  },
  streamlineYourDesign: {
    fontSize: FontSize.size_smi_7,
    lineHeight: 19,
    fontFamily: FontFamily.price,
    color: Color.blackMBody,
    width: 260,
    height: 40,
    marginTop: 9.1,
    textAlign: "center",
  },
  urbanCulture: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  byZyphruix: {
    fontSize: FontSize.size_sm_6,
    letterSpacing: 4,
    lineHeight: 36,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.yellow,
    height: 35,
    opacity: 0.8,
    marginTop: 4.5,
    textAlign: "center",
    alignSelf: "stretch",
  },
  softStarIcon: {
    width: 204,
    height: 29,
    marginTop: 4.5,
  },
});

export default URBANCULTURE;
