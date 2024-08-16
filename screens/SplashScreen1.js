import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import FashionShop from "../components/FashionShop";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SplashScreen1 = () => {
  return (
    <View style={styles.splashScreen2}>
      <View style={styles.pageNavigation}>
        <View style={styles.nextWrapper}>
          <Text style={styles.next}>Next</Text>
        </View>
        <View style={styles.circle}>
          <View style={styles.circleChild} />
          <View style={[styles.circleItem, styles.circleLayout]} />
          <View style={[styles.circleInner, styles.circleLayout]} />
        </View>
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={styles.textTypo}>
          <Text style={styles.text1}>1</Text>
          <Text style={styles.text2}>/3</Text>
        </Text>
        <View style={styles.skipWrapper}>
          <Text style={[styles.skip, styles.textTypo]}>Skip</Text>
        </View>
      </View>
      <View style={[styles.selectYourProductsParent, styles.parentLayout]}>
        <Text
          style={[styles.selectYourProducts, styles.exploreOurStylishFlexBox]}
        >
          Select Your Products
        </Text>
        <FashionShop />
        <Text
          style={[styles.exploreOurStylish, styles.exploreOurStylishFlexBox]}
        >
          Explore our stylish e-commerce selection. From fashion-forward apparel
          to modern home decor, find everything you need conveniently online.
          Shop now and redefine urban chic effortlessly.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleLayout: {
    width: 10,
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_81xl,
    height: 10,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    width: 341,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  exploreOurStylishFlexBox: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  next: {
    marginTop: -11.4,
    marginLeft: -22,
    color: Color.colorCadetblue_100,
    textAlign: "center",
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    left: "50%",
    top: "50%",
    width: 44,
    height: 23,
    position: "absolute",
  },
  nextWrapper: {
    left: 164,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorGray_200,
    width: 44,
    top: 0,
    height: 23,
    position: "absolute",
  },
  circleChild: {
    top: 1,
    backgroundColor: Color.inputPurple,
    width: 40,
    height: 8,
    borderRadius: Border.br_81xl,
    left: 0,
    position: "absolute",
  },
  circleItem: {
    left: 50,
  },
  circleInner: {
    left: 70,
  },
  circle: {
    top: 6,
    width: 80,
    height: 10,
    left: 0,
    position: "absolute",
  },
  pageNavigation: {
    top: 765,
    left: 147,
    width: 208,
    height: 23,
    position: "absolute",
  },
  text1: {
    color: Color.blackMBody,
  },
  text2: {
    color: Color.greyPlaceholder,
  },
  skip: {
    color: Color.blackMBody,
    left: 0,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  skipWrapper: {
    width: 29,
    height: 24,
  },
  parent: {
    top: 17,
    left: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 24,
  },
  selectYourProducts: {
    fontSize: FontSize.size_2xl,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.blackMBody,
    alignSelf: "stretch",
    lineHeight: 24,
  },
  exploreOurStylish: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    color: Color.greyPlaceholder,
    fontFamily: FontFamily.bodyS,
    alignSelf: "stretch",
  },
  selectYourProductsParent: {
    marginTop: -198,
    marginLeft: -170.5,
    alignItems: "center",
    left: "50%",
    top: "50%",
    width: 341,
  },
  splashScreen2: {
    backgroundColor: Color.offWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SplashScreen1;
