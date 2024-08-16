import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const SplashScreen3 = () => {
  return (
    <View style={styles.splashScreen4}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.prevWrapper}>
          <Text style={[styles.prev, styles.prevTypo]}>Prev</Text>
        </View>
        <View style={styles.circle}>
          <View style={[styles.circleChild, styles.circleLayout]} />
          <View style={[styles.circleItem, styles.circleLayout]} />
          <View style={[styles.circleInner, styles.circleInnerLayout]} />
        </View>
        <View style={styles.nextButton}>
          <View style={[styles.nextButtonChild, styles.circleInnerLayout]} />
          <Text style={[styles.getStarted, styles.getStartedPosition]}>
            Get Started
          </Text>
        </View>
      </View>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.text1}>3</Text>
          <Text style={styles.text2}>/3</Text>
        </Text>
        <View style={styles.skipWrapper}>
          <Text style={[styles.skip, styles.skipClr]}>Skip</Text>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.getStartedPosition]}>
        <View style={styles.getYourOrdersFulfilledParent}>
          <Text
            style={[styles.getYourOrders, styles.skipClr]}
          >{`Get Your Orders Fulfilled `}</Text>
          <Image
            style={styles.shoppingBagIcon}
            resizeMode="cover"
            source={require("../assets/shopping-bag4.png")}
          />
        </View>
        <Text style={[styles.experienceSeamlessFulfillmen, styles.prevTypo]}>
          Experience seamless fulfillment at Urban Culture. Your orders are
          processed quickly and efficiently, ensuring prompt delivery to your
          doorstep.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  circleInnerLayout: {
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  getStartedPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyM_size,
  },
  skipClr: {
    color: Color.blackMBody,
    lineHeight: 24,
  },
  prev: {
    color: Color.primary,
    textAlign: "center",
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
    height: 23,
    left: 0,
    top: 0,
    width: 44,
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
    left: 20,
  },
  circleInner: {
    top: 1,
    left: 40,
    backgroundColor: Color.inputPurple,
    width: 40,
    height: 8,
  },
  circle: {
    width: 80,
    height: 10,
  },
  nextButtonChild: {
    left: 24,
    width: 65,
    height: 27,
    top: 0,
  },
  getStarted: {
    marginTop: -11.5,
    marginLeft: 222.5,
    color: Color.colorCadetblue_100,
    width: 78,
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    height: 23,
  },
  nextButton: {
    width: 89,
    height: 27,
  },
  frameParent: {
    marginLeft: -172.5,
    top: 763,
    width: 345,
    alignItems: "center",
  },
  text1: {
    color: Color.blackTitleActive,
  },
  text2: {
    color: Color.greyPlaceholder,
  },
  text: {
    lineHeight: 24,
  },
  skip: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyM_size,
    left: 0,
    top: 0,
    position: "absolute",
    color: Color.blackMBody,
  },
  skipWrapper: {
    width: 29,
    height: 24,
  },
  parent: {
    marginLeft: -170.5,
    top: 18,
    width: 341,
    height: 24,
  },
  getYourOrders: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    width: 331,
    textAlign: "center",
  },
  shoppingBagIcon: {
    height: 350,
    width: 350,
    overflow: "hidden",
  },
  getYourOrdersFulfilledParent: {
    alignSelf: "stretch",
  },
  experienceSeamlessFulfillmen: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    width: 340,
    color: Color.greyPlaceholder,
    textAlign: "center",
  },
  frameGroup: {
    marginTop: -226,
    marginLeft: -175.5,
    alignItems: "flex-end",
    width: 350,
  },
  splashScreen4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SplashScreen3;
