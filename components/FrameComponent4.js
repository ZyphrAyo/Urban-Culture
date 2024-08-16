import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Tag from "./Tag";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent4 = memo(() => {
  return (
    <View style={styles.tagsFlexBox}>
      <Text style={styles.blogs}>Blogs</Text>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star5.png")}
      />
      <View style={[styles.tags, styles.tagsFlexBox]}>
        <Tag prop="Fashion" tagPosition="unset" tagMarginLeft="unset" />
        <Tag prop="Promo" tagPosition="unset" tagMarginLeft={8} />
        <Tag prop="Policy" tagPosition="unset" tagMarginLeft={8} />
        <Tag prop="Yearbook" tagPosition="unset" tagMarginLeft={8} />
        <Tag prop="Sale" tagPosition="unset" tagMarginLeft={8} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  tagsFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  blogs: {
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
    marginTop: 12,
  },
  tags: {
    flexDirection: "row",
    marginTop: 12,
  },
});

export default FrameComponent4;
