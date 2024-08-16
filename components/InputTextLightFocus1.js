import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputTextLightFocus1 = memo(
  ({ text, propPosition, propTop, propLeft, propColor }) => {
    const inputTextLightFocusStyle = useMemo(() => {
      return {
        ...getStyleValue("position", propPosition),
        ...getStyleValue("top", propTop),
        ...getStyleValue("left", propLeft),
      };
    }, [propPosition, propTop, propLeft]);

    const text1Style = useMemo(() => {
      return {
        ...getStyleValue("color", propColor),
      };
    }, [propColor]);

    return (
      <View style={[styles.inputtextlightfocus, inputTextLightFocusStyle]}>
        <View style={[styles.input, styles.linePosition]}>
          <View style={[styles.background, styles.linePosition]} />
          <View style={[styles.line, styles.linePosition]} />
          <Text style={[styles.text, styles.linePosition, text1Style]}>
            {text}
          </Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  linePosition: {
    left: "0%",
    position: "absolute",
  },
  background: {
    width: "93.37%",
    right: "6.63%",
    backgroundColor: Color.colorGray_300,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  line: {
    height: "2.2%",
    width: "99.82%",
    top: "98%",
    right: "0.18%",
    bottom: "-0.2%",
    backgroundColor: Color.colorLightgray,
  },
  text: {
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.greyPlaceholder,
    textAlign: "left",
  },
  input: {
    width: "107.1%",
    right: "-7.1%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  inputtextlightfocus: {
    top: 0,
    left: 0,
    width: 155,
    height: 50,
    position: "absolute",
  },
});

export default InputTextLightFocus1;
