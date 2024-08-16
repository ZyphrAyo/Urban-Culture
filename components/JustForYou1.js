import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Card from "./Card";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const JustForYou1 = memo(() => {
  return (
    <View style={styles.justForYou}>
      <View style={styles.frameParent}>
        <View style={styles.youMayAlsoLikeParent}>
          <Text style={styles.youMayAlso}>You May Also Like</Text>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star4.png")}
          />
        </View>
        <View style={[styles.cardParent, styles.parentFlexBox]}>
          <Card
            image={require("../assets/image22.png")}
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
            loremFontSize={14}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={12}
            textMarginTop={5.5}
            textFontSize={14}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image23.png")}
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
            loremFontSize={14}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={12}
            textMarginTop={5.5}
            textFontSize={14}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image24.png")}
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
            loremFontSize={14}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={12}
            textMarginTop={5.5}
            textFontSize={14}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image25.png")}
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
            loremFontSize={14}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={12}
            textMarginTop={5.5}
            textFontSize={14}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
          <Card
            image={require("../assets/image26.png")}
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
            loremFontSize={14}
            loremIpsumColor="#555"
            loremIpsumWidth={215}
            loremIpsumHeight={19}
            loremIpsumFontSize={12}
            textMarginTop={5.5}
            textFontSize={14}
            imageIconHeight="77.21%"
            imageIconBottom="22.79%"
          />
        </View>
      </View>
      <View style={[styles.softStarParent, styles.parentFlexBox]}>
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
  );
});

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  softIconLayout: {
    height: 10,
    width: 10,
  },
  youMayAlso: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.offWhite,
    textAlign: "center",
    alignSelf: "stretch",
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 2,
  },
  youMayAlsoLikeParent: {
    width: 340,
    alignItems: "center",
  },
  cardParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 31,
    left: 17,
    width: 1209,
    position: "absolute",
  },
  softStarIcon1: {
    marginLeft: 6,
  },
  softStarParent: {
    marginLeft: -21.5,
    top: 496,
    left: "50%",
    position: "absolute",
  },
  justForYou: {
    top: 1547,
    left: 6,
    width: 377,
    height: 531,
    overflow: "hidden",
    position: "absolute",
  },
});

export default JustForYou1;
