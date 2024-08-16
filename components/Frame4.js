import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent12 from "./FrameComponent12";

const Frame4 = memo(() => {
  return (
    <View style={styles.frame}>
      <FrameComponent12 />
    </View>
  );
});

const styles = StyleSheet.create({
  frame: {
    width: 318,
    overflow: "hidden",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default Frame4;
