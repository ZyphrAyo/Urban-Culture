import React, { memo } from "react";

const Resize = memo(() => {
  return (
    <Image
      style={styles.resizeIcon}
      resizeMode="cover"
      source={require("../assets/resize2.png")}
    />
  );
});

const styles = StyleSheet.create({
  resizeIcon: {
    width: 24,
    height: 24,
  },
});

export default Resize;
