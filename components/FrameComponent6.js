import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent6 = memo(() => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.shippingMethodParent}>
        <Text style={[styles.shippingMethod, styles.shippingMethodPosition]}>
          Shipping Method
        </Text>
        <View
          style={[styles.bBakerStMarylParent, styles.shippingMethodPosition]}
        >
          <Text style={[styles.bBakerSt, styles.bakerTypo]}>
            Pickup at store
          </Text>
          <View style={styles.bBakerStMarylGroup}>
            <Text style={[styles.bBakerSt1, styles.bakerTypo]}>Free</Text>
            <Image
              style={[styles.downIcon, styles.downIconLayout]}
              resizeMode="cover"
              source={require("../assets/down1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.paymentMethodParent}>
        <Text style={[styles.shippingMethod, styles.shippingMethodPosition]}>
          Payment method
        </Text>
        <View
          style={[styles.bBakerStMarylParent, styles.shippingMethodPosition]}
        >
          <Text style={[styles.bBakerSt, styles.bakerTypo]}>
            Select payment method
          </Text>
          <Image
            style={[styles.downIcon1, styles.downIconLayout]}
            resizeMode="cover"
            source={require("../assets/down2.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  shippingMethodPosition: {
    left: 0,
    position: "absolute",
  },
  bakerTypo: {
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyL_size,
  },
  downIconLayout: {
    height: 20,
    width: 20,
  },
  shippingMethod: {
    fontSize: FontSize.bodyM_size,
    letterSpacing: 1,
    lineHeight: 16,
    textTransform: "uppercase",
    fontFamily: FontFamily.price,
    color: Color.greyMLabel,
    textAlign: "left",
    top: 0,
  },
  bBakerSt: {
    color: Color.greyPlaceholder,
    textAlign: "left",
  },
  bBakerSt1: {
    marginTop: -12,
    width: "73.09%",
    top: "50%",
    left: "0%",
    color: Color.grayScaleLabel,
    textAlign: "center",
    position: "absolute",
  },
  downIcon: {
    left: 74,
    top: 0,
    position: "absolute",
  },
  bBakerStMarylGroup: {
    width: 94,
    height: 24,
    marginLeft: 93,
  },
  bBakerStMarylParent: {
    top: 28,
    borderRadius: Border.br_25xl,
    backgroundColor: Color.offWhite,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
    alignItems: "center",
  },
  shippingMethodParent: {
    width: 338,
    height: 78,
  },
  downIcon1: {
    marginLeft: 103,
  },
  paymentMethodParent: {
    width: 340,
    height: 78,
    marginTop: 34,
  },
  groupParent: {
    alignSelf: "stretch",
    marginTop: 34,
    alignItems: "center",
  },
});

export default FrameComponent6;
