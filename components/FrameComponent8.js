import React, { memo } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Cart from "./Cart";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent8 = memo(() => {
  return (
    <View style={styles.checkoutInner}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.checkoutWrapper}>
            <Text style={styles.checkout}>Checkout</Text>
          </View>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star10.png")}
          />
        </View>
        <Cart
          image={require("../assets/image31.png")}
          ellipse68={require("../assets/ellipse-68.png")}
          ellipse69={require("../assets/ellipse-68.png")}
          plus={require("../assets/plus2.png")}
          plus1={require("../assets/plus3.png")}
          cartMarginTop={13}
          cartPosition="relative"
          cartTop="unset"
          cartLeft="unset"
        />
        <Cart
          image={require("../assets/image31.png")}
          ellipse68={require("../assets/ellipse-68.png")}
          ellipse69={require("../assets/ellipse-68.png")}
          plus={require("../assets/plus2.png")}
          plus1={require("../assets/plus3.png")}
          cartMarginTop={13}
          cartPosition="relative"
          cartTop="unset"
          cartLeft="unset"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  checkout: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.blackTitleActive,
    textAlign: "left",
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
    width: 313,
    alignItems: "center",
  },
  checkoutInner: {
    position: "absolute",
    marginTop: -307.5,
    marginLeft: -167.5,
    top: "50%",
    left: "50%",
    width: 335,
    alignItems: "center",
  },
});

export default FrameComponent8;
