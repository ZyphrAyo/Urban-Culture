import React, { memo } from "react";

const Listview1 = memo(() => {
  return (
    <Image
      style={styles.listviewIcon}
      resizeMode="cover"
      source={require("../assets/listview1.png")}
    />
  );
});

const styles = StyleSheet.create({
  listviewIcon: {
    width: 24,
    height: 24,
  },
});

export default Listview1;
