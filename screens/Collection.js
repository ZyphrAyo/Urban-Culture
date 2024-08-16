import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import FooterYellow from "../components/FooterYellow";
import FrameComponent from "../components/FrameComponent";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Collection = () => {
  return (
    <View style={styles.collection}>
      <NavBar
        menu={require("../assets/menu1.png")}
        search={require("../assets/search1.png")}
        shoppingBag={require("../assets/shopping-bag1.png")}
        navBarHeight={57}
        navBarBackgroundColor="#020202"
        navBarPosition="absolute"
        navBarTop={0}
        navBarLeft={0}
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#f9f9f9"
      />
      <FooterYellow
        twitter={require("../assets/twitter3.png")}
        footerYellowPosition="absolute"
        footerYellowMarginLeft={-187.5}
        footerYellowTop={1757}
        footerYellowLeft="50%"
      />
      <View style={styles.ucParent}>
        <Text style={[styles.uc, styles.ucText]}>UC</Text>
        <View style={[styles.showcaseParent, styles.ucPosition]}>
          <Text style={[styles.showcase, styles.showcaseClr]}>Showcase</Text>
          <Text style={[styles.collection1, styles.showcaseClr]}>
            Collection
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <FrameComponent image={require("../assets/image15.png")} prop="01" />
        <FrameComponent image={require("../assets/image.png")} prop="02" />
        <FrameComponent image={require("../assets/image.png")} prop="03" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ucText: {
    textAlign: "left",
    textTransform: "uppercase",
  },
  ucPosition: {
    left: "50%",
    position: "absolute",
  },
  showcaseClr: {
    color: Color.grayScaleOffWhite,
    letterSpacing: 2,
  },
  uc: {
    marginLeft: 12.2,
    top: 0,
    fontSize: FontSize.size_112xl_8,
    lineHeight: 128,
    fontFamily: FontFamily.yellowtailRegular,
    color: Color.colorGray_500,
    left: "50%",
    position: "absolute",
  },
  showcase: {
    fontSize: FontSize.size_22xl_9,
    lineHeight: 63,
    fontFamily: FontFamily.alluraRegular,
    textAlign: "center",
    width: 180,
  },
  collection1: {
    alignSelf: "stretch",
    fontSize: FontSize.bodyL_size,
    lineHeight: 20,
    fontFamily: FontFamily.bodyS,
    height: 29,
    marginTop: -15,
    textAlign: "left",
    textTransform: "uppercase",
  },
  showcaseParent: {
    marginLeft: -87.8,
    top: 20,
    width: 146,
    alignItems: "center",
  },
  ucParent: {
    top: 72,
    left: 100,
    width: 176,
    height: 128,
    position: "absolute",
  },
  frameParent: {
    top: 169,
    left: 16,
    width: 343,
    position: "absolute",
  },
  collection: {
    backgroundColor: Color.blackTitleActive,
    flex: 1,
    width: "100%",
    height: 2089,
    overflow: "hidden",
  },
});

export default Collection;
