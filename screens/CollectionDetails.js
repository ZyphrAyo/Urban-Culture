import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import NavBar from "../components/NavBar";
import FooterYellow from "../components/FooterYellow";
import NewArival from "../components/NewArival";
import JustForYou1 from "../components/JustForYou1";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const CollectionDetails = () => {
  return (
    <View style={styles.collectionDetails}>
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
        twitter={require("../assets/twitter2.png")}
        footerYellowPosition="absolute"
        footerYellowMarginLeft={-187.5}
        footerYellowTop={2101}
        footerYellowLeft="50%"
      />
      <View style={styles.ucParent}>
        <Text style={[styles.uc, styles.ucText]}>UC</Text>
        <View style={[styles.showcaseParent, styles.ucPosition]}>
          <Text style={[styles.showcase, styles.showcaseClr]}>Showcase</Text>
          <Text style={[styles.collection, styles.showcaseClr]}>
            Collection
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.imageParent}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image15.png")}
          />
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={styles.frameFlexBox}>
              <View style={styles.frameChild} />
            </View>
            <View style={styles.frameItem} />
          </View>
        </View>
        <NewArival />
      </View>
      <JustForYou1 />
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
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
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
  collection: {
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
  imageIcon: {
    height: "91.94%",
    width: "99.71%",
    top: "0%",
    right: "0%",
    bottom: "8.06%",
    left: "0.29%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    width: 109,
    height: 0,
  },
  frameItem: {
    width: 209,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  frameGroup: {
    marginLeft: -171.7,
    top: 457,
    width: 343,
    left: "50%",
    position: "absolute",
  },
  imageParent: {
    height: 496,
    width: 343,
  },
  frameParent: {
    top: 169,
    left: 16,
    width: 343,
    position: "absolute",
  },
  collectionDetails: {
    backgroundColor: Color.blackTitleActive,
    flex: 1,
    width: "100%",
    height: 2434,
    overflow: "hidden",
  },
});

export default CollectionDetails;
