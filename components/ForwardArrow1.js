import React, { memo } from "react";

const ForwardArrow1 = memo(() => {
  return (
    <Image
      style={styles.forwardArrowIcon}
      resizeMode="cover"
      source={require("../assets/forward-arrow2.png")}
    />
  );
});

const styles = StyleSheet.create({
  forwardArrowIcon: {
    width: 24,
    height: 24,
  },
});

export default ForwardArrow1;
