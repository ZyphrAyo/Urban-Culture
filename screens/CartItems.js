import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Button1 from "../components/Button1";
import Cart from "../components/Cart";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const CartItems = () => {
  return (
    <View style={styles.cartItems}>
      <View style={styles.cartWrapper}>
        <Text style={styles.cart}>Cart</Text>
      </View>
      <Image
        style={styles.starIcon}
        resizeMode="cover"
        source={require("../assets/star7.png")}
      />
      <Image
        style={styles.closeIcon}
        resizeMode="cover"
        source={require("../assets/close2.png")}
      />
      <Button1
        iconPlaceholders={require("../assets/shopping-bag2.png")}
        text="Buy now"
        showIcon
        buttonPosition="absolute"
        buttonHeight={62}
        buttonMarginLeft="unset"
        buttonBottom="unset"
        buttonLeft={0}
        buttonWidth={375}
        buttonTop={578}
        buttonMarginTop="unset"
      />
      <Text style={[styles.subTotal, styles.textTypo]}>Sub Total</Text>
      <Text style={[styles.text, styles.textTypo]}>$240</Text>
      <Text style={[styles.shippingChargesTaxesContainer, styles.textTypo]}>
        <Text style={styles.text1}>*</Text>
        <Text
          style={styles.shippingChargesTaxes}
        >{`shipping charges, taxes and discount codes    are calculated at the time of accounting. `}</Text>
      </Text>
      <View style={styles.cartParent}>
        <Cart
          image={require("../assets/image31.png")}
          ellipse68={require("../assets/ellipse-68.png")}
          ellipse69={require("../assets/ellipse-68.png")}
          plus={require("../assets/plus2.png")}
          plus1={require("../assets/plus3.png")}
          cartMarginTop="unset"
          cartPosition="absolute"
          cartTop={0}
          cartLeft={0}
        />
        <Cart
          image={require("../assets/image31.png")}
          ellipse68={require("../assets/ellipse-68.png")}
          ellipse69={require("../assets/ellipse-68.png")}
          plus={require("../assets/plus2.png")}
          plus1={require("../assets/plus3.png")}
          cartMarginTop="unset"
          cartPosition="absolute"
          cartTop={150}
          cartLeft={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    position: "absolute",
  },
  cart: {
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.blackTitleActive,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    fontSize: FontSize.bodyL_size,
  },
  cartWrapper: {
    top: 63,
    left: 33,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  starIcon: {
    marginLeft: -38.5,
    top: 443,
    left: "50%",
    width: 77,
    height: 12,
    position: "absolute",
  },
  closeIcon: {
    top: 8,
    width: 24,
    height: 24,
    left: 16,
    position: "absolute",
  },
  subTotal: {
    top: 462,
    color: Color.grayScaleBody,
    left: 16,
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
  },
  text: {
    top: 456,
    left: 313,
    color: Color.primary,
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
  },
  text1: {
    color: Color.yellow,
  },
  shippingChargesTaxes: {
    color: Color.grayScalePlacehoder,
  },
  shippingChargesTaxesContainer: {
    top: 498,
    fontSize: FontSize.bodyM_size,
    width: 308,
    height: 71,
    left: 16,
  },
  cartParent: {
    top: 119,
    left: 31,
    width: 313,
    height: 284,
    position: "absolute",
  },
  cartItems: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default CartItems;
