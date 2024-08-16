import React, { memo } from "react";

const Menu1 = memo(() => {
  return (
    <Image
      style={styles.menuIcon}
      resizeMode="cover"
      source={require("../assets/menu2.png")}
    />
  );
});

const styles = StyleSheet.create({
  menuIcon: {
    width: 24,
    height: 24,
  },
});

export default Menu1;
