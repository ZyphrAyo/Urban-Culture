import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame1 = memo(() => {
  return (
    <View style={styles.frame}>
      <View style={styles.loremIpsumDolorSitAmetParent}>
        <Text style={[styles.loremIpsumDolor, styles.loremFlexBox]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Text style={[styles.loremIpsumDolor1, styles.loremFlexBox]}>
          Lorem ipsum dolor sit amet consectetur. Vel mauris eget nisi sagittis
          porttitor phasellus. Velit gravida nibh mauris sollicitudin.
          Pellentesque sed enim tortor ornare magnis arcu arcu in libero. At sed
          ornare penatibus odio vulputate feugiat sed bibendum id. Et nascetur
          laoreet at risus. Eget ullamcorper sit fusce vestibulum tempus aliquet
          sed tellus morbi. Senectus nullam sem tincidunt integer ipsum.
        </Text>
      </View>
      <View style={[styles.heroImageParent, styles.parentSpaceBlock]}>
        <Image
          style={styles.heroImageIcon}
          resizeMode="cover"
          source={require("../assets/hero-image3.png")}
        />
        <View style={[styles.softStarParent, styles.parentSpaceBlock]}>
          <Image
            style={styles.softIconLayout}
            resizeMode="cover"
            source={require("../assets/soft-star6.png")}
          />
          <Image
            style={[styles.softStarIcon1, styles.softIconLayout]}
            resizeMode="cover"
            source={require("../assets/soft-star7.png")}
          />
          <Image
            style={[styles.softStarIcon1, styles.softIconLayout]}
            resizeMode="cover"
            source={require("../assets/soft-star7.png")}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  loremFlexBox: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    alignSelf: "stretch",
  },
  parentSpaceBlock: {
    marginTop: 13,
    alignItems: "center",
  },
  softIconLayout: {
    height: 10,
    width: 10,
  },
  loremIpsumDolor: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.blackTitleActive,
    height: 37,
  },
  loremIpsumDolor1: {
    fontSize: FontSize.bodyM_size,
    lineHeight: 24,
    color: Color.blackMBody,
    height: 240,
  },
  loremIpsumDolorSitAmetParent: {
    height: 255,
    width: 343,
  },
  heroImageIcon: {
    maxWidth: "100%",
    height: 450,
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  softStarIcon1: {
    marginLeft: 6,
  },
  softStarParent: {
    flexDirection: "row",
  },
  heroImageParent: {
    width: 343,
  },
  frame: {
    height: 741,
    alignItems: "center",
    overflow: "hidden",
    width: 343,
  },
});

export default Frame1;
