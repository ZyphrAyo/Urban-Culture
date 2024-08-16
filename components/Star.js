import React, { memo } from "react";

const Star = memo(() => {
  return (
    <Image
      style={styles.starIcon}
      resizeMode="cover"
      source={require("../assets/star13.png")}
    />
  );
});

const styles = StyleSheet.create({
  starIcon: {
    width: 125,
    height: 18,
  },
});

export default Star;
