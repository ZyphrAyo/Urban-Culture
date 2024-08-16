import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const InputTextLightFocus = memo(({ text }) => {
  return (
    <View style={styles.inputtextlightfocus}>
      <View style={[styles.input, styles.textPosition]}>
        <View style={[styles.background, styles.linePosition]} />
        <View style={[styles.line, styles.linePosition]} />
        <Text style={[styles.text, styles.textPosition]}>{text}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  textPosition: {
    left: "0%",
    position: "absolute",
  },
  linePosition: {
    bottom: "0.8%",
    left: "0%",
    position: "absolute",
  },
  background: {
    width: "94.51%",
    top: "-0.8%",
    right: "5.49%",
    backgroundColor: Color.colorGray_300,
    height: "100%",
  },
  line: {
    height: "2.2%",
    width: "100.79%",
    top: "97%",
    right: "-0.79%",
    backgroundColor: Color.colorLightgray,
  },
  text: {
    marginTop: -10.4,
    top: "50%",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.greyPlaceholder,
    textAlign: "left",
  },
  input: {
    width: "101.86%",
    top: "0%",
    right: "-1.86%",
    bottom: "0%",
    overflow: "hidden",
    height: "100%",
  },
  inputtextlightfocus: {
    top: 0,
    left: 178,
    width: 161,
    height: 50,
    position: "absolute",
  },
});

export default InputTextLightFocus;
