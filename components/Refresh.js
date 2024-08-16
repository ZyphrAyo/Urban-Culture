import React, { memo } from "react";

const Refresh = memo(() => {
  return (
    <Image
      style={styles.refreshIcon}
      resizeMode="cover"
      source={require("../assets/refresh1.png")}
    />
  );
});

const styles = StyleSheet.create({
  refreshIcon: {
    width: 24,
    height: 24,
  },
});

export default Refresh;
