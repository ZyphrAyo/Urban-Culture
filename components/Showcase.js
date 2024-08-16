import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";
import Button3 from "./Button3";

const Showcase = memo(() => {
  return (
    <View style={styles.showcase}>
      <View style={styles.images}>
        <View style={styles.cardFlexBox}>
          <Card
            image={require("../assets/image2.png")}
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
            image={require("../assets/image5.png")}
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
      <Button3
        text="Explore More"
        iconPlaceholders={require("../assets/forward-arrow.png")}
        showIcon
        buttonPosition="unset"
        buttonBorderStyle="solid"
        buttonBorderColor="#89608e"
        buttonBorderWidth={0.7}
        buttonMarginLeft="unset"
        buttonBottom="unset"
        buttonLeft="unset"
        buttonBackgroundColor="unset"
        buttonWidth={172}
        buttonHeight={26}
        buttonMarginTop={20}
        buttonPaddingHorizontal="unset"
        buttonPaddingVertical="unset"
        buttonColor="#4f4f4f"
        buttonFontSize={12}
        iconPlaceholdersWidth={13}
        iconPlaceholdersHeight={13}
        iconPlaceholdersMarginLeft={7.2}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  cardFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  cardGroup: {
    marginTop: 10,
  },
  images: {
    alignSelf: "stretch",
  },
  showcase: {
    marginTop: 20,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default Showcase;
