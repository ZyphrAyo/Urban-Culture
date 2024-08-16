import React, { memo } from "react";

const ShoppingBag = memo(() => {
  return (
    <Image
      style={styles.shoppingBagIcon}
      resizeMode="cover"
      source={require("../assets/shopping-bag5.png")}
    />
  );
});

const styles = StyleSheet.create({
  shoppingBagIcon: {
    width: 24,
    height: 24,
  },
});

export default ShoppingBag;
