import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import NavBar from "../components/NavBar";
import FooterPrimary from "../components/FooterPrimary";
import Tags from "../components/Tags";
import Card from "../components/Card";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CategoryGridViewPage = () => {
  return (
    <View style={styles.categoryGridViewPage}>
      <NavBar
        menu={require("../assets/menu.png")}
        search={require("../assets/search.png")}
        shoppingBag={require("../assets/shopping-bag.png")}
        navBarHeight={57}
        navBarBackgroundColor="#fff"
        navBarPosition="absolute"
        navBarTop={0}
        navBarLeft={0}
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
      />
      <FooterPrimary
        twitter={require("../assets/twitter.png")}
        youTube={require("../assets/youtube.png")}
        softStar={require("../assets/soft-star.png")}
        softStar1={require("../assets/soft-star.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft={-187.5}
        footerPrimaryBottom="unset"
        footerPrimaryLeft="50%"
        footerPrimaryTop={1184}
        footerPrimaryMarginTop="unset"
      />
      <Tags
        showCloseIcon
        men="Men"
        men1="All Apparel"
        close11={require("../assets/close.png")}
        tagPosition="unset"
        tagPosition1="unset"
        tagWidth="89"
        tagWidth1="117"
        tagHeight="unset"
        tagHeight1="unset"
        tagMarginLeft="unset"
        tagMarginLeft1="8"
      />
      <View style={[styles.filter, styles.cardParentFlexBox]}>
        <Text style={[styles.apparel, styles.newTypo]}>3689 Apparel</Text>
        <View style={[styles.frameParent, styles.cardParentFlexBox]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.newParent, styles.newParentPosition]}>
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
      <View style={[styles.showcase, styles.filterPosition]}>
        <View style={styles.images}>
          <View style={[styles.cardParent, styles.cardParentFlexBox]}>
            <Card
              image={require("../assets/image27.png")}
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
          <View style={[styles.cardGroup, styles.cardParentFlexBox]}>
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
              image={require("../assets/image28.png")}
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
          <View style={[styles.cardGroup, styles.cardParentFlexBox]}>
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
        </View>
      </View>
      <View style={[styles.frameGroup, styles.newParentPosition]}>
        <View style={[styles.frameContainer, styles.cardParentFlexBox]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  cardParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  newTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
  },
  newParentPosition: {
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  filterPosition: {
    left: 16,
    position: "absolute",
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
    left: "50%",
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.bodyS,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    position: "absolute",
  },
  apparel: {
    color: Color.grayScaleBody,
    lineHeight: 24,
    fontSize: FontSize.bodyM_size,
    fontFamily: FontFamily.bodyS,
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
    top: "50%",
    left: "50%",
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
    top: 88,
    alignItems: "center",
    left: 16,
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
    top: 215,
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
    marginLeft: -110.5,
    top: 1113,
  },
  categoryGridViewPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1516,
    overflow: "hidden",
  },
});

export default CategoryGridViewPage;
