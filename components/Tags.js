import React, { memo } from "react";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import Tag1 from "./Tag1";
import { Padding } from "../GlobalStyles";

const Tags = memo(
  ({
    showCloseIcon,
    men,
    men1,
    close11,
    tagPosition,
    tagPosition1,
    tagWidth,
    tagWidth1,
    tagHeight,
    tagHeight1,
    tagMarginLeft,
    tagMarginLeft1,
  }) => {
    return (
      <View style={styles.tags}>
        <Tag1
          men={men}
          close1={require("../assets/close.png")}
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
    );
  }
);

const styles = StyleSheet.create({
  tags: {
    position: "absolute",
    top: 142,
    left: 16,
    width: 359,
    height: 42,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Padding.p_11xs,
  },
});

export default Tags;
