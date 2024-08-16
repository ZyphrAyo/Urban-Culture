import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import InputTextLightFocus1 from "./InputTextLightFocus1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const FrameComponent13 = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.inputtextlightfocusParent}>
        <View style={styles.inputtextlightfocus}>
          <View style={[styles.input, styles.inputPosition1]}>
            <View style={[styles.background, styles.backgroundPosition]} />
            <View style={styles.line} />
            <Text style={styles.text}>Name On Card</Text>
          </View>
        </View>
        <View style={styles.inputtextlightfocus1}>
          <View style={[styles.input1, styles.inputPosition1]}>
            <View style={[styles.background1, styles.backgroundPosition]} />
            <View style={styles.line} />
            <Text style={styles.text}>Card Number</Text>
          </View>
        </View>
        <View style={styles.inputtextlightfocusGroup}>
          <InputTextLightFocus1
            text="Exp Month"
            propPosition="relative"
            propTop="unset"
            propLeft="unset"
            propColor="#4f4f4f"
          />
          <View style={styles.inputtextlightfocus2}>
            <View style={[styles.input2, styles.inputPosition]}>
              <View style={[styles.background2, styles.backgroundPosition]} />
              <View style={[styles.line2, styles.linePosition]} />
              <Text style={styles.text}>Exp Date</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.inputtextlightfocus3}>
        <View style={[styles.input3, styles.inputPosition]}>
          <View style={[styles.background3, styles.backgroundPosition]} />
          <View style={[styles.line3, styles.linePosition]} />
          <Text style={styles.text}>CVV</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  inputPosition1: {
    overflow: "hidden",
    bottom: "0%",
    top: "1.96%",
    height: "98.04%",
    left: "0%",
    position: "absolute",
  },
  backgroundPosition: {
    backgroundColor: Color.colorGray_300,
    bottom: "0.8%",
    top: "-0.8%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  inputPosition: {
    top: "0%",
    height: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  linePosition: {
    top: "97%",
    height: "2.2%",
    backgroundColor: Color.colorLightgray,
    bottom: "0.8%",
    left: "0%",
    position: "absolute",
  },
  background: {
    width: "94.75%",
    right: "5.25%",
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
    marginTop: -10,
    top: "50%",
    fontSize: FontSize.bodyL_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyS,
    color: Color.greyMLabel,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  input: {
    width: "100%",
    right: "0%",
  },
  inputtextlightfocus: {
    height: 51,
    alignSelf: "stretch",
  },
  background1: {
    width: "100.09%",
    right: "-0.09%",
  },
  input1: {
    width: "105.54%",
    right: "-5.54%",
  },
  inputtextlightfocus1: {
    width: 325,
    marginTop: 20,
    height: 51,
  },
  background2: {
    width: "94.51%",
    right: "5.49%",
  },
  line2: {
    width: "100.79%",
    right: "-0.79%",
  },
  input2: {
    width: "101.86%",
    right: "-1.86%",
  },
  inputtextlightfocus2: {
    width: 161,
    height: 50,
  },
  inputtextlightfocusGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    alignSelf: "stretch",
  },
  inputtextlightfocusParent: {
    alignSelf: "stretch",
  },
  background3: {
    width: "95.03%",
    right: "4.97%",
  },
  line3: {
    width: "100.15%",
    right: "-0.15%",
  },
  input3: {
    width: "99.71%",
    right: "0.29%",
  },
  inputtextlightfocus3: {
    marginTop: 19,
    height: 50,
    alignSelf: "stretch",
  },
  frameParent: {
    width: 343,
    marginTop: 30,
  },
});

export default FrameComponent13;
