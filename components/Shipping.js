import React, { memo } from "react";

const Shipping = memo(() => {
  return (
    <Image
      style={styles.shippingIcon}
      resizeMode="cover"
      source={require("../assets/shipping1.png")}
    />
  );
});

const styles = StyleSheet.create({
  shippingIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default Shipping;
