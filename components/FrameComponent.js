import React, { memo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const FrameComponent = memo(({ image, prop }) => {
  return (
    <View style={styles.imageParent}>
      <Image style={styles.imageIcon} resizeMode="cover" source={image} />
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text, styles.textTypo]}>{prop}</Text>
          <View style={styles.lineWrapper}>
            <View style={styles.frameChild} />
          </View>
        </View>
        <View style={[styles.blackCollectionWrapper, styles.parentFlexBox]}>
          <Text style={[styles.blackCollection, styles.textTypo]}>
            Black collection
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    color: Color.grayScaleOffWhite,
    fontFamily: FontFamily.bodyS,
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: 2,
    fontSize: FontSize.bodyL_size,
  },
  imageIcon: {
    height: "87.62%",
    width: "99.71%",
    top: "0%",
    right: "0%",
    bottom: "12.38%",
    left: "0.29%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  text: {
    textAlign: "left",
  },
  frameChild: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: Color.offWhite,
    borderTopWidth: 1,
    height: 1,
    opacity: 0.1,
  },
  lineWrapper: {
    width: 109,
    marginLeft: 11,
  },
  blackCollection: {
    textAlign: "center",
  },
  blackCollectionWrapper: {
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
  frameParent: {
    marginLeft: -171.7,
    top: 481,
    left: "50%",
    position: "absolute",
    width: 343,
  },
  imageParent: {
    height: 521,
    width: 343,
  },
});

export default FrameComponent;
