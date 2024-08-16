import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FooterPrimary = memo(
  ({
    twitter,
    youTube,
    softStar,
    softStar1,
    footerPrimaryPosition,
    footerPrimaryMarginLeft,
    footerPrimaryBottom,
    footerPrimaryLeft,
    footerPrimaryTop,
    footerPrimaryMarginTop,
  }) => {
    const footerPrimaryStyle = useMemo(() => {
      return {
        ...getStyleValue("position", footerPrimaryPosition),
        ...getStyleValue("marginLeft", footerPrimaryMarginLeft),
        ...getStyleValue("bottom", footerPrimaryBottom),
        ...getStyleValue("left", footerPrimaryLeft),
        ...getStyleValue("top", footerPrimaryTop),
        ...getStyleValue("marginTop", footerPrimaryMarginTop),
      };
    }, [
      footerPrimaryPosition,
      footerPrimaryMarginLeft,
      footerPrimaryBottom,
      footerPrimaryLeft,
      footerPrimaryTop,
      footerPrimaryMarginTop,
    ]);

    return (
      <View style={[styles.footerPrimary, footerPrimaryStyle]}>
        <View style={styles.footerPrimaryChild} />
        <View style={styles.contentFooter}>
          <View style={styles.socials}>
            <View style={styles.socialsGrp}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={twitter}
              />
              <Image
                style={[styles.instagramIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/instagram.png")}
              />
              <Image
                style={[styles.instagramIcon, styles.iconLayout]}
                resizeMode="cover"
                source={youTube}
              />
            </View>
          </View>
          <View style={styles.detailsFooter}>
            <Image
              style={styles.softIconLayout}
              resizeMode="cover"
              source={softStar}
            />
            <Text
              style={styles.levio10002gmailcom12345678}
            >{`levio10002@gmail.com
+123456789
06:00 - 20:00 - Morning
`}</Text>
            <Image
              style={[styles.softStarIcon1, styles.softIconLayout]}
              resizeMode="cover"
              source={softStar1}
            />
          </View>
          <View style={styles.navigation}>
            <Text style={styles.aboutTypo}>About</Text>
            <Text style={[styles.contact, styles.aboutTypo]}>Contact</Text>
            <Text style={[styles.contact, styles.aboutTypo]}>Blog</Text>
          </View>
          <Text style={styles.copyrightZyphrUix}>
            Copyright© Zyphr UIX All Rights Reserved.
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: 24,
    height: 24,
  },
  softIconLayout: {
    height: 18,
    width: 125,
  },
  aboutTypo: {
    color: Color.greyMLabel,
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: 2,
    fontFamily: FontFamily.bodyS,
    textAlign: "center",
    fontSize: FontSize.bodyL_size,
  },
  footerPrimaryChild: {
    backgroundColor: Color.colorCadetblue_100,
    left: 0,
    top: 0,
    position: "absolute",
    height: 333,
    width: 375,
  },
  instagramIcon: {
    marginLeft: 45,
  },
  socialsGrp: {
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  socials: {
    width: 162,
    height: 24,
  },
  levio10002gmailcom12345678: {
    lineHeight: 29,
    fontFamily: FontFamily.price,
    color: Color.grayScaleBody,
    height: 86,
    marginTop: 16,
    textAlign: "center",
    fontSize: FontSize.bodyL_size,
    alignSelf: "stretch",
  },
  softStarIcon1: {
    marginTop: 16,
  },
  detailsFooter: {
    width: 183,
    marginTop: 10,
    alignItems: "center",
  },
  contact: {
    marginLeft: 38,
  },
  navigation: {
    alignSelf: "stretch",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  copyrightZyphrUix: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    color: Color.grayScaleLabel,
    fontFamily: FontFamily.bodyS,
    textAlign: "center",
    alignSelf: "stretch",
    marginTop: 10,
  },
  contentFooter: {
    marginTop: -123.5,
    marginLeft: -127.5,
    top: "50%",
    left: "50%",
    width: 256,
    alignItems: "center",
    position: "absolute",
  },
  footerPrimary: {
    height: 333,
    width: 375,
  },
});

export default FooterPrimary;
