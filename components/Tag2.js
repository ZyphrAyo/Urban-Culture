import React, { memo } from "react";

const Tag2 = memo(() => {
  return (
    <Image
      style={styles.tagIcon}
      resizeMode="cover"
      source={require("../assets/tag1.png")}
    />
  );
});

const styles = StyleSheet.create({
  tagIcon: {
    width: 24,
    height: 24,
  },
});

export default Tag2;
