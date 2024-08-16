import React, { memo } from "react";

const Iconimagephoto24px = memo(() => {
  return (
    <Image
      style={styles.iconimagephoto24px}
      resizeMode="cover"
      source={require("../assets/iconimagephoto-24px.png")}
    />
  );
});

const styles = StyleSheet.create({
  iconimagephoto24px: {
    width: 24,
    height: 24,
  },
});

export default Iconimagephoto24px;
