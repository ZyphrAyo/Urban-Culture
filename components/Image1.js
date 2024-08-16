import React, { memo } from "react";

const Image1 = memo(() => {
  return (
    <Image
      style={styles.imageIcon}
      resizeMode="cover"
      source={require("../assets/image38.png")}
    />
  );
});

const styles = StyleSheet.create({
  imageIcon: {
    width: 424,
    height: 300,
  },
});

export default Image1;
