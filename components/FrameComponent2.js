import React, { memo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FrameComponent2 = memo(() => {
  return (
    <View style={styles.newArrivalParent}>
      <Text style={styles.newArrival}>{`New arrival `}</Text>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star.png")}
      />
      <View style={styles.tab}>
        <View style={styles.allParent}>
          <Text style={[styles.all, styles.allTypo]}>All</Text>
          <Text style={[styles.apparel, styles.allTypo]}>Apparel</Text>
          <Text style={[styles.apparel, styles.allTypo]}>Dress</Text>
          <Text style={[styles.apparel, styles.allTypo]}>Tshirt</Text>
          <Text style={[styles.apparel, styles.allTypo]}>Bag</Text>
        </View>
        <View style={styles.tabChild} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  allTypo: {
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyM_size,
    textAlign: "center",
    lineHeight: 24,
  },
  newArrival: {
    alignSelf: "stretch",
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.grayScaleTitleActive,
    textAlign: "center",
    lineHeight: 24,
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 2,
  },
  all: {
    color: Color.blackMBody,
  },
  apparel: {
    color: Color.greyPlaceholder,
    opacity: 0.8,
    marginLeft: 31,
  },
  allParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabChild: {
    backgroundColor: Color.colorCadetblue_100,
    width: 4,
    height: 4,
    transform: [
      {
        rotate: "45deg",
      },
    ],
    marginLeft: -285,
  },
  tab: {
    width: 375,
    height: 36,
    alignItems: "flex-end",
    paddingHorizontal: 43,
    paddingVertical: 2,
    flexDirection: "row",
    marginTop: 2,
  },
  newArrivalParent: {
    width: 321,
    alignItems: "center",
  },
});

export default FrameComponent2;
