import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const FrameComponent9 = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.frameGroup}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.voucherIcon}
            resizeMode="cover"
            source={require("../assets/voucher.png")}
          />
          <Text style={[styles.addPromoCode, styles.freeTypo]}>
            Add promo code
          </Text>
        </View>
        <View style={[styles.doorToDoorDeliveryParent, styles.parentFlexBox]}>
          <Image
            style={styles.voucherIcon}
            resizeMode="cover"
            source={require("../assets/door-to-door-delivery.png")}
          />
          <Text style={[styles.addPromoCode, styles.freeTypo]}>Delivery</Text>
          <Text style={[styles.free, styles.freeTypo]}>Free</Text>
        </View>
      </View>
      <View style={styles.estTotalParent}>
        <Text style={[styles.estTotal, styles.textTypo]}>Est Total</Text>
        <Text style={[styles.text, styles.textTypo]}>$240</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  freeTypo: {
    marginLeft: 10,
    color: Color.greyMLabel,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  parentFlexBox: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_11xl,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  textTypo: {
    fontSize: FontSize.bodyL_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
  },
  voucherIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  addPromoCode: {
    textAlign: "left",
    marginLeft: 10,
    color: Color.greyMLabel,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  free: {
    textAlign: "right",
    width: 182,
    marginLeft: 10,
    color: Color.greyMLabel,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  doorToDoorDeliveryParent: {
    marginTop: 16,
  },
  frameGroup: {
    width: 315,
  },
  estTotal: {
    color: Color.grayScaleBody,
  },
  text: {
    color: Color.primary,
  },
  estTotalParent: {
    justifyContent: "space-between",
    marginTop: 110,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameParent: {
    position: "absolute",
    top: 462,
    left: 16,
    width: 343,
    alignItems: "flex-end",
  },
});

export default FrameComponent9;
