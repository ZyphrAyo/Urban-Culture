import React, { memo } from "react";

const ForwardArrow = memo(() => {
  return (
    <Image
      style={styles.forwardArrowIcon}
      resizeMode="cover"
      source={require("../assets/forward-arrow3.png")}
    />
  );
});

const styles = StyleSheet.create({
  forwardArrowIcon: {
    width: 24,
    height: 24,
  },
});

export default ForwardArrow;
