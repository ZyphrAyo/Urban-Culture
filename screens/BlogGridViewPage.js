import * as React from "react";
import { StyleSheet, View } from "react-native";
import NavBar from "../components/NavBar";
import FrameComponent4 from "../components/FrameComponent4";
import CardBlog from "../components/CardBlog";
import Button3 from "../components/Button3";
import FooterPrimary from "../components/FooterPrimary";
import { Color } from "../GlobalStyles";

const BlogGridViewPage = () => {
  return (
    <View style={[styles.blogGridViewPage, styles.frameFlexBox]}>
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
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.frameParent}>
          <FrameComponent4 />
          <View style={styles.cardBlogParent}>
            <CardBlog
              daysAgo="2 days ago"
              cardBlogWidth="unset"
              cardBlogAlignSelf="stretch"
              cardBlogMarginTop="unset"
              men="#Fashion"
              men1="#Tips"
              close1={require("../assets/close1.png")}
              close11={require("../assets/close.png")}
              showCloseIcon={false}
              showCloseIcon={false}
              tagPosition="unset"
              tagPosition1="unset"
              tagWidth="69"
              tagWidth1="69"
              tagHeight="26"
              tagHeight1="26"
              tagMarginLeft="unset"
              tagMarginLeft1="6"
            />
            <CardBlog
              daysAgo="4 days ago"
              cardBlogWidth="unset"
              cardBlogAlignSelf="stretch"
              cardBlogMarginTop={26}
              men="#Fashion"
              men1="#Tips"
              close1={require("../assets/close1.png")}
              close11={require("../assets/close.png")}
              showCloseIcon={false}
              showCloseIcon={false}
              tagPosition="unset"
              tagPosition1="unset"
              tagWidth="69"
              tagWidth1="69"
              tagHeight="26"
              tagHeight1="26"
              tagMarginLeft="unset"
              tagMarginLeft1="6"
            />
            <CardBlog
              daysAgo="7 days ago"
              cardBlogWidth="unset"
              cardBlogAlignSelf="stretch"
              cardBlogMarginTop={26}
              men="#Fashion"
              men1="#Tips"
              close1={require("../assets/close1.png")}
              close11={require("../assets/close.png")}
              showCloseIcon={false}
              showCloseIcon={false}
              tagPosition="unset"
              tagPosition1="unset"
              tagWidth="69"
              tagWidth1="69"
              tagHeight="26"
              tagHeight1="26"
              tagMarginLeft="unset"
              tagMarginLeft1="6"
            />
            <CardBlog
              daysAgo="10 days ago"
              cardBlogWidth="unset"
              cardBlogAlignSelf="stretch"
              cardBlogMarginTop={26}
              men="#Fashion"
              men1="#Tips"
              close1={require("../assets/close1.png")}
              close11={require("../assets/close.png")}
              showCloseIcon={false}
              showCloseIcon={false}
              tagPosition="unset"
              tagPosition1="unset"
              tagWidth="69"
              tagWidth1="69"
              tagHeight="26"
              tagHeight1="26"
              tagMarginLeft="unset"
              tagMarginLeft1="6"
            />
          </View>
          <Button3
            text="Load More"
            iconPlaceholders={require("../assets/plus.png")}
            showIcon
            buttonPosition="unset"
            buttonBorderStyle="solid"
            buttonBorderColor="#89608e"
            buttonBorderWidth={1}
            buttonMarginLeft="unset"
            buttonBottom="unset"
            buttonLeft="unset"
            buttonBackgroundColor="unset"
            buttonWidth={171}
            buttonHeight={36}
            buttonMarginTop={41}
            buttonPaddingHorizontal="unset"
            buttonPaddingVertical="unset"
            buttonColor="#4f4f4f"
            buttonFontSize={16}
            iconPlaceholdersWidth={18}
            iconPlaceholdersHeight={18}
            iconPlaceholdersMarginLeft={10}
          />
        </View>
        <FooterPrimary
          twitter={require("../assets/twitter.png")}
          youTube={require("../assets/youtube.png")}
          softStar={require("../assets/soft-star2.png")}
          softStar1={require("../assets/soft-star2.png")}
          footerPrimaryPosition="relative"
          footerPrimaryMarginLeft="unset"
          footerPrimaryBottom="unset"
          footerPrimaryLeft="unset"
          footerPrimaryTop="unset"
          footerPrimaryMarginTop={36}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    overflow: "hidden",
    alignItems: "center",
  },
  cardBlogParent: {
    width: 343,
    marginTop: 41,
  },
  frameParent: {
    width: 359,
    alignItems: "center",
  },
  frame: {
    width: 375,
    height: 1593,
    marginTop: 44,
    alignItems: "center",
  },
  blogGridViewPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1693,
    alignItems: "center",
  },
});

export default BlogGridViewPage;
