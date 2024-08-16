import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Card from "./Card";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const JustForYou = memo(() => {
  return (
    <View style={styles.justForYou}>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.justForYouParent}>
          <Text style={styles.justForYou1}>Just for you</Text>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star3.png")}
          />
        </View>
        <View style={[styles.cardParent, styles.parentFlexBox]}>
          <Card
            image={require("../assets/image10.png")}
            cardWidth={226}
            cardHeight={390}
            cardMarginLeft="unset"
            frameViewHeight="20%"
            frameViewWidth="98.8%"
            frameViewTop="80%"
            frameViewRight="1.2%"
            frameViewPaddingLeft={5}
            frameViewWidth1={218}
            loremWidth={63}
            loremHeight={21}
            loremFontSize={19}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={16}
            textMarginTop={5.5}
            textFontSize={19}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image11.png")}
            cardWidth={226}
            cardHeight={390}
            cardMarginLeft={20}
            frameViewHeight="20%"
            frameViewWidth="98.8%"
            frameViewTop="80%"
            frameViewRight="1.2%"
            frameViewPaddingLeft={5}
            frameViewWidth1={218}
            loremWidth={63}
            loremHeight={21}
            loremFontSize={19}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={16}
            textMarginTop={5.5}
            textFontSize={19}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image12.png")}
            cardWidth={226}
            cardHeight={390}
            cardMarginLeft={20}
            frameViewHeight="20%"
            frameViewWidth="98.8%"
            frameViewTop="80%"
            frameViewRight="1.2%"
            frameViewPaddingLeft={5}
            frameViewWidth1={218}
            loremWidth={63}
            loremHeight={21}
            loremFontSize={19}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={16}
            textMarginTop={5.5}
            textFontSize={19}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image13.png")}
            cardWidth={226}
            cardHeight={390}
            cardMarginLeft={20}
            frameViewHeight="20%"
            frameViewWidth="98.8%"
            frameViewTop="80%"
            frameViewRight="1.2%"
            frameViewPaddingLeft={5}
            frameViewWidth1={218}
            loremWidth={63}
            loremHeight={21}
            loremFontSize={19}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={16}
            textMarginTop={5.5}
            textFontSize={19}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image14.png")}
            cardWidth={226}
            cardHeight={390}
            cardMarginLeft={20}
            frameViewHeight="20%"
            frameViewWidth="98.8%"
            frameViewTop="80%"
            frameViewRight="1.2%"
            frameViewPaddingLeft={5}
            frameViewWidth1={218}
            loremWidth={63}
            loremHeight={21}
            loremFontSize={19}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={16}
            textMarginTop={5.5}
            textFontSize={19}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
        </View>
      </View>
      <View style={[styles.frame, styles.framePosition]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.softIconLayout}
            resizeMode="cover"
            source={require("../assets/soft-star3.png")}
          />
          <Image
            style={[styles.softStarIcon1, styles.softIconLayout]}
            resizeMode="cover"
            source={require("../assets/soft-star4.png")}
          />
          <Image
            style={[styles.softStarIcon1, styles.softIconLayout]}
            resizeMode="cover"
            source={require("../assets/soft-star4.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  framePosition: {
    left: 17,
    position: "absolute",
  },
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  softIconLayout: {
    height: 10,
    width: 10,
  },
  justForYou1: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.grayScaleTitleActive,
    textAlign: "center",
    alignSelf: "stretch",
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 2,
  },
  justForYouParent: {
    width: 340,
    alignItems: "center",
  },
  cardParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 31,
    width: 1209,
  },
  softStarIcon1: {
    marginLeft: 6,
  },
  frame: {
    top: 496,
    width: 190,
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
  },
  justForYou: {
    top: 2543,
    left: 0,
    width: 373,
    height: 531,
    overflow: "hidden",
    position: "absolute",
  },
});

export default JustForYou;
