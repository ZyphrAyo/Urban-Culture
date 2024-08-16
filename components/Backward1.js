import React, { memo } from "react";

const Backward1 = memo(() => {
  return (
    <Image
      style={styles.backwardIcon}
      resizeMode="cover"
      source={require("../assets/backward2.png")}
    />
  );
});

const styles = StyleSheet.create({
  backwardIcon: {
    width: 24,
    height: 24,
  },
});

export default Backward1;
