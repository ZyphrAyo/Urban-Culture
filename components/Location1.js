import React, { memo } from "react";

const Location1 = memo(() => {
  return (
    <Image
      style={styles.locationIcon}
      resizeMode="cover"
      source={require("../assets/location1.png")}
    />
  );
});

const styles = StyleSheet.create({
  locationIcon: {
    width: 24,
    height: 24,
  },
});

export default Location1;
