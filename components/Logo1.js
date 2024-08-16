import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Logo1 = memo(() => {
  return (
    <View style={styles.logo}>
      <Text style={styles.urbanCulture}>
        <Text style={styles.urbanCulture1}>
          <Text style={styles.u}>U</Text>
          <Text style={styles.rban}>{`rban
`}</Text>
          <Text style={styles.u}>C</Text>
          <Text style={styles.rban}>ulture</Text>
        </Text>
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  u: {
    lineHeight: 14,
  },
  rban: {
    letterSpacing: -1,
    lineHeight: 14,
  },
  urbanCulture1: {
    fontSize: FontSize.size_17xl_2,
  },
  urbanCulture: {
    position: "absolute",
    top: "0%",
    left: "0%",
    textTransform: "capitalize",
    fontFamily: FontFamily.stokeRegular,
    color: Color.offWhite,
    textAlign: "center",
  },
  logo: {
    width: 149,
    height: 53,
  },
});

export default Logo1;
