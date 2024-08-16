import React, { memo } from "react";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const Button31 = memo(({ showIcon = true, text = "button" }) => {
  return (
    <View style={styles.statedefault}>
      <View style={styles.buttonParent}>
        <Text style={styles.button}>{text}</Text>
        {showIcon && (
          <Image
            style={styles.iconPlaceholders}
            resizeMode="cover"
            source={require("../assets/icon-placeholders4.png")}
          />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  button: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.inputPurple,
    textAlign: "left",
  },
  iconPlaceholders: {
    width: 18,
    height: 18,
    marginLeft: 10,
  },
  buttonParent: {
    flexDirection: "row",
  },
  statedefault: {
    backgroundColor: Color.blackTitleActive,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mini,
    flexDirection: "row",
  },
});

export default Button31;
