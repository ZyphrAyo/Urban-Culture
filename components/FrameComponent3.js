import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const FrameComponent3 = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.miroodlesStickerParent}>
          <Image
            style={styles.miroodlesStickerIcon}
            resizeMode="cover"
            source={require("../assets/miroodles-sticker.png")}
          />
          <Text style={[styles.fastShippingFree, styles.fastShippingFreeTypo]}>
            Fast shipping. Free on orders over $25.
          </Text>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frame1}>
            <Image
              style={styles.miroodlesStickerIcon1}
              resizeMode="cover"
              source={require("../assets/miroodles-sticker1.png")}
            />
          </View>
          <Text
            style={[styles.sustainableProcessFrom, styles.fastShippingFreeTypo]}
          >{`Sustainable process 
from start to finish.`}</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.miroodlesLayout]}>
        <View style={[styles.miroodlesStickerGroup, styles.miroodlesLayout]}>
          <Image
            style={styles.miroodlesStickerIcon2}
            resizeMode="cover"
            source={require("../assets/miroodles-sticker2.png")}
          />
          <Text
            style={[styles.uniqueDesignsAnd, styles.fastShippingFreeTypo]}
          >{`Unique designs 
and high-quality materials.`}</Text>
        </View>
        <View
          style={[styles.miroodlesStickerContainer, styles.miroodlesLayout]}
        >
          <Image
            style={styles.miroodlesStickerIcon2}
            resizeMode="cover"
            source={require("../assets/miroodles-sticker3.png")}
          />
          <Text
            style={[styles.uniqueDesignsAnd, styles.fastShippingFreeTypo]}
          >{`Fast shipping. 
Free on orders over $25.`}</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
  },
  fastShippingFreeTypo: {
    textAlign: "center",
    color: Color.grayScaleLabel,
    fontFamily: FontFamily.price,
    lineHeight: 18,
    fontSize: FontSize.size_xs_8,
  },
  miroodlesLayout: {
    height: 75,
    alignItems: "center",
  },
  miroodlesStickerIcon: {
    width: 45,
    height: 32,
  },
  fastShippingFree: {
    marginTop: 10,
    width: 149,
  },
  miroodlesStickerParent: {
    height: 79,
    width: 149,
    paddingLeft: 0,
    alignItems: "center",
  },
  miroodlesStickerIcon1: {
    width: 47,
    height: 33,
  },
  frame1: {
    width: 72,
    alignItems: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 0,
    overflow: "hidden",
    justifyContent: "center",
  },
  sustainableProcessFrom: {
    marginTop: 8,
  },
  frameGroup: {
    width: 117,
    height: 78,
    paddingLeft: 4,
    paddingTop: 0,
    marginLeft: 30,
  },
  frame: {
    width: 297,
    height: 83,
    justifyContent: "flex-end",
    paddingBottom: 4,
    alignItems: "center",
  },
  miroodlesStickerIcon2: {
    width: 49,
    height: 35,
  },
  uniqueDesignsAnd: {
    marginTop: 3,
  },
  miroodlesStickerGroup: {
    width: 149,
    paddingLeft: 0,
  },
  miroodlesStickerContainer: {
    width: 140,
    marginLeft: 16,
    paddingLeft: 0,
  },
  frame2: {
    width: 305,
    marginTop: 11,
    flexDirection: "row",
    overflow: "hidden",
  },
  frameParent: {
    width: 306,
    height: 170,
    paddingRight: 0,
    marginTop: 25,
    paddingLeft: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FrameComponent3;
