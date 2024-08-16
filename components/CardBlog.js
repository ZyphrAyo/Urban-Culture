import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import Tag1 from "./Tag1";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardBlog = memo(
  ({
    daysAgo,
    cardBlogWidth,
    cardBlogAlignSelf,
    cardBlogMarginTop,
    men,
    men1,
    close1,
    close11,
    showCloseIcon,
    tagPosition,
    tagPosition1,
    tagWidth,
    tagWidth1,
    tagHeight,
    tagHeight1,
    tagMarginLeft,
    tagMarginLeft1,
  }) => {
    const cardBlogStyle = useMemo(() => {
      return {
        ...getStyleValue("width", cardBlogWidth),
        ...getStyleValue("alignSelf", cardBlogAlignSelf),
        ...getStyleValue("marginTop", cardBlogMarginTop),
      };
    }, [cardBlogWidth, cardBlogAlignSelf, cardBlogMarginTop]);

    return (
      <View style={[styles.cardBlog, cardBlogStyle]}>
        <Image
          style={[styles.heroImageIcon, styles.tagsPosition]}
          resizeMode="cover"
          source={require("../assets/hero-image1.png")}
        />
        <Image
          style={styles.bookmarkIcon}
          resizeMode="cover"
          source={require("../assets/bookmark.png")}
        />
        <View style={[styles.tags, styles.tagsFlexBox]}>
          <View style={styles.tagsFlexBox}>
            <Tag1
              men={men}
              close1={close1}
              showCloseIcon={showCloseIcon}
              tagPosition={tagPosition}
              tagWidth={tagWidth}
              tagHeight={tagHeight}
              tagMarginLeft={tagMarginLeft}
            />
            <Tag1
              men={men1}
              close1={close11}
              showCloseIcon={showCloseIcon}
              tagPosition={tagPosition1}
              tagWidth={tagWidth1}
              tagHeight={tagHeight1}
              tagMarginLeft={tagMarginLeft1}
            />
          </View>
          <Text style={styles.daysAgo}>{daysAgo}</Text>
        </View>
        <View style={[styles.cardBlogChild, styles.tagsPosition]} />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  tagsPosition: {
    left: 0,
    position: "absolute",
  },
  tagsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  heroImageIcon: {
    top: 0,
    height: 198,
    width: 343,
  },
  bookmarkIcon: {
    height: "7.76%",
    width: "5.25%",
    top: "4.74%",
    right: "3.79%",
    bottom: "87.5%",
    left: "90.96%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  daysAgo: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    fontFamily: FontFamily.bodyS,
    color: Color.grayScalePlacehoder,
    textAlign: "left",
  },
  tags: {
    top: 208,
    width: 339,
    justifyContent: "space-between",
    left: 0,
    position: "absolute",
  },
  cardBlogChild: {
    top: 111,
    height: 87,
    width: 343,
  },
  cardBlog: {
    height: 232,
    width: 343,
  },
});

export default CardBlog;
