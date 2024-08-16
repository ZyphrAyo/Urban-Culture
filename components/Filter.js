import React, { memo } from "react";

const Filter = memo(() => {
  return (
    <Image
      style={styles.filterIcon}
      resizeMode="cover"
      source={require("../assets/filter.png")}
    />
  );
});

const styles = StyleSheet.create({
  filterIcon: {
    width: 24,
    height: 24,
  },
});

export default Filter;
