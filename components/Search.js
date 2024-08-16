import React, { memo } from "react";

const Search = memo(() => {
  return (
    <Image
      style={styles.searchIcon}
      resizeMode="cover"
      source={require("../assets/search2.png")}
    />
  );
});

const styles = StyleSheet.create({
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default Search;
