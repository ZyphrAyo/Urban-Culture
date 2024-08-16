import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Tag1 from "./Tag1";
import FooterPrimary from "./FooterPrimary";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Frame2 = memo(() => {
  return (
    <View style={styles.frame}>
      <View style={styles.loremIpsumDolorSitAmetConParent}>
        <Text style={[styles.loremIpsumDolor, styles.daysAgoTypo]}>
          Lorem ipsum dolor sit amet consectetur. Vel mauris eget nisi sagittis
          porttitor phasellus. Velit gravida nibh mauris sollicitudin.
          Pellentesque sed enim tortor ornare magnis arcu arcu in libero. At sed
          ornare penatibus odio vulputate feugiat sed bibendum id. Et nascetur
          laoreet at risus. Eget ullamcorper sit fusce vestibulum tempus aliquet
          sed tellus morbi. Senectus nullam sem tincidunt integer ipsum.
        </Text>
        <View style={styles.postedByUrbanCulture6DaParent}>
          <Text style={[styles.postedByUrban, styles.daysAgoTypo]}>
            Posted By Urban Culture | 6 Days Ago
          </Text>
          <View style={[styles.tags, styles.tagsFlexBox]}>
            <View style={styles.tagsFlexBox}>
              <Tag1
                men="#Fashion"
                close1={require("../assets/close1.png")}
                showCloseIcon={false}
                tagPosition="unset"
                tagWidth={69}
                tagHeight={26}
                tagMarginLeft="unset"
              />
              <Tag1
                men="#Tips"
                close1={require("../assets/close.png")}
                showCloseIcon={false}
                tagPosition="unset"
                tagWidth={69}
                tagHeight={26}
                tagMarginLeft={6}
              />
            </View>
            <Text style={[styles.daysAgo, styles.daysAgoTypo]}>4 days ago</Text>
          </View>
        </View>
      </View>
      <FooterPrimary
        twitter={require("../assets/twitter.png")}
        youTube={require("../assets/youtube2.png")}
        softStar={require("../assets/soft-star2.png")}
        softStar1={require("../assets/soft-star2.png")}
        footerPrimaryPosition="relative"
        footerPrimaryMarginLeft="unset"
        footerPrimaryBottom="unset"
        footerPrimaryLeft="unset"
        footerPrimaryTop="unset"
        footerPrimaryMarginTop={19}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  daysAgoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
  },
  tagsFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  loremIpsumDolor: {
    color: Color.blackMBody,
    height: 223,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
    alignSelf: "stretch",
  },
  postedByUrban: {
    color: Color.greyPlaceholder,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
    alignSelf: "stretch",
  },
  daysAgo: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    color: Color.grayScalePlacehoder,
  },
  tags: {
    justifyContent: "space-between",
    marginTop: 6,
    alignSelf: "stretch",
  },
  postedByUrbanCulture6DaParent: {
    marginTop: 5,
    alignSelf: "stretch",
  },
  loremIpsumDolorSitAmetConParent: {
    width: 343,
  },
  frame: {
    width: 375,
    height: 634,
    overflow: "hidden",
    justifyContent: "flex-end",
    marginTop: 13,
    alignItems: "center",
  },
});

export default Frame2;
