import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import NavBarLt from "../components/NavBarLt";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent13 from "../components/FrameComponent13";
import Button3 from "../components/Button3";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AddNewCard = () => {
  return (
    <View style={styles.addNewCard}>
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtTop={0}
        navBarLtLeft={0}
        navBarLtMarginLeft="unset"
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
      />
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={[styles.frameGroup, styles.framePosition]}>
          <View style={styles.frameContainer}>
            <View style={styles.paymentMethodParent}>
              <Text style={styles.paymentMethod}>Payment method</Text>
              <Image
                style={styles.starIcon}
                resizeMode="cover"
                source={require("../assets/star12.png")}
              />
            </View>
            <View style={styles.groupView}>
              <FrameComponent1 zYPHRUIX="ZYPHR UIX" />
              <FrameComponent1 zYPHRUIX="Iris Watson" propLeft={662} />
              <FrameComponent1 zYPHRUIX="Iris Watson" propLeft={0} />
            </View>
          </View>
          <FrameComponent13 />
        </View>
        <View style={styles.softStarParent}>
          <Image
            style={styles.softIconLayout}
            resizeMode="cover"
            source={require("../assets/soft-star8.png")}
          />
          <Image
            style={[styles.softStarIcon1, styles.softIconLayout]}
            resizeMode="cover"
            source={require("../assets/soft-star9.png")}
          />
          <Image
            style={[styles.softStarIcon1, styles.softIconLayout]}
            resizeMode="cover"
            source={require("../assets/soft-star9.png")}
          />
        </View>
      </View>
      <Button3
        text="Add card"
        iconPlaceholders={require("../assets/plus.png")}
        showIcon
        buttonPosition="absolute"
        buttonBorderStyle="unset"
        buttonBorderColor="unset"
        buttonMarginLeft="unset"
        buttonBottom={0}
        buttonLeft={0}
        buttonBackgroundColor="#020202"
        buttonWidth={375}
        buttonHeight={56}
        buttonMarginTop="unset"
        buttonPaddingHorizontal="unset"
        buttonPaddingVertical="unset"
        buttonColor="#dec1ff"
        buttonFontSize={16}
        iconPlaceholdersWidth={18}
        iconPlaceholdersHeight={18}
        iconPlaceholdersMarginLeft={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    position: "absolute",
    width: 978,
  },
  softIconLayout: {
    height: 10,
    width: 10,
  },
  paymentMethod: {
    fontSize: FontSize.bodyL_size,
    letterSpacing: 2,
    lineHeight: 20,
    textTransform: "uppercase",
    fontFamily: FontFamily.bodyS,
    color: Color.grayScaleTitleActive,
    textAlign: "center",
    alignSelf: "stretch",
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 6,
  },
  paymentMethodParent: {
    width: 177,
    alignItems: "center",
  },
  groupView: {
    height: 190,
    marginTop: 10,
    width: 978,
  },
  frameContainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameGroup: {
    top: 0,
    left: 0,
    zIndex: 0,
    alignItems: "center",
    width: 978,
  },
  softStarIcon1: {
    marginLeft: 6,
  },
  softStarParent: {
    flexDirection: "row",
    zIndex: 1,
    marginTop: 10,
    alignItems: "center",
  },
  frameParent: {
    top: 94,
    left: -301,
    height: 535,
    paddingHorizontal: 467,
    paddingVertical: 258,
    width: 978,
  },
  addNewCard: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 797,
    overflow: "hidden",
  },
});

export default AddNewCard;
