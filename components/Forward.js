import React, { memo } from "react";

const Forward = memo(() => {
  return (
    <Image
      style={styles.forwardIcon}
      resizeMode="cover"
      source={require("../assets/forward7.png")}
    />
  );
});

const styles = StyleSheet.create({
  forwardIcon: {
    width: 24,
    height: 24,
  },
});

export default Forward;
