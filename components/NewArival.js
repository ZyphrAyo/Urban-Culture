import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import Card from "./Card";

const NewArival = memo(() => {
  return (
    <View style={styles.newArival}>
      <View style={styles.showcase}>
        <View style={styles.images}>
          <View style={styles.cardFlexBox}>
            <Card
              image={require("../assets/image16.png")}
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
              loremIpsumColor="#f9f9f9"
              loremIpsumWidth={154}
              loremIpsumHeight={14}
              loremIpsumFontSize={12}
              textMarginTop={3.9}
              textFontSize={14}
              imageIconHeight="77.19%"
              imageIconBottom="22.81%"
            />
            <Card
              image={require("../assets/image17.png")}
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
              loremIpsumColor="#f9f9f9"
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
              image={require("../assets/image18.png")}
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
              loremIpsumColor="#f9f9f9"
              loremIpsumWidth={154}
              loremIpsumHeight={14}
              loremIpsumFontSize={12}
              textMarginTop={3.9}
              textFontSize={14}
              imageIconHeight="77.19%"
              imageIconBottom="22.81%"
            />
            <Card
              image={require("../assets/image19.png")}
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
              loremIpsumColor="#f9f9f9"
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
              image={require("../assets/image20.png")}
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
              loremIpsumColor="#f9f9f9"
              loremIpsumWidth={154}
              loremIpsumHeight={14}
              loremIpsumFontSize={12}
              textMarginTop={3.9}
              textFontSize={14}
              imageIconHeight="77.19%"
              imageIconBottom="22.81%"
            />
            <Card
              image={require("../assets/image21.png")}
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
              loremIpsumColor="#f9f9f9"
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
  );
});

const styles = StyleSheet.create({
  cardFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  cardGroup: {
    marginTop: 10,
  },
  images: {
    alignSelf: "stretch",
  },
  showcase: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  newArival: {
    width: 343,
    alignItems: "center",
  },
});

export default NewArival;
