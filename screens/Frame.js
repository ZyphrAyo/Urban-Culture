import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import NavBarLt from "../components/NavBarLt";
import Button1 from "../components/Button1";
import FooterPrimary from "../components/FooterPrimary";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtTop={0}
        navBarLtLeft={0}
        navBarLtMarginLeft="unset"
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
      />
      <Text
        style={[styles.pageNotFound, styles.weCantFindFlexBox]}
      >{`PAGE NOT FOUND
`}</Text>
      <Text style={[styles.weCantFind, styles.weCantFindFlexBox]}>
        We can't find the page you looking for, it will return to the
      </Text>
      <Image
        style={styles.tailorsDummyIcon}
        resizeMode="cover"
        source={require("../assets/tailors-dummy.png")}
      />
      <Button1
        iconPlaceholders={require("../assets/backward.png")}
        text="Home page"
        showIcon
        buttonPosition="absolute"
        buttonHeight={44}
        buttonMarginLeft={-97.5}
        buttonBottom="unset"
        buttonLeft="50%"
        buttonWidth={196}
        buttonTop={353}
        buttonMarginTop="unset"
      />
      <FooterPrimary
        twitter={require("../assets/twitter1.png")}
        youTube={require("../assets/youtube.png")}
        softStar={require("../assets/soft-star.png")}
        softStar1={require("../assets/soft-star.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft="unset"
        footerPrimaryBottom="unset"
        footerPrimaryLeft={0}
        footerPrimaryTop={457}
        footerPrimaryMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weCantFindFlexBox: {
    textAlign: "center",
    color: Color.grayScaleTitleActive,
    lineHeight: 24,
    position: "absolute",
  },
  pageNotFound: {
    top: 94,
    left: 64,
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    width: 249,
    height: 33,
  },
  weCantFind: {
    top: 262,
    left: 52,
    fontSize: FontSize.bodyL_size,
    fontFamily: FontFamily.bodyS,
    width: 272,
    height: 70,
  },
  tailorsDummyIcon: {
    top: 189,
    left: 163,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  view: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 786,
    overflow: "hidden",
  },
});

export default Frame;
