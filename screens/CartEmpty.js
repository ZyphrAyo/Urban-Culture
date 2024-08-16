import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button1 from "../components/Button1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const CartEmpty = () => {
  return (
    <View style={styles.cartEmpty}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.cartWrapper}>
          <Text style={styles.cart}>Cart</Text>
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Image
            style={styles.frameIcon1}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          />
          <Text style={styles.youHaveNo}>
            You have no items in your Shopping Cart.
          </Text>
        </View>
        <Button1
          iconPlaceholders={require("../assets/shopping-bag3.png")}
          text="Continue Shopping"
          showIcon
          buttonPosition="unset"
          buttonHeight={62}
          buttonMarginLeft="unset"
          buttonBottom="unset"
          buttonLeft="unset"
          buttonWidth={375}
          buttonTop="unset"
          buttonMarginTop={256}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 343,
    height: 24,
    overflow: "hidden",
  },
  cart: {
    position: "relative",
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.blackTitleActive,
    textAlign: "left",
  },
  cartWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 20,
    alignSelf: "start",
    marginLeft: 17,
    marginTop: 31,
  },
  frame: {
    width: 343,
    height: 75,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameIcon1: {
    position: "relative",
    width: 335,
    height: 12,
    overflow: "hidden",
  },
  youHaveNo: {
    position: "relative",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.grayScaleLabel,
    textAlign: "left",
    marginTop: 199,
  },
  frame2: {
    width: 335,
    height: 236,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frame1: {
    width: 375,
    height: 554,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 3,
  },
  cartEmpty: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartEmpty;
