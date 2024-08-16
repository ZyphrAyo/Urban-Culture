import * as React from "react";
import { StyleSheet, View } from "react-native";
import Button1 from "../components/Button1";
import NavBarLt from "../components/NavBarLt";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import { Color } from "../GlobalStyles";

const Checkout = () => {
  return (
    <View style={styles.checkout}>
      <Button1
        iconPlaceholders={require("../assets/shopping-bag2.png")}
        text="Checkout"
        showIcon
        buttonPosition="absolute"
        buttonHeight={62}
        buttonMarginLeft="unset"
        buttonBottom={0}
        buttonLeft={0}
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
      <FrameComponent8 />
      <FrameComponent9 />
      <View style={styles.lineParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    opacity: 0.1,
    height: 1,
    width: 344,
    borderTopWidth: 1,
    borderColor: Color.grayScaleTitleActive,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 57,
  },
  groupItem: {
    top: 117,
  },
  groupInner: {
    top: 0,
  },
  lineParent: {
    top: 457,
    left: 16,
    width: 343,
    height: 118,
    position: "absolute",
  },
  checkout: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 797,
    overflow: "hidden",
  },
});

export default Checkout;
