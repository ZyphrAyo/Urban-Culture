import React, { memo } from "react";

const Listview = memo(() => {
  return (
    <Image
      style={styles.listviewIcon}
      resizeMode="cover"
      source={require("../assets/listview.png")}
    />
  );
});

const styles = StyleSheet.create({
  listviewIcon: {
    width: 24,
    height: 24,
  },
});

export default Listview;
