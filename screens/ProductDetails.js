import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import NavBarLt from "../components/NavBarLt";
import FrameComponent11 from "../components/FrameComponent11";
import ColorSizeChart from "../components/ColorSizeChart";
import Button2 from "../components/Button2";
import ProductDetail from "../components/ProductDetail";
import FooterPrimary from "../components/FooterPrimary";
import { Color } from "../GlobalStyles";

const ProductDetails = () => {
  return (
    <View style={styles.productDetails}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtTop={0}
        navBarLtLeft={0}
        navBarLtMarginLeft="unset"
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
      />
      <FrameComponent11 />
      <ColorSizeChart
        colorSizeChartPosition="absolute"
        colorSizeChartTop={568}
        colorSizeChartLeft={16}
        sizeChartMarginLeft={94}
        ellipse36={require("../assets/ellipse-36.png")}
        ellipse361={require("../assets/ellipse-361.png")}
        ellipse362={require("../assets/ellipse-361.png")}
        ellipse363={require("../assets/ellipse-362.png")}
        ellipse364={require("../assets/ellipse-363.png")}
        ellipse365={require("../assets/ellipse-364.png")}
        ellipse366={require("../assets/ellipse-365.png")}
        ellipse367={require("../assets/ellipse-36.png")}
        ellipse368={require("../assets/ellipse-36.png")}
        groupViewMarginLeft="6"
        groupViewMarginLeft1="6"
        groupViewMarginLeft2="6"
        groupViewMarginLeft3="-20.5"
        groupViewMarginLeft4="9.5"
        groupViewMarginLeft5="39.5"
        groupViewMarginLeft6="6"
        groupViewMarginLeft7="6"
        groupViewMarginLeft8="6"
        groupViewPosition="relative"
        groupViewPosition1="relative"
        groupViewPosition2="relative"
        groupViewPosition3="absolute"
        groupViewPosition4="absolute"
        groupViewPosition5="absolute"
        groupViewPosition6="relative"
        groupViewPosition7="relative"
        groupViewPosition8="relative"
        groupViewWidth="24"
        groupViewWidth1="24"
        groupViewWidth2="24"
        groupViewWidth3="18"
        groupViewWidth4="18"
        groupViewWidth5="18"
        groupViewWidth6="24"
        groupViewWidth7="24"
        groupViewWidth8="24"
        groupViewHeight="24"
        groupViewHeight1="24"
        groupViewHeight2="24"
        groupViewHeight3="18"
        groupViewHeight4="18"
        groupViewHeight5="18"
        groupViewHeight6="24"
        groupViewHeight7="24"
        groupViewHeight8="24"
        groupViewMarginTop="unset"
        groupViewMarginTop1="unset"
        groupViewMarginTop2="unset"
        groupViewMarginTop3="-9.2"
        groupViewMarginTop4="-9.2"
        groupViewMarginTop5="-9.2"
        groupViewMarginTop6="unset"
        groupViewMarginTop7="unset"
        groupViewMarginTop8="unset"
        groupViewTop="unset"
        groupViewTop1="unset"
        groupViewTop2="unset"
        groupViewTop3="50%"
        groupViewTop4="50%"
        groupViewTop5="50%"
        groupViewTop6="unset"
        groupViewTop7="unset"
        groupViewTop8="unset"
        groupViewLeft="unset"
        groupViewLeft1="unset"
        groupViewLeft2="unset"
        groupViewLeft3="50%"
        groupViewLeft4="50%"
        groupViewLeft5="50%"
        groupViewLeft6="unset"
        groupViewLeft7="unset"
        groupViewLeft8="unset"
        sLeft="47.92%"
        sLeft1="47.92%"
        sLeft2="47.92%"
        sLeft3="46.67%"
        sLeft4="46.67%"
        sLeft5="46.67%"
        sLeft6="47.92%"
        sLeft7="47.92%"
        sLeft8="47.92%"
        sFontSize={12}
        sFontSize1={12}
        sFontSize2={12}
        sFontSize3={12}
        sFontSize4={12}
        sFontSize5={12}
        sFontSize6={12}
        sFontSize7={12}
        sFontSize8={12}
        sFontFamily="Taviraj-Regular"
        sFontFamily1="Taviraj-Regular"
        sFontFamily2="Taviraj-Regular"
        sFontFamily3="Taviraj-Regular"
        sFontFamily4="Taviraj-Regular"
        sFontFamily5="Taviraj-Regular"
        sFontFamily6="Taviraj-Regular"
        sFontFamily7="Taviraj-Regular"
        sFontFamily8="Taviraj-Regular"
        sTop="25.83%"
        sTop1="25.83%"
        sTop2="25.83%"
        sTop3="25.56%"
        sTop4="25.56%"
        sTop5="25.56%"
        sTop6="25.83%"
        sTop7="25.83%"
        sTop8="25.83%"
      />
      <Image
        style={styles.exportIcon}
        resizeMode="cover"
        source={require("../assets/export.png")}
      />
      <Button2
        iconPlaceholders={require("../assets/plus7.png")}
        text="Add To Basket"
        iconPlaceholders1={require("../assets/heart1.png")}
        showIcon
        buttonPosition="absolute"
        buttonTop={712}
        buttonLeft={0}
        buttonBackgroundColor="#020202"
        buttonWidth={375}
        buttonColor="#f9f9f9"
      />
      <ProductDetail />
      <FooterPrimary
        twitter={require("../assets/twitter.png")}
        youTube={require("../assets/youtube.png")}
        softStar={require("../assets/soft-star.png")}
        softStar1={require("../assets/soft-star.png")}
        footerPrimaryPosition="absolute"
        footerPrimaryMarginLeft="unset"
        footerPrimaryBottom="unset"
        footerPrimaryLeft={0}
        footerPrimaryTop={2212}
        footerPrimaryMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  exportIcon: {
    position: "absolute",
    top: 570,
    left: 312,
    width: 18,
    height: 18,
  },
  productDetails: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 2545,
    overflow: "hidden",
  },
});

export default ProductDetails;
