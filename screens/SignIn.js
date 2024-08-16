import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Frame3 from "../components/Frame3";
import { Color } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame2.png")}
      />
      <Frame3 />
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
  signIn: {
    backgroundColor: Color.offWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignIn;
