import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SplashScreen2 = () => {
  return (
    <View style={[styles.splashScreen3, styles.splashScreen3Layout]}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.prevWrapper}>
          <Text style={[styles.prev, styles.prevTypo]}>Prev</Text>
        </View>
        <View style={styles.circle}>
          <View style={[styles.circleChild, styles.circleLayout]} />
          <View style={[styles.circleItem, styles.circleItemLayout]} />
          <View style={[styles.circleInner, styles.circleLayout]} />
        </View>
        <View style={styles.nextLayout}>
          <View style={[styles.nextButtonChild, styles.nextLayout]} />
          <Text style={[styles.next, styles.nextPosition]}>Next</Text>
        </View>
      </View>
      <View style={[styles.splashScreen3Inner, styles.nextPosition]}>
        <View style={styles.makeEasyPaymentsParent}>
          <Text style={styles.makeEasyPayments}>Make Easy Payments</Text>
          <Image
            style={[styles.salesConsultingIcon, styles.splashScreen3Layout]}
            resizeMode="cover"
            source={require("../assets/sales-consulting.png")}
          />
          <Text style={[styles.shopHassleFreeWith, styles.prevTypo]}>
            Shop hassle-free with secure payment options at Urban Treasure.
            Whether by credit card, PayPal, or more, your purchase is simple and
            safe.
          </Text>
        </View>
      </View>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={styles.textTypo}>
          <Text style={styles.text1}>2</Text>
          <Text style={styles.text2}>/3</Text>
        </Text>
        <View style={styles.skipWrapper}>
          <Text style={[styles.skip, styles.textTypo]}>Skip</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashScreen3Layout: {
    overflow: "hidden",
    width: "100%",
  },
  parentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  prevTypo: {
    fontFamily: FontFamily.bodyS,
    textAlign: "center",
  },
  circleLayout: {
    width: 10,
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_81xl,
    height: 10,
    top: 0,
    position: "absolute",
  },
  circleItemLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  nextLayout: {
    height: 27,
    width: 65,
  },
  nextPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  prev: {
    color: Color.primary,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
    height: 23,
    width: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  prevWrapper: {
    height: 23,
    width: 44,
  },
  circleChild: {
    left: 0,
  },
  circleItem: {
    top: 1,
    left: 20,
    backgroundColor: Color.inputPurple,
    width: 40,
    height: 8,
  },
  circleInner: {
    left: 70,
  },
  circle: {
    width: 80,
    height: 10,
  },
  nextButtonChild: {
    borderRadius: Border.br_81xl,
    position: "absolute",
    left: 0,
    top: 0,
  },
  next: {
    marginTop: -11.5,
    marginLeft: -22.5,
    color: Color.colorCadetblue_100,
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    height: 23,
    width: 44,
  },
  frameParent: {
    marginLeft: -166.5,
    bottom: 22,
    width: 345,
    alignItems: "center",
  },
  makeEasyPayments: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.blackMBody,
    textAlign: "center",
    lineHeight: 24,
  },
  salesConsultingIcon: {
    maxWidth: "100%",
    height: 233,
    marginTop: 34,
    alignSelf: "stretch",
  },
  shopHassleFreeWith: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    width: 340,
    color: Color.greyPlaceholder,
    marginTop: 34,
    textAlign: "center",
  },
  makeEasyPaymentsParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  splashScreen3Inner: {
    marginTop: -190,
    marginLeft: -175.5,
    width: 350,
    alignItems: "center",
  },
  text1: {
    color: Color.blackTitleActive,
  },
  text2: {
    color: Color.greyPlaceholder,
  },
  skip: {
    color: Color.blackMBody,
    left: 0,
    top: 0,
    position: "absolute",
  },
  skipWrapper: {
    width: 29,
    height: 24,
  },
  parent: {
    marginLeft: -170.5,
    top: 17,
    width: 341,
    height: 24,
  },
  splashScreen3: {
    backgroundColor: Color.offWhite,
    flex: 1,
    height: 812,
  },
});

export default SplashScreen2;
