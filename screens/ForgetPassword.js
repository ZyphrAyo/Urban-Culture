import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Frame5 from "../components/Frame5";
import { Color } from "../GlobalStyles";

const ForgetPassword = () => {
  return (
    <View style={styles.forgetPassword}>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      />
      <Frame5 />
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "absolute",
    top: -3,
    left: -1,
    width: 377,
    height: 819,
    overflow: "hidden",
  },
  forgetPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ForgetPassword;
