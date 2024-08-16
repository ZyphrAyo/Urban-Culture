import React, { memo } from "react";

const Close1 = memo(() => {
  return (
    <Image
      style={styles.closeIcon}
      resizeMode="cover"
      source={require("../assets/close4.png")}
    />
  );
});

const styles = StyleSheet.create({
  closeIcon: {
    width: 24,
    height: 24,
  },
});

export default Close1;
