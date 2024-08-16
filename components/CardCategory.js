import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardCategory = memo(
  ({ image, cardCategoryPosition, cardCategoryTop, cardCategoryLeft }) => {
    const cardCategoryStyle = useMemo(() => {
      return {
        ...getStyleValue("position", cardCategoryPosition),
        ...getStyleValue("top", cardCategoryTop),
        ...getStyleValue("left", cardCategoryLeft),
      };
    }, [cardCategoryPosition, cardCategoryTop, cardCategoryLeft]);

    return (
      <View style={[styles.cardCategory, cardCategoryStyle]}>
        <View
          style={[styles.cardCategoryInner, styles.cardCategoryInnerPosition]}
        >
          <View style={[styles.frameParent, styles.imageIconPosition]}>
            <View style={[styles.loremIpsumWrapper, styles.imageIconPosition]}>
              <Text style={styles.loremIpsum}>lorem ipsum</Text>
            </View>
            <View
              style={[
                styles.loremIpsumDolorSitAmetConWrapper,
                styles.cardCategoryInnerPosition,
              ]}
            >
              <Text style={[styles.loremIpsumDolor, styles.textLayout]}>
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.text, styles.textLayout]}>$199</Text>
        <Image
          style={[styles.imageIcon, styles.imageIconPosition]}
          resizeMode="cover"
          source={image}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  cardCategoryInnerPosition: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  imageIconPosition: {
    right: "0%",
    top: "0%",
    width: "100%",
    left: "0%",
    position: "absolute",
  },
  textLayout: {
    lineHeight: 24,
    textAlign: "left",
  },
  loremIpsum: {
    alignSelf: "stretch",
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.grayScaleTitleActive,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
  },
  loremIpsumWrapper: {
    height: "44.44%",
    bottom: "55.56%",
  },
  loremIpsumDolor: {
    fontSize: FontSize.bodyM_size,
    color: Color.grayScaleLabel,
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
  },
  loremIpsumDolorSitAmetConWrapper: {
    height: "53.33%",
    width: "88.6%",
    top: "46.67%",
    right: "11.4%",
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    width: "100%",
  },
  cardCategoryInner: {
    height: "8.62%",
    width: "99.88%",
    top: "91.38%",
    right: "0.12%",
  },
  text: {
    top: "95.4%",
    left: "90.54%",
    fontSize: FontSize.price_size,
    fontFamily: FontFamily.price,
    color: Color.primary,
    lineHeight: 24,
    position: "absolute",
  },
  imageIcon: {
    height: "87.45%",
    bottom: "12.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  cardCategory: {
    width: 342,
    height: 522,
  },
});

export default CardCategory;
