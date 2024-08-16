import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Button1 from "../components/Button1";
import NavBarLt from "../components/NavBarLt";
import GroupComponent from "../components/GroupComponent";
import FrameComponent6 from "../components/FrameComponent6";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Checkout1 = () => {
  return (
    <View style={styles.checkout}>
      <Button1
        iconPlaceholders={require("../assets/shopping-bag2.png")}
        text="Checkout"
        showIcon
        buttonPosition="absolute"
        buttonHeight={62}
        buttonMarginLeft={-187.5}
        buttonBottom={0}
        buttonLeft="50%"
        buttonWidth={375}
        buttonTop="unset"
        buttonMarginTop="unset"
      />
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtTop={0}
        navBarLtLeft={0}
        navBarLtMarginLeft="unset"
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
      />
      <View style={[styles.totalParent, styles.parentFlexBox]}>
        <Text style={[styles.total, styles.textText]}>Total</Text>
        <Text style={[styles.text, styles.textText]}>$240</Text>
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.frameGroup}>
          <View style={[styles.checkoutWrapper, styles.groupParentFlexBox]}>
            <Text style={[styles.checkout1, styles.textText]}>Checkout</Text>
          </View>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star8.png")}
          />
        </View>
        <View style={[styles.groupParent, styles.groupParentFlexBox]}>
          <GroupComponent />
          <FrameComponent6 />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  textText: {
    textAlign: "left",
    textTransform: "uppercase",
  },
  groupParentFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  total: {
    color: Color.blackMBody,
    width: 125,
    fontFamily: FontFamily.bodyS,
    lineHeight: 20,
    letterSpacing: 2,
    fontSize: FontSize.bodyL_size,
    textAlign: "left",
    textTransform: "uppercase",
  },
  text: {
    color: Color.primary,
    width: 55,
    fontFamily: FontFamily.bodyS,
    lineHeight: 20,
    letterSpacing: 2,
    fontSize: FontSize.bodyL_size,
    textAlign: "left",
    textTransform: "uppercase",
  },
  totalParent: {
    top: 672,
    left: 0,
    width: 375,
    justifyContent: "space-between",
    paddingHorizontal: 23,
    paddingVertical: 0,
    flexDirection: "row",
  },
  checkout1: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    lineHeight: 24,
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.blackTitleActive,
    textAlign: "left",
    textTransform: "uppercase",
  },
  checkoutWrapper: {
    flexDirection: "row",
  },
  starIcon: {
    height: 18,
    width: 125,
  },
  frameGroup: {
    width: 126,
  },
  groupParent: {
    marginTop: 23,
  },
  frameParent: {
    top: 78,
    left: 19,
    width: 340,
  },
  checkout: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 797,
    overflow: "hidden",
  },
});

export default Checkout1;
