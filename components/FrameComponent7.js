import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Cart from "./Cart";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent7 = memo(() => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.bBakerStMarylParent}>
        <Text
          style={[styles.bBakerSt, styles.bakerTypo]}
        >{`123 Park St, Kolkata 712145 
Avenue Metro Rd `}</Text>
        <Text style={[styles.bBakerSt1, styles.bakerTypo]}>12345678910</Text>
        <Text style={[styles.cassieDonk, styles.cassieDonkTypo]}>
          Zyphr Uix
        </Text>
        <Image
          style={[styles.forwardIcon, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward2.png")}
        />
      </View>
      <View style={styles.masterCardEndingParent}>
        <Text style={[styles.masterCardEnding, styles.cassieDonkTypo]}>
          Master Card ••••69
        </Text>
        <Image
          style={styles.mastercardIcon}
          resizeMode="cover"
          source={require("../assets/mastercard.png")}
        />
        <Image
          style={[styles.forwardIcon1, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward3.png")}
        />
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
      </View>
      <Cart
        image={require("../assets/image32.png")}
        ellipse68={require("../assets/ellipse-681.png")}
        ellipse69={require("../assets/ellipse-681.png")}
        plus={require("../assets/plus5.png")}
        plus1={require("../assets/plus6.png")}
        cartMarginTop={15}
        cartPosition="relative"
        cartTop="unset"
        cartLeft="unset"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  bakerTypo: {
    textAlign: "left",
    color: Color.greyPlaceholder,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  cassieDonkTypo: {
    fontSize: FontSize.bodyL_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    top: "50%",
    position: "absolute",
  },
  forwardIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  groupLayout: {
    opacity: 0.1,
    height: 1,
    width: 344,
    borderTopWidth: 1,
    borderColor: Color.grayScaleTitleActive,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  bBakerSt: {
    marginTop: -24.05,
  },
  bBakerSt1: {
    marginTop: 22.85,
  },
  cassieDonk: {
    marginTop: -46.85,
    color: Color.blackMBody,
    left: "0%",
    fontSize: FontSize.bodyL_size,
  },
  forwardIcon: {
    top: 37,
    left: 283,
  },
  bBakerStMarylParent: {
    width: 303,
    height: 94,
  },
  masterCardEnding: {
    marginTop: -11.6,
    left: "23.62%",
    color: Color.colorGray_100,
  },
  mastercardIcon: {
    height: "44.08%",
    width: "15.22%",
    top: "23.97%",
    right: "79.56%",
    bottom: "31.96%",
    left: "5.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  forwardIcon1: {
    top: 25,
    left: 310,
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 72,
  },
  masterCardEndingParent: {
    width: 343,
    height: 73,
    marginTop: 15,
  },
  groupParent: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 13,
  },
});

export default FrameComponent7;
