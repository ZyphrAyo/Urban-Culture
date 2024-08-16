import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Cart = memo(
  ({
    image,
    ellipse68,
    ellipse69,
    plus,
    plus1,
    cartMarginTop,
    cartPosition,
    cartTop,
    cartLeft,
  }) => {
    const cartStyle = useMemo(() => {
      return {
        ...getStyleValue("marginTop", cartMarginTop),
        ...getStyleValue("position", cartPosition),
        ...getStyleValue("top", cartTop),
        ...getStyleValue("left", cartLeft),
      };
    }, [cartMarginTop, cartPosition, cartTop, cartLeft]);

    return (
      <View style={[styles.cart, cartStyle]}>
        <Image style={styles.imageIcon} resizeMode="cover" source={image} />
        <View style={[styles.frameParent, styles.textPosition]}>
          <View>
            <Text style={styles.loremIpsum}>lorem ipsum</Text>
            <Text style={[styles.loremIpsumLorem, styles.loremTypo]}>
              lorem ipsum lorem ipsum
            </Text>
          </View>
          <View style={styles.ellipseParent}>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={ellipse68}
            />
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={ellipse69}
            />
            <Image
              style={[styles.plusIcon, styles.plusIconLayout]}
              resizeMode="cover"
              source={plus}
            />
            <Image
              style={[styles.plusIcon1, styles.plusIconLayout]}
              resizeMode="cover"
              source={plus1}
            />
            <Text style={[styles.text, styles.loremTypo]}>1</Text>
          </View>
          <Text style={styles.text1}>$199</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  loremTypo: {
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
  },
  groupLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  plusIconLayout: {
    height: 16,
    width: 16,
    top: 4,
    position: "absolute",
  },
  imageIcon: {
    width: 100,
    left: 0,
    top: 0,
    position: "absolute",
    height: 134,
  },
  loremIpsum: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.grayScaleTitleActive,
    fontFamily: FontFamily.bodyS,
  },
  loremIpsumLorem: {
    color: Color.grayScaleLabel,
    marginTop: 6,
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 54,
  },
  plusIcon: {
    left: 4,
  },
  plusIcon1: {
    left: 58,
  },
  text: {
    marginTop: -9,
    left: 37,
    color: Color.grayScaleTitleActive,
    top: "50%",
    position: "absolute",
  },
  ellipseParent: {
    width: 78,
    marginTop: 12,
    height: 24,
  },
  text1: {
    fontSize: FontSize.price_size,
    lineHeight: 24,
    fontFamily: FontFamily.price,
    color: Color.primary,
    marginTop: 12,
    textAlign: "left",
  },
  frameParent: {
    marginTop: -58,
    marginLeft: -21.5,
    left: "50%",
  },
  cart: {
    width: 313,
    overflow: "hidden",
    height: 134,
  },
});

export default Cart;
