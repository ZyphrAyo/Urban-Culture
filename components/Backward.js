import React, { memo } from "react";

const Backward = memo(() => {
  return (
    <Image
      style={styles.backwardIcon}
      resizeMode="cover"
      source={require("../assets/backward1.png")}
    />
  );
});

const styles = StyleSheet.create({
  backwardIcon: {
    width: 24,
    height: 24,
  },
});

export default Backward;
