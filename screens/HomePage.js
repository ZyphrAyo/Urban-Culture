import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import FrameComponent2 from "../components/FrameComponent2";
import Showcase from "../components/Showcase";
import Tag from "../components/Tag";
import URBANCULTURE from "../components/URBANCULTURE";
import FrameComponent3 from "../components/FrameComponent3";
import FollowUs from "../components/FollowUs";
import FooterPrimary from "../components/FooterPrimary";
import NavBar from "../components/NavBar";
import JustForYou from "../components/JustForYou";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homepage}>
      <View style={[styles.newArival, styles.brandPosition]}>
        <FrameComponent2 />
        <Showcase />
      </View>
      <View style={[styles.brand, styles.brandPosition]}>
        <View style={styles.starParent}>
          <Image
            style={styles.starIconLayout}
            resizeMode="cover"
            source={require("../assets/star1.png")}
          />
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-261.png")}
          />
        </View>
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          resizeMode="cover"
          source={require("../assets/star2.png")}
        />
      </View>
      <View style={[styles.collections, styles.frame1Position]}>
        <View style={styles.starParent}>
          <Text
            style={[styles.collections1, styles.trending1Typo]}
          >{`Collection's `}</Text>
          <Image
            style={[styles.imageIcon, styles.imageIconLayout]}
            resizeMode="cover"
            source={require("../assets/image6.png")}
          />
          <Image
            style={styles.imageIcon1}
            resizeMode="cover"
            source={require("../assets/image7.png")}
          />
        </View>
        <Image
          style={[styles.imageIcon2, styles.imageIconLayout]}
          resizeMode="cover"
          source={require("../assets/image8.png")}
        />
      </View>
      <View style={[styles.trending, styles.frame1Position]}>
        <Text style={styles.trending1Typo}>@Trending</Text>
        <View style={styles.frame}>
          <View style={styles.tagFlexBox}>
            <Tag prop="#2024" tagPosition="unset" tagMarginLeft="unset" />
            <Tag prop="#MENS FASHION" tagPosition="unset" tagMarginLeft={10} />
            <Tag prop="#HOODIES" tagPosition="unset" tagMarginLeft={10} />
            <Tag prop="#CAPS" tagPosition="unset" tagMarginLeft={10} />
          </View>
          <View style={[styles.tagGroup, styles.tagFlexBox]}>
            <Tag prop="#FASHION" tagPosition="unset" tagMarginLeft="unset" />
            <Tag prop="#WOMENS " tagPosition="unset" tagMarginLeft={10} />
            <Tag prop="#SNEAKERS " tagPosition="unset" tagMarginLeft={10} />
            <Tag prop="#BANDS" tagPosition="unset" tagMarginLeft={10} />
          </View>
        </View>
      </View>
      <View style={[styles.urbanCulture, styles.frame1Position]}>
        <View style={styles.urbanCultureParent}>
          <URBANCULTURE />
          <Image
            style={styles.spiral3Icon}
            resizeMode="cover"
            source={require("../assets/spiral-3.png")}
          />
          <FrameComponent3 />
        </View>
      </View>
      <FollowUs />
      <FooterPrimary
        twitter={require("../assets/twitter.png")}
        youTube={require("../assets/youtube.png")}
        softStar={require("../assets/soft-star2.png")}
        softStar1={require("../assets/soft-star2.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft="unset"
        footerPrimaryBottom="unset"
        footerPrimaryLeft={0}
        footerPrimaryTop={4294}
        footerPrimaryMarginTop="unset"
      />
      <View style={[styles.frame1, styles.frame1Position]}>
        <NavBar
          menu={require("../assets/menu1.png")}
          search={require("../assets/search1.png")}
          shoppingBag={require("../assets/shopping-bag1.png")}
          navBarHeight={57}
          navBarBackgroundColor="#89608e"
          navBarPosition="relative"
          navBarTop="unset"
          navBarLeft="unset"
          logoHeight="38"
          urbanCultureFontSize={22}
          urbanCultureColor="#fff"
        />
        <Image
          style={styles.heroImageIcon}
          resizeMode="cover"
          source={require("../assets/hero-image.png")}
        />
      </View>
      <JustForYou />
    </View>
  );
};

const styles = StyleSheet.create({
  brandPosition: {
    position: "absolute",
    alignItems: "center",
  },
  starIconLayout: {
    height: 18,
    width: 125,
  },
  frame1Position: {
    left: 0,
    position: "absolute",
  },
  trending1Typo: {
    textAlign: "center",
    color: Color.grayScaleTitleActive,
    fontFamily: FontFamily.subTitleL,
    fontWeight: "300",
    textTransform: "uppercase",
    lineHeight: 24,
    letterSpacing: 4,
    fontSize: FontSize.subTitleL_size,
  },
  imageIconLayout: {
    maxWidth: "100%",
    marginTop: 32,
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
  },
  tagFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  newArival: {
    top: 710,
    left: 16,
    width: 343,
    alignItems: "center",
  },
  frameChild: {
    height: 62,
    marginTop: 33,
    width: 329,
  },
  starParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  starIcon1: {
    marginTop: 40,
  },
  brand: {
    marginLeft: -164.5,
    top: 1469,
    left: "50%",
    width: 329,
    alignItems: "center",
  },
  collections1: {
    width: 321,
  },
  imageIcon: {
    height: 240,
    marginTop: 32,
  },
  imageIcon1: {
    width: 260,
    height: 296,
    marginTop: 32,
  },
  imageIcon2: {
    height: 176,
    marginTop: 32,
  },
  collections: {
    top: 1681,
    width: 377,
  },
  tagGroup: {
    marginTop: 7,
  },
  frame: {
    width: 362,
    height: 75,
    marginTop: 23,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  trending: {
    top: 3119,
    height: 138,
    justifyContent: "center",
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_7xs,
    paddingRight: 7,
    paddingBottom: Padding.p_7xs,
    width: 375,
    alignItems: "center",
  },
  spiral3Icon: {
    width: 73,
    height: 21,
    marginTop: 25,
  },
  urbanCultureParent: {
    width: 339,
    alignItems: "center",
  },
  urbanCulture: {
    top: 3302,
    backgroundColor: Color.colorCadetblue_100,
    height: 456,
    paddingHorizontal: 0,
    paddingVertical: 11,
    justifyContent: "flex-end",
    width: 375,
    alignItems: "center",
  },
  heroImageIcon: {
    height: 603,
    width: 375,
  },
  frame1: {
    top: 0,
    width: 375,
    alignItems: "center",
    overflow: "hidden",
  },
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 4627,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
