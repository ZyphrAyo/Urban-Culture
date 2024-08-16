import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import Frame1 from "../components/Frame1";
import Frame2 from "../components/Frame2";
import { Color } from "../GlobalStyles";

const BlogPageView = () => {
  return (
    <View style={[styles.blogPageView, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <NavBar
          menu={require("../assets/menu.png")}
          search={require("../assets/search.png")}
          shoppingBag={require("../assets/shopping-bag.png")}
          navBarHeight={57}
          navBarBackgroundColor="#fff"
          navBarPosition="relative"
          navBarTop="unset"
          navBarLeft="unset"
          logoHeight="38"
          urbanCultureFontSize={22}
          urbanCultureColor="#262626"
        />
        <Image
          style={styles.heroImageIcon}
          resizeMode="cover"
          source={require("../assets/hero-image2.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Frame1 />
        <Frame2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  heroImageIcon: {
    height: 231,
    marginTop: 3,
    width: 375,
  },
  frame: {
    height: 291,
    width: 375,
  },
  frame1: {
    height: 1388,
    marginTop: 15,
    width: 375,
  },
  blogPageView: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1693,
  },
});

export default BlogPageView;
