import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import NavBar from "../components/NavBar";
import FooterPrimary from "../components/FooterPrimary";
import Tags from "../components/Tags";
import CardCategory from "../components/CardCategory";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CategoryGridViewFull = () => {
  return (
    <View style={styles.categoryGridViewFull}>
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
        footerPrimaryTop={3001}
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
      <View style={[styles.filter, styles.frameFlexBox]}>
        <Text style={styles.apparel}>3689 Apparel</Text>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={[styles.rectangleParent, styles.frameChildLayout]}>
            <View style={[styles.frameChild, styles.frameChildLayout]} />
            <View style={[styles.newParent, styles.newParentPosition]}>
              <Text style={styles.new}>New</Text>
              <Image
                style={styles.downIcon}
                resizeMode="cover"
                source={require("../assets/down.png")}
              />
            </View>
          </View>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-33703.png")}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-33706.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.newParentPosition]}>
        <View style={styles.frameFlexBox}>
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
          style={[styles.forwardIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/forward.png")}
        />
      </View>
      <View style={styles.frameParent1}>
        <View style={styles.cardLayout}>
          <CardCategory
            image={require("../assets/image.png")}
            cardCategoryPosition="absolute"
            cardCategoryTop={0}
            cardCategoryLeft={0}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.cardCategoryGroup, styles.cardLayout]}>
          <CardCategory
            image={require("../assets/image.png")}
            cardCategoryPosition="absolute"
            cardCategoryTop={0}
            cardCategoryLeft={0}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.cardCategoryGroup, styles.cardLayout]}>
          <CardCategory
            image={require("../assets/image1.png")}
            cardCategoryPosition="absolute"
            cardCategoryTop={0}
            cardCategoryLeft={0}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.cardCategoryGroup, styles.cardLayout]}>
          <CardCategory
            image={require("../assets/image1.png")}
            cardCategoryPosition="absolute"
            cardCategoryTop={0}
            cardCategoryLeft={0}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </View>
        <View style={[styles.cardCategoryGroup, styles.cardLayout]}>
          <CardCategory
            image={require("../assets/image1.png")}
            cardCategoryPosition="absolute"
            cardCategoryTop={0}
            cardCategoryLeft={0}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChildLayout: {
    width: 73,
    height: 36,
  },
  newParentPosition: {
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
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
    lineHeight: 24,
    marginLeft: -6,
    marginTop: -10.5,
    fontFamily: FontFamily.bodyS,
    left: "50%",
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.bodyM_size,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  cardLayout: {
    height: 522,
    width: 342,
  },
  apparel: {
    lineHeight: 15,
    textTransform: "uppercase",
    fontFamily: FontFamily.price,
    color: Color.grayScaleBody,
    textAlign: "center",
    fontSize: FontSize.bodyM_size,
  },
  frameChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_14xl,
    backgroundColor: Color.blackMBody,
    opacity: 0.1,
    height: 36,
    position: "absolute",
  },
  new: {
    fontSize: FontSize.bodyS_size,
    lineHeight: 18,
    color: Color.greyMLabel,
    fontFamily: FontFamily.bodyS,
    textAlign: "center",
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
  rectangleParent: {
    height: 36,
    overflow: "hidden",
  },
  frameItem: {
    width: 36,
    marginLeft: 4,
    height: 36,
  },
  frameParent: {
    marginLeft: 87,
  },
  filter: {
    top: 88,
    left: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
  forwardIcon: {
    marginLeft: 7,
  },
  frameGroup: {
    marginLeft: -110.5,
    top: 2940,
  },
  heartIcon: {
    top: 413,
    left: 293,
    position: "absolute",
  },
  cardCategoryGroup: {
    marginTop: 29,
  },
  frameParent1: {
    top: 194,
    width: 342,
    left: 16,
    position: "absolute",
  },
  categoryGridViewFull: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 3333,
    overflow: "hidden",
  },
});

export default CategoryGridViewFull;
