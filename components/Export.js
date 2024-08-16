import React, { memo } from "react";

const Export = memo(() => {
  return (
    <Image
      style={styles.exportIcon}
      resizeMode="cover"
      source={require("../assets/export1.png")}
    />
  );
});

const styles = StyleSheet.create({
  exportIcon: {
    width: 24,
    height: 24,
  },
});

export default Export;
