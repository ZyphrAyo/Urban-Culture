import React, { memo } from "react";

const IconPlaceholders = memo(() => {
  return (
    <Image
      style={styles.iconPlaceholders}
      resizeMode="cover"
      source={require("../assets/icon-placeholders5.png")}
    />
  );
});

const styles = StyleSheet.create({
  iconPlaceholders: {
    width: 18,
    height: 18,
  },
});

export default IconPlaceholders;
