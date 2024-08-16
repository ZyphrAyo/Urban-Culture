import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputTextLightFocus from "./InputTextLightFocus";
import InputTextLightFocus1 from "./InputTextLightFocus1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent5 = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.inputtextlightfocusLayout1}>
        <InputTextLightFocus text="Last name" />
        <InputTextLightFocus1 text="First name" />
      </View>
      <View
        style={[styles.inputtextlightfocus, styles.inputtextlightfocusLayout]}
      >
        <View style={[styles.input, styles.inputPosition]}>
          <View style={[styles.background, styles.backgroundPosition]} />
          <View style={styles.line} />
          <Text style={styles.text}>Adress</Text>
        </View>
      </View>
      <View
        style={[styles.inputtextlightfocus1, styles.inputtextlightfocusLayout]}
      >
        <View style={[styles.input1, styles.inputPosition]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <View style={styles.line} />
          <Text style={styles.text}>City</Text>
        </View>
      </View>
      <View
        style={[
          styles.inputtextlightfocusGroup,
          styles.inputtextlightfocusLayout1,
        ]}
      >
        <InputTextLightFocus text="ZIP code" />
        <InputTextLightFocus1
          text="State"
          propPosition="absolute"
          propColor="#919191"
        />
      </View>
      <View
        style={[styles.inputtextlightfocus1, styles.inputtextlightfocusLayout]}
      >
        <View style={[styles.input1, styles.inputPosition]}>
          <View style={[styles.background1, styles.backgroundPosition]} />
          <View style={styles.line} />
          <Text style={styles.text}>Phone number</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputtextlightfocusLayout: {
    height: 51,
    marginTop: 20,
  },
  inputPosition: {
    overflow: "hidden",
    bottom: "0%",
    top: "1.96%",
    height: "98.04%",
    left: "0%",
    position: "absolute",
  },
  backgroundPosition: {
    backgroundColor: Color.colorGray_300,
    top: "-0.8%",
    height: "100%",
    bottom: "0.8%",
    left: "0%",
    position: "absolute",
  },
  inputtextlightfocusLayout1: {
    height: 50,
    width: 339,
  },
  background: {
    width: "100.09%",
    right: "-0.09%",
  },
  line: {
    height: "2%",
    width: "99.62%",
    top: "97.2%",
    right: "0.38%",
    backgroundColor: Color.colorLightgray,
    bottom: "0.8%",
    left: "0%",
    position: "absolute",
  },
  text: {
    marginTop: -10.4,
    top: "50%",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.greyPlaceholder,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  input: {
    width: "105.54%",
    right: "-5.54%",
  },
  inputtextlightfocus: {
    width: 325,
  },
  background1: {
    width: "94.75%",
    right: "5.25%",
  },
  input1: {
    width: "100%",
    right: "0%",
  },
  inputtextlightfocus1: {
    alignSelf: "stretch",
  },
  inputtextlightfocusGroup: {
    marginTop: 20,
  },
  frameParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
});

export default FrameComponent5;
