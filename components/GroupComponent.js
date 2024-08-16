import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const GroupComponent = memo(() => {
  return (
    <View style={styles.shippingAdressParent}>
      <Text style={styles.shippingAdress}>Shipping adress</Text>
      <View style={styles.bBakerStMarylParent}>
        <Text
          style={[styles.bBakerSt, styles.bakerTypo]}
        >{`123 Park St, Kolkata 712145 
Avenue Metro Rd `}</Text>
        <Text style={[styles.bBakerSt1, styles.bakerTypo]}>12345678910</Text>
        <Text style={styles.cassieDonk}>Zyphr Uix</Text>
        <Image
          style={[styles.forwardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/forward1.png")}
        />
      </View>
      <View style={[styles.bBakerStMarylGroup, styles.plusIconPosition]}>
        <Text style={[styles.bBakerSt2, styles.bakerTypo]}>
          Add shipping adress
        </Text>
        <View style={[styles.bBakerStMarylContainer, styles.iconLayout]}>
          <Text style={[styles.bBakerSt3, styles.bakerPosition]}>Free</Text>
          <Image
            style={[styles.plusIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/plus4.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  bakerTypo: {
    color: Color.greyPlaceholder,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  plusIconPosition: {
    left: 0,
    position: "absolute",
  },
  bakerPosition: {
    fontSize: FontSize.bodyM_size,
    top: "50%",
    position: "absolute",
  },
  shippingAdress: {
    letterSpacing: 2,
    lineHeight: 20,
    color: Color.greyMLabel,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    textTransform: "uppercase",
    fontSize: FontSize.bodyL_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bBakerSt: {
    marginTop: -23.95,
    fontSize: FontSize.bodyM_size,
    top: "50%",
    position: "absolute",
    left: "0%",
    color: Color.greyPlaceholder,
  },
  bBakerSt1: {
    marginTop: 22.85,
    fontSize: FontSize.bodyM_size,
    top: "50%",
    position: "absolute",
    left: "0%",
    color: Color.greyPlaceholder,
  },
  cassieDonk: {
    marginTop: -46.85,
    color: Color.blackMBody,
    lineHeight: 24,
    left: "0%",
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyL_size,
    position: "absolute",
  },
  forwardIcon: {
    top: 37,
    left: 283,
    position: "absolute",
    width: 20,
  },
  bBakerStMarylParent: {
    marginTop: -62.95,
    width: "90.63%",
    right: "3.89%",
    left: "5.48%",
    height: 94,
    top: "50%",
    position: "absolute",
  },
  bBakerSt2: {
    color: Color.greyPlaceholder,
    fontSize: FontSize.bodyL_size,
  },
  bBakerSt3: {
    marginTop: -10,
    width: "343.5%",
    left: "-370%",
    lineHeight: 22,
    fontFamily: FontFamily.price,
    color: Color.grayScaleLabel,
    textAlign: "center",
    display: "none",
    fontSize: FontSize.bodyM_size,
    textTransform: "uppercase",
  },
  plusIcon: {
    left: 0,
    position: "absolute",
    top: 0,
    width: 20,
  },
  bBakerStMarylContainer: {
    marginLeft: 125,
  },
  bBakerStMarylGroup: {
    top: 132,
    borderRadius: Border.br_25xl,
    backgroundColor: Color.offWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_smi,
  },
  shippingAdressParent: {
    width: 334,
    height: 182,
  },
});

export default GroupComponent;
