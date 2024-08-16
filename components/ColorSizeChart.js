import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import Group from "./Group";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ColorSizeChart = memo(
  ({
    colorSizeChartPosition,
    colorSizeChartTop,
    colorSizeChartLeft,
    sizeChartMarginLeft,
    ellipse36,
    ellipse361,
    ellipse362,
    ellipse363,
    ellipse364,
    ellipse365,
    ellipse366,
    ellipse367,
    ellipse368,
    s,
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    groupViewMarginLeft,
    groupViewMarginLeft1,
    groupViewMarginLeft2,
    groupViewMarginLeft3,
    groupViewMarginLeft4,
    groupViewMarginLeft5,
    groupViewMarginLeft6,
    groupViewMarginLeft7,
    groupViewMarginLeft8,
    groupViewPosition,
    groupViewPosition1,
    groupViewPosition2,
    groupViewPosition3,
    groupViewPosition4,
    groupViewPosition5,
    groupViewPosition6,
    groupViewPosition7,
    groupViewPosition8,
    groupViewWidth,
    groupViewWidth1,
    groupViewWidth2,
    groupViewWidth3,
    groupViewWidth4,
    groupViewWidth5,
    groupViewWidth6,
    groupViewWidth7,
    groupViewWidth8,
    groupViewHeight,
    groupViewHeight1,
    groupViewHeight2,
    groupViewHeight3,
    groupViewHeight4,
    groupViewHeight5,
    groupViewHeight6,
    groupViewHeight7,
    groupViewHeight8,
    groupViewMarginTop,
    groupViewMarginTop1,
    groupViewMarginTop2,
    groupViewMarginTop3,
    groupViewMarginTop4,
    groupViewMarginTop5,
    groupViewMarginTop6,
    groupViewMarginTop7,
    groupViewMarginTop8,
    groupViewTop,
    groupViewTop1,
    groupViewTop2,
    groupViewTop3,
    groupViewTop4,
    groupViewTop5,
    groupViewTop6,
    groupViewTop7,
    groupViewTop8,
    groupViewLeft,
    groupViewLeft1,
    groupViewLeft2,
    groupViewLeft3,
    groupViewLeft4,
    groupViewLeft5,
    groupViewLeft6,
    groupViewLeft7,
    groupViewLeft8,
    sLeft,
    sLeft1,
    sLeft2,
    sLeft3,
    sLeft4,
    sLeft5,
    sLeft6,
    sLeft7,
    sLeft8,
    sFontSize,
    sFontSize1,
    sFontSize2,
    sFontSize3,
    sFontSize4,
    sFontSize5,
    sFontSize6,
    sFontSize7,
    sFontSize8,
    sFontFamily,
    sFontFamily1,
    sFontFamily2,
    sFontFamily3,
    sFontFamily4,
    sFontFamily5,
    sFontFamily6,
    sFontFamily7,
    sFontFamily8,
    sTop,
    sTop1,
    sTop2,
    sTop3,
    sTop4,
    sTop5,
    sTop6,
    sTop7,
    sTop8,
  }) => {
    const colorSizeChartStyle = useMemo(() => {
      return {
        ...getStyleValue("position", colorSizeChartPosition),
        ...getStyleValue("top", colorSizeChartTop),
        ...getStyleValue("left", colorSizeChartLeft),
      };
    }, [colorSizeChartPosition, colorSizeChartTop, colorSizeChartLeft]);

    const sizeChartStyle = useMemo(() => {
      return {
        ...getStyleValue("marginLeft", sizeChartMarginLeft),
      };
    }, [sizeChartMarginLeft]);

    return (
      <View style={[styles.colorSizeChart, colorSizeChartStyle]}>
        <Text style={styles.loremIpsum}>lorem ipsum</Text>
        <Text style={[styles.loremIpsumDolor, styles.textFlexBox]}>
          Lorem ipsum dolor sit amet consectetur. Enim quam arcu ligula vel.
        </Text>
        <Text style={[styles.text, styles.textFlexBox]}>$199</Text>
        <View style={styles.sizeChartParent}>
          <View style={[styles.sizeChart, styles.sizeFlexBox]}>
            <View style={styles.sizeFlexBox}>
              <Text style={[styles.color, styles.colorTypo]}>Color</Text>
              <Group
                ellipse36={ellipse36}
                s={s}
                groupViewMarginLeft={groupViewMarginLeft}
                groupViewPosition={groupViewPosition}
                groupViewWidth={groupViewWidth}
                groupViewHeight={groupViewHeight}
                groupViewMarginTop={groupViewMarginTop}
                groupViewTop={groupViewTop}
                groupViewLeft={groupViewLeft}
                sLeft={sLeft}
                sFontSize={sFontSize}
                sFontFamily={sFontFamily}
                sTop={sTop}
              />
              <Group
                ellipse36={ellipse361}
                s={s1}
                groupViewMarginLeft={groupViewMarginLeft1}
                groupViewPosition={groupViewPosition1}
                groupViewWidth={groupViewWidth1}
                groupViewHeight={groupViewHeight1}
                groupViewMarginTop={groupViewMarginTop1}
                groupViewTop={groupViewTop1}
                groupViewLeft={groupViewLeft1}
                sLeft={sLeft1}
                sFontSize={sFontSize1}
                sFontFamily={sFontFamily1}
                sTop={sTop1}
              />
              <Group
                ellipse36={ellipse362}
                s={s2}
                groupViewMarginLeft={groupViewMarginLeft2}
                groupViewPosition={groupViewPosition2}
                groupViewWidth={groupViewWidth2}
                groupViewHeight={groupViewHeight2}
                groupViewMarginTop={groupViewMarginTop2}
                groupViewTop={groupViewTop2}
                groupViewLeft={groupViewLeft2}
                sLeft={sLeft2}
                sFontSize={sFontSize2}
                sFontFamily={sFontFamily2}
                sTop={sTop2}
              />
              <Group
                ellipse36={ellipse363}
                s={s3}
                groupViewMarginLeft={groupViewMarginLeft3}
                groupViewPosition={groupViewPosition3}
                groupViewWidth={groupViewWidth3}
                groupViewHeight={groupViewHeight3}
                groupViewMarginTop={groupViewMarginTop3}
                groupViewTop={groupViewTop3}
                groupViewLeft={groupViewLeft3}
                sLeft={sLeft3}
                sFontSize={sFontSize3}
                sFontFamily={sFontFamily3}
                sTop={sTop3}
              />
              <Group
                ellipse36={ellipse364}
                s={s4}
                groupViewMarginLeft={groupViewMarginLeft4}
                groupViewPosition={groupViewPosition4}
                groupViewWidth={groupViewWidth4}
                groupViewHeight={groupViewHeight4}
                groupViewMarginTop={groupViewMarginTop4}
                groupViewTop={groupViewTop4}
                groupViewLeft={groupViewLeft4}
                sLeft={sLeft4}
                sFontSize={sFontSize4}
                sFontFamily={sFontFamily4}
                sTop={sTop4}
              />
              <Group
                ellipse36={ellipse365}
                s={s5}
                groupViewMarginLeft={groupViewMarginLeft5}
                groupViewPosition={groupViewPosition5}
                groupViewWidth={groupViewWidth5}
                groupViewHeight={groupViewHeight5}
                groupViewMarginTop={groupViewMarginTop5}
                groupViewTop={groupViewTop5}
                groupViewLeft={groupViewLeft5}
                sLeft={sLeft5}
                sFontSize={sFontSize5}
                sFontFamily={sFontFamily5}
                sTop={sTop5}
              />
            </View>
          </View>
          <View style={[styles.sizeChart1, styles.sizeFlexBox, sizeChartStyle]}>
            <View style={styles.sizeFlexBox}>
              <Text style={[styles.color, styles.colorTypo]}>Size</Text>
              <Group
                ellipse36={ellipse366}
                s={s6}
                groupViewMarginLeft={groupViewMarginLeft6}
                groupViewPosition={groupViewPosition6}
                groupViewWidth={groupViewWidth6}
                groupViewHeight={groupViewHeight6}
                groupViewMarginTop={groupViewMarginTop6}
                groupViewTop={groupViewTop6}
                groupViewLeft={groupViewLeft6}
                sLeft={sLeft6}
                sFontSize={sFontSize6}
                sFontFamily={sFontFamily6}
                sTop={sTop6}
              />
              <Group
                ellipse36={ellipse367}
                s={s7}
                groupViewMarginLeft={groupViewMarginLeft7}
                groupViewPosition={groupViewPosition7}
                groupViewWidth={groupViewWidth7}
                groupViewHeight={groupViewHeight7}
                groupViewMarginTop={groupViewMarginTop7}
                groupViewTop={groupViewTop7}
                groupViewLeft={groupViewLeft7}
                sLeft={sLeft7}
                sFontSize={sFontSize7}
                sFontFamily={sFontFamily7}
                sTop={sTop7}
              />
              <Group
                ellipse36={ellipse368}
                s={s8}
                groupViewMarginLeft={groupViewMarginLeft8}
                groupViewPosition={groupViewPosition8}
                groupViewWidth={groupViewWidth8}
                groupViewHeight={groupViewHeight8}
                groupViewMarginTop={groupViewMarginTop8}
                groupViewTop={groupViewTop8}
                groupViewLeft={groupViewLeft8}
                sLeft={sLeft8}
                sFontSize={sFontSize8}
                sFontFamily={sFontFamily8}
                sTop={sTop8}
              />
              <Text style={styles.s}>S</Text>
              <Text style={[styles.m, styles.mLayout]}>M</Text>
              <Text style={[styles.l, styles.mLayout]}>L</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textFlexBox: {
    marginTop: 5,
    textAlign: "left",
    alignSelf: "stretch",
  },
  sizeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  colorTypo: {
    color: Color.grayScaleLabel,
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
    fontFamily: FontFamily.bodyS,
  },
  mLayout: {
    color: Color.blackMBody,
    height: 19,
    width: 5,
    textAlign: "center",
    position: "absolute",
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
    fontFamily: FontFamily.bodyS,
  },
  loremIpsum: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    color: Color.grayScaleTitleActive,
    textAlign: "left",
    fontFamily: FontFamily.bodyS,
    alignSelf: "stretch",
  },
  loremIpsumDolor: {
    color: Color.grayScaleLabel,
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
    fontFamily: FontFamily.bodyS,
  },
  text: {
    fontSize: FontSize.price_size,
    lineHeight: 24,
    fontFamily: FontFamily.price,
    color: Color.primary,
  },
  color: {
    zIndex: 0,
    textAlign: "left",
  },
  sizeChart: {
    width: 113,
    alignItems: "center",
  },
  s: {
    left: 38,
    color: Color.offWhite,
    zIndex: 4,
    height: 19,
    width: 5,
    textAlign: "center",
    position: "absolute",
    top: 3,
    lineHeight: 18,
    fontSize: FontSize.bodyS_size,
    fontFamily: FontFamily.bodyS,
  },
  m: {
    left: 68,
    zIndex: 5,
    top: 3,
    color: Color.blackMBody,
  },
  l: {
    top: 2,
    left: 99,
    zIndex: 6,
  },
  sizeChart1: {
    marginLeft: 50,
    width: 113,
    alignItems: "center",
  },
  sizeChartParent: {
    flexDirection: "row",
    marginTop: 5,
    alignSelf: "stretch",
  },
  colorSizeChart: {
    width: 343,
    height: 120,
    justifyContent: "center",
  },
});

export default ColorSizeChart;
