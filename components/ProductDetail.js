import React, { memo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Card from "./Card";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ProductDetail = memo(() => {
  return (
    <View style={[styles.productDetail, styles.tagIconPosition]}>
      <View style={[styles.productDetailChild, styles.productLayout]} />
      <View style={[styles.productDetailItem, styles.productLayout]} />
      <View style={styles.codPolicyParent}>
        <Text style={[styles.codPolicy, styles.policyTypo]}>COD Policy</Text>
        <Image
          style={[styles.tagIcon, styles.tagIconPosition]}
          resizeMode="cover"
          source={require("../assets/tag.png")}
        />
        <Image
          style={[styles.forwardIcon, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward4.png")}
        />
      </View>
      <View style={[styles.returnPolicyParent, styles.weWorkWithPosition]}>
        <Text style={[styles.returnPolicy, styles.policyTypo]}>
          Return Policy
        </Text>
        <Image
          style={[styles.tagIcon, styles.tagIconPosition]}
          resizeMode="cover"
          source={require("../assets/refresh.png")}
        />
        <Image
          style={[styles.forwardIcon1, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward4.png")}
        />
      </View>
      <Text
        style={[styles.weWorkWith, styles.weWorkWithPosition]}
      >{`We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. `}</Text>
      <Text style={[styles.toKeepYour, styles.weWorkWithPosition]}>
        To keep your jackets and coats clean, you only need to freshen them up
        and go over them with a cloth or a clothes brush. If you need to dry
        clean a garment, look for a dry cleaner that uses technologies that are
        respectful of the environment.
      </Text>
      <Text style={[styles.materials, styles.careClr]}>MATERIALS</Text>
      <Text style={[styles.care, styles.careClr]}>CARE</Text>
      <Text style={[styles.info, styles.careClr]}>Info</Text>
      <View style={[styles.doNotUseBleachParent, styles.notParentPosition]}>
        <Text style={[styles.doNotUse, styles.policyTypo]}>
          Do not use bleach
        </Text>
        <Image
          style={[styles.doNotBleach, styles.doNotBleachLayout]}
          resizeMode="cover"
          source={require("../assets/do-not-bleach.png")}
        />
      </View>
      <View style={[styles.doNotTumbleDryParent, styles.notParentPosition]}>
        <Text style={[styles.doNotUse, styles.policyTypo]}>
          Do not tumble dry
        </Text>
        <Image
          style={[styles.doNotBleach, styles.doNotBleachLayout]}
          resizeMode="cover"
          source={require("../assets/do-not-tumble-dry.png")}
        />
      </View>
      <View
        style={[
          styles.dryCleanWithTetrachloroethyParent,
          styles.notParentPosition,
        ]}
      >
        <Text style={[styles.doNotUse, styles.policyTypo]}>
          Dry clean with tetrachloroethylene
        </Text>
        <Image
          style={[styles.doNotBleach, styles.doNotBleachLayout]}
          resizeMode="cover"
          source={require("../assets/do-not-wash.png")}
        />
      </View>
      <View
        style={[styles.ironAtAMaximumOf110c230Parent, styles.notParentPosition]}
      >
        <Text style={[styles.doNotUse, styles.policyTypo]}>
          Iron at a maximum of 110ºC/230ºF
        </Text>
        <Image
          style={[styles.doNotBleach, styles.doNotBleachLayout]}
          resizeMode="cover"
          source={require("../assets/iron-low-temperature.png")}
        />
      </View>
      <View style={styles.freeFlatRateShippingParent}>
        <Text style={[styles.freeFlatRate, styles.freeFlatRatePosition]}>
          Free Flat Rate Shipping
        </Text>
        <Text
          style={[styles.estimatedToBe, styles.freeFlatRatePosition]}
        >{`Estimated to be delivered on 
09/11/2021 - 12/11/2021.
`}</Text>
        <Image
          style={[styles.forwardIcon2, styles.forwardIconLayout]}
          resizeMode="cover"
          source={require("../assets/forward5.png")}
        />
        <Image
          style={[styles.shippingIcon, styles.doNotBleachLayout]}
          resizeMode="cover"
          source={require("../assets/shipping.png")}
        />
      </View>
      <View style={styles.newArival}>
        <View style={styles.youMayAlsoLikeParent}>
          <Text style={[styles.youMayAlso, styles.careClr]}>
            You May also like
          </Text>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star11.png")}
          />
        </View>
        <View style={styles.showcase}>
          <View style={styles.images}>
            <View style={styles.cardFlexBox}>
              <Card
                image={require("../assets/image33.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft="unset"
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
              <Card
                image={require("../assets/image3.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft={19.6}
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
            </View>
            <View style={[styles.cardGroup, styles.cardFlexBox]}>
              <Card
                image={require("../assets/image4.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft="unset"
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
              <Card
                image={require("../assets/image28.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft={19.6}
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  tagIconPosition: {
    left: 0,
    position: "absolute",
  },
  productLayout: {
    opacity: 0.2,
    height: 1,
    width: 307,
    borderTopWidth: 1,
    borderColor: Color.grayScaleLabel,
    borderStyle: "solid",
    left: 52,
    position: "absolute",
  },
  policyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  forwardIconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  weWorkWithPosition: {
    width: 339,
    left: 20,
    position: "absolute",
  },
  careClr: {
    color: Color.grayScaleTitleActive,
    textTransform: "uppercase",
  },
  notParentPosition: {
    height: 25,
    left: 16,
    position: "absolute",
  },
  doNotBleachLayout: {
    overflow: "hidden",
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
  },
  freeFlatRatePosition: {
    left: 35,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    position: "absolute",
  },
  cardFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  productDetailChild: {
    top: 631,
  },
  productDetailItem: {
    top: 669,
  },
  codPolicy: {
    left: 34,
    color: Color.blackMBody,
    top: 0,
    position: "absolute",
  },
  tagIcon: {
    top: 2,
    width: 20,
    height: 20,
  },
  forwardIcon: {
    left: 316,
    top: 0,
  },
  codPolicyParent: {
    top: 638,
    left: 19,
    width: 340,
    height: 24,
    position: "absolute",
  },
  returnPolicy: {
    left: 33,
    color: Color.blackMBody,
    top: 0,
    position: "absolute",
  },
  forwardIcon1: {
    left: 315,
    top: 0,
  },
  returnPolicyParent: {
    top: 680,
    height: 24,
  },
  weWorkWith: {
    top: 39,
    height: 85,
    color: Color.grayScaleLabel,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  toKeepYour: {
    top: 166,
    height: 147,
    color: Color.grayScaleLabel,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
  },
  materials: {
    top: 13,
    lineHeight: 20,
    letterSpacing: 2,
    fontSize: FontSize.bodyL_size,
    textTransform: "uppercase",
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    position: "absolute",
  },
  care: {
    top: 140,
    lineHeight: 20,
    letterSpacing: 2,
    fontSize: FontSize.bodyL_size,
    textTransform: "uppercase",
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    position: "absolute",
  },
  info: {
    top: 514,
    lineHeight: 20,
    letterSpacing: 2,
    fontSize: FontSize.bodyL_size,
    textTransform: "uppercase",
    left: 20,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    position: "absolute",
  },
  doNotUse: {
    left: 53,
    color: Color.grayScaleLabel,
    top: 0,
    position: "absolute",
  },
  doNotBleach: {
    top: 1,
  },
  doNotUseBleachParent: {
    top: 327,
    width: 153,
  },
  doNotTumbleDryParent: {
    top: 367,
    width: 156,
  },
  dryCleanWithTetrachloroethyParent: {
    top: 407,
    width: 264,
  },
  ironAtAMaximumOf110c230Parent: {
    top: 447,
    width: 262,
  },
  freeFlatRate: {
    color: Color.blackMBody,
    top: 0,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    left: 35,
  },
  estimatedToBe: {
    top: 26,
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    width: 260,
    height: 48,
    color: Color.grayScaleLabel,
  },
  forwardIcon2: {
    left: 317,
    top: 1,
  },
  shippingIcon: {
    top: 0,
  },
  freeFlatRateShippingParent: {
    top: 555,
    left: 18,
    width: 341,
    height: 74,
    position: "absolute",
  },
  youMayAlso: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    textAlign: "center",
    alignSelf: "stretch",
    lineHeight: 24,
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 2,
  },
  youMayAlsoLikeParent: {
    width: 321,
    alignItems: "center",
  },
  cardGroup: {
    marginTop: 10,
  },
  images: {
    alignSelf: "stretch",
  },
  showcase: {
    marginTop: 20,
    alignSelf: "stretch",
    alignItems: "center",
  },
  newArival: {
    top: 773,
    width: 343,
    alignItems: "center",
    left: 16,
    position: "absolute",
  },
  productDetail: {
    top: 784,
    width: 375,
    height: 740,
  },
});

export default ProductDetail;
