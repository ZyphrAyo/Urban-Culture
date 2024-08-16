import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import NavBarLt from "../components/NavBarLt";
import Card from "../components/Card";
import FooterPrimary from "../components/FooterPrimary";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SearchResultView = () => {
  return (
    <View style={styles.searchResultView}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtMarginLeft={-187.5}
        navBarLtTop={0}
        navBarLtLeft="50%"
        logoHeight="38"
        urbanCultureFontSize={22}
      />
      <View style={[styles.searchbox, styles.filterPosition]}>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <View style={styles.searchboxChild} />
        <Text style={[styles.tshirt, styles.tshirtLayout]}>Tshirt</Text>
        <Image
          style={[styles.searchboxItem, styles.tshirtLayout]}
          resizeMode="cover"
          source={require("../assets/frame-39.png")}
        />
      </View>
      <View style={[styles.filter, styles.parentCardFlexBox]}>
        <Text style={styles.apparel}>3689 Apparel</Text>
        <View style={[styles.frameParent, styles.parentCardFlexBox]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.newParent, styles.parentCardFlexBox]}>
              <Text style={[styles.new, styles.newTypo]}>New</Text>
              <Image
                style={styles.downIcon}
                resizeMode="cover"
                source={require("../assets/down.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-33703.png")}
          />
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/frame-33706.png")}
          />
        </View>
      </View>
      <View style={[styles.newArival, styles.filterPosition]}>
        <View style={styles.showcase}>
          <View style={styles.images}>
            <View style={[styles.cardParent, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image.png")}
                propMarginLeft="unset"
              />
              <Card
                image={require("../assets/image1.png")}
                propMarginLeft={19.6}
              />
            </View>
            <View style={[styles.cardGroup, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image2.png")}
                propMarginLeft="unset"
              />
              <Card
                image={require("../assets/image3.png")}
                propMarginLeft={19.6}
              />
            </View>
            <View style={[styles.cardGroup, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image4.png")}
                propMarginLeft="unset"
              />
              <Card
                image={require("../assets/image5.png")}
                propMarginLeft={19.6}
              />
            </View>
            <View style={[styles.cardGroup, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image6.png")}
                propMarginLeft="unset"
              />
              <Card image={require("../assets/image7.png")} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.parentCardFlexBox]}>
        <View style={[styles.frameContainer, styles.parentCardFlexBox]}>
          <View style={[styles.wrapper, styles.wrapperLayout]}>
            <Text style={[styles.text, styles.textPosition]}>1</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.textPosition]}>2</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.textPosition]}>3</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.textPosition]}>4</Text>
          </View>
          <View style={[styles.container, styles.wrapperLayout]}>
            <Text style={[styles.text1, styles.textPosition]}>5</Text>
          </View>
        </View>
        <Image
          style={styles.forwardIcon}
          resizeMode="cover"
          source={require("../assets/forward.png")}
        />
      </View>
      <FooterPrimary
        youTube={require("../assets/youtube1.png")}
        softStar={require("../assets/soft-star1.png")}
        softStar1={require("../assets/soft-star1.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft={-187.5}
        footerPrimaryBottom={0}
        footerPrimaryLeft="50%"
        footerPrimaryTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterPosition: {
    left: "50%",
    position: "absolute",
  },
  tshirtLayout: {
    height: 28,
    position: "absolute",
  },
  parentCardFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  newTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyL,
  },
  wrapperLayout: {
    height: 31,
    width: 32,
    overflow: "hidden",
  },
  textPosition: {
    height: 21,
    width: 12,
    marginLeft: -6,
    marginTop: -10.5,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.bodyL,
    lineHeight: 24,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  searchIcon: {
    height: "60%",
    width: "6.4%",
    top: "15%",
    bottom: "25%",
    left: "89.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    right: "4.27%",
    position: "absolute",
    overflow: "hidden",
  },
  searchboxChild: {
    width: "91.47%",
    top: "99.5%",
    borderStyle: "solid",
    borderColor: "#888",
    borderTopWidth: 1,
    height: 0,
    opacity: 0.5,
    left: "4.27%",
    right: "4.27%",
    position: "absolute",
  },
  tshirt: {
    marginTop: -14,
    width: "19.2%",
    fontSize: FontSize.bodyL_size,
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.bodyL,
    lineHeight: 24,
    height: 28,
    top: "50%",
    left: "4.27%",
  },
  searchboxItem: {
    top: 5,
    left: 298,
    borderRadius: 25,
    width: 28,
  },
  searchbox: {
    marginLeft: -187.5,
    top: 62,
    width: 375,
    height: 40,
  },
  apparel: {
    color: Color.grayScaleBody,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontFamily: FontFamily.bodyL,
    lineHeight: 24,
  },
  new: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    color: Color.colorDimgray_200,
  },
  downIcon: {
    width: 14,
    height: 14,
    marginLeft: 3,
  },
  newParent: {
    marginTop: -9,
    marginLeft: -21.35,
    alignItems: "center",
    top: "50%",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  frameWrapper: {
    borderRadius: 33,
    backgroundColor: "rgba(38, 38, 38, 0.1)",
    width: 73,
    height: 36,
    overflow: "hidden",
  },
  frameChild: {
    width: 36,
    marginLeft: 4,
    height: 36,
  },
  frameParent: {
    marginLeft: 87,
    alignItems: "center",
  },
  filter: {
    marginLeft: -163.5,
    top: 116,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  cardParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  cardGroup: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  images: {
    alignSelf: "stretch",
  },
  showcase: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  newArival: {
    marginLeft: -171.5,
    top: 166,
    width: 343,
    alignItems: "center",
  },
  text: {
    color: Color.offWhite,
  },
  wrapper: {
    backgroundColor: Color.colorPlum,
  },
  text1: {
    color: Color.colorDimgray_200,
  },
  container: {
    backgroundColor: Color.offWhite,
    marginLeft: 12,
  },
  frameContainer: {
    alignItems: "center",
  },
  forwardIcon: {
    width: 24,
    height: 24,
    marginLeft: 7,
  },
  frameGroup: {
    marginLeft: -119.5,
    top: 1342,
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  searchResultView: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1736,
    overflow: "hidden",
  },
});

export default SearchResultView;
