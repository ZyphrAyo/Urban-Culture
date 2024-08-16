import React, { memo } from "react";

const Export1 = memo(() => {
  return (
    <Image
      style={styles.exportIcon}
      resizeMode="cover"
      source={require("../assets/export2.png")}
    />
  );
});

const styles = StyleSheet.create({
  exportIcon: {
    width: 24,
    height: 24,
  },
});

export default Export1;
