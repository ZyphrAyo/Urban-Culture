import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import { FontFamily, Color, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Card = memo(
  ({
    image,
    cardWidth,
    cardHeight,
    cardMarginLeft,
    frameViewHeight,
    frameViewWidth,
    frameViewTop,
    frameViewRight,
    frameViewPaddingLeft,
    frameViewWidth1,
    loremWidth,
    loremHeight,
    loremFontSize,
    loremIpsumColor,
    loremIpsumWidth,
    loremIpsumHeight,
    loremIpsumFontSize,
    textMarginTop,
    textFontSize,
    imageIconHeight,
    imageIconBottom,
  }) => {
    const cardStyle = useMemo(() => {
      return {
        ...getStyleValue("width", cardWidth),
        ...getStyleValue("height", cardHeight),
        ...getStyleValue("marginLeft", cardMarginLeft),
      };
    }, [cardWidth, cardHeight, cardMarginLeft]);

    const frameViewStyle = useMemo(() => {
      return {
        ...getStyleValue("height", frameViewHeight),
        ...getStyleValue("width", frameViewWidth),
        ...getStyleValue("top", frameViewTop),
        ...getStyleValue("right", frameViewRight),
        ...getStyleValue("paddingLeft", frameViewPaddingLeft),
      };
    }, [
      frameViewHeight,
      frameViewWidth,
      frameViewTop,
      frameViewRight,
      frameViewPaddingLeft,
    ]);

    const frameView1Style = useMemo(() => {
      return {
        ...getStyleValue("width", frameViewWidth1),
      };
    }, [frameViewWidth1]);

    const loremStyle = useMemo(() => {
      return {
        ...getStyleValue("width", loremWidth),
        ...getStyleValue("height", loremHeight),
        ...getStyleValue("fontSize", loremFontSize),
      };
    }, [loremWidth, loremHeight, loremFontSize]);

    const loremIpsumStyle = useMemo(() => {
      return {
        ...getStyleValue("color", loremIpsumColor),
        ...getStyleValue("width", loremIpsumWidth),
        ...getStyleValue("height", loremIpsumHeight),
        ...getStyleValue("fontSize", loremIpsumFontSize),
      };
    }, [
      loremIpsumColor,
      loremIpsumWidth,
      loremIpsumHeight,
      loremIpsumFontSize,
    ]);

    const textStyle = useMemo(() => {
      return {
        ...getStyleValue("marginTop", textMarginTop),
        ...getStyleValue("fontSize", textFontSize),
      };
    }, [textMarginTop, textFontSize]);

    const imageIconStyle = useMemo(() => {
      return {
        ...getStyleValue("height", imageIconHeight),
        ...getStyleValue("bottom", imageIconBottom),
      };
    }, [imageIconHeight, imageIconBottom]);

    return (
      <View style={[styles.card, cardStyle]}>
        <View
          style={[styles.frameParent, styles.imageIconPosition, frameViewStyle]}
        >
          <View style={[styles.loremParent, frameView1Style]}>
            <Text
              style={[styles.lorem, styles.loremTypo, loremStyle]}
            >{`Lorem `}</Text>
            <Text
              style={[styles.loremIpsum, styles.loremTypo, loremIpsumStyle]}
            >
              Lorem Ipsum
            </Text>
          </View>
          <Text style={[styles.text, styles.loremTypo, textStyle]}>$120</Text>
        </View>
        <Image
          style={[styles.imageIcon, styles.imageIconPosition, imageIconStyle]}
          resizeMode="cover"
          source={image}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  imageIconPosition: {
    left: "0%",
    position: "absolute",
  },
  loremTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
  },
  lorem: {
    color: Color.grayScaleTitleActive,
    width: 46,
    height: 15,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
  },
  loremIpsum: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    color: Color.grayScaleLabel,
    width: 157,
    height: 14,
  },
  loremParent: {
    width: 159,
  },
  text: {
    color: Color.primary,
    marginTop: 4,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
  },
  frameParent: {
    height: "20%",
    width: "98.79%",
    top: "80%",
    right: "1.21%",
    bottom: "0%",
    paddingLeft: Padding.p_9xs,
  },
  imageIcon: {
    height: "77.19%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "22.81%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  card: {
    width: 165,
    height: 285,
  },
});

export default Card;
