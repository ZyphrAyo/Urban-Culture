import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import NavBarLt from "../components/NavBarLt";
import Card from "../components/Card";
import FooterPrimary from "../components/FooterPrimary";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SearchResultView = () => {
  return (
    <View style={styles.searchResultView}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtTop={0}
        navBarLtLeft="50%"
        navBarLtMarginLeft={-187.5}
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
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
                image={require("../assets/image33.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft="unset"
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
              <Card
                image={require("../assets/image3.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft={19.6}
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
            </View>
            <View style={[styles.cardGroup, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image4.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft="unset"
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
              <Card
                image={require("../assets/image5.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft={19.6}
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
            </View>
            <View style={[styles.cardGroup, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image29.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft="unset"
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
              <Card
                image={require("../assets/image30.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft={19.6}
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
            </View>
            <View style={[styles.cardGroup, styles.parentCardFlexBox]}>
              <Card
                image={require("../assets/image34.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft="unset"
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
              <Card
                image={require("../assets/image35.png")}
                cardWidth={162}
                cardHeight={279}
                cardMarginLeft={19.6}
                frameViewHeight="20.01%"
                frameViewWidth="98.76%"
                frameViewTop="79.99%"
                frameViewRight="1.24%"
                frameViewPaddingLeft={4}
                frameViewWidth1={156}
                loremWidth={45}
                loremHeight={15}
                loremFontSize={14}
                loremIpsumColor="#555"
                loremIpsumWidth={154}
                loremIpsumHeight={14}
                loremIpsumFontSize={12}
                textMarginTop={3.9}
                textFontSize={14}
                imageIconHeight="77.19%"
                imageIconBottom="22.81%"
              />
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
        twitter={require("../assets/twitter.png")}
        youTube={require("../assets/youtube.png")}
        softStar={require("../assets/soft-star.png")}
        softStar1={require("../assets/soft-star.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft={-187.5}
        footerPrimaryBottom={0}
        footerPrimaryLeft="50%"
        footerPrimaryTop="unset"
        footerPrimaryMarginTop="unset"
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
    fontFamily: FontFamily.bodyS,
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
    fontSize: FontSize.bodyM_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
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
    borderColor: Color.grayScalePlacehoder,
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
    color: Color.grayScaleLabel,
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
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
    fontSize: FontSize.bodyM_size,
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
  },
  new: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    color: Color.greyMLabel,
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
    borderRadius: Border.br_14xl,
    backgroundColor: Color.colorGray_400,
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
    backgroundColor: Color.inputPurple,
  },
  text1: {
    color: Color.greyMLabel,
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
