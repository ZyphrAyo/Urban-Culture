import React, { memo } from "react";

const Down = memo(() => {
  return (
    <Image
      style={styles.downIcon}
      resizeMode="cover"
      source={require("../assets/down3.png")}
    />
  );
});

const styles = StyleSheet.create({
  downIcon: {
    width: 24,
    height: 24,
  },
});

export default Down;
