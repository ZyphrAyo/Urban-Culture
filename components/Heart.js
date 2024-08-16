import React, { memo } from "react";

const Heart = memo(() => {
  return (
    <Image
      style={styles.heartIcon}
      resizeMode="cover"
      source={require("../assets/heart2.png")}
    />
  );
});

const styles = StyleSheet.create({
  heartIcon: {
    width: 24,
    height: 24,
  },
});

export default Heart;
