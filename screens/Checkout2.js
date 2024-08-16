import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Button1 from "../components/Button1";
import NavBarLt from "../components/NavBarLt";
import FrameComponent7 from "../components/FrameComponent7";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Checkout2 = () => {
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
      <View style={[styles.estTotalParent, styles.parentPosition]}>
        <Text style={[styles.estTotal, styles.textFlexBox]}>Est Total</Text>
        <Text style={[styles.text, styles.textFlexBox]}>$240</Text>
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.frameGroup}>
          <View style={styles.checkoutWrapper}>
            <Text style={[styles.checkout1, styles.textFlexBox]}>Checkout</Text>
          </View>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star9.png")}
          />
        </View>
        <FrameComponent7 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 343,
    left: 16,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    lineHeight: 24,
  },
  estTotal: {
    left: 0,
    color: Color.grayScaleBody,
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyL_size,
    top: 0,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  text: {
    left: 305,
    color: Color.primary,
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyL_size,
    top: 0,
    textAlign: "left",
    lineHeight: 24,
    position: "absolute",
  },
  estTotalParent: {
    top: 692,
    height: 24,
  },
  checkout1: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.blackTitleActive,
    textAlign: "left",
    lineHeight: 24,
  },
  checkoutWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 125,
    height: 18,
  },
  frameGroup: {
    width: 126,
  },
  frameParent: {
    top: 111,
    alignItems: "center",
  },
  checkout: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 797,
    overflow: "hidden",
  },
});

export default Checkout2;
