import React, { memo } from "react";

const Image11 = memo(() => {
  return (
    <Image
      style={styles.imageIcon}
      resizeMode="cover"
      source={require("../assets/image39.png")}
    />
  );
});

const styles = StyleSheet.create({
  imageIcon: {
    width: 240,
    height: 168,
    overflow: "hidden",
  },
});

export default Image11;
