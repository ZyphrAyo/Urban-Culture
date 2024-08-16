import React, { memo } from "react";

const Plus = memo(() => {
  return (
    <Image
      style={styles.plusIcon}
      resizeMode="cover"
      source={require("../assets/plus8.png")}
    />
  );
});

const styles = StyleSheet.create({
  plusIcon: {
    width: 24,
    height: 24,
  },
});

export default Plus;
