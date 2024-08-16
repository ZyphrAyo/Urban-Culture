import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Button3 from "../components/Button3";
import NavBarLt from "../components/NavBarLt";
import FrameComponent5 from "../components/FrameComponent5";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AddNewAddress = () => {
  return (
    <View style={styles.addNewAddress}>
      <Button3
        text="Add now"
        iconPlaceholders={require("../assets/plus1.png")}
        showIcon
        buttonPosition="absolute"
        buttonBorderStyle="unset"
        buttonBorderColor="unset"
        buttonMarginLeft={-187.5}
        buttonBottom={0}
        buttonLeft="50%"
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
      <NavBarLt
        navBarLtPosition="absolute"
        navBarLtTop={0}
        navBarLtLeft={0}
        navBarLtMarginLeft="unset"
        logoHeight="38"
        urbanCultureFontSize={22}
        urbanCultureColor="#262626"
      />
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.addShippingAddressWrapper}>
            <Text style={styles.addShippingAddress}>Add shipping address</Text>
          </View>
          <Image
            style={styles.starIcon}
            resizeMode="cover"
            source={require("../assets/star6.png")}
          />
        </View>
        <FrameComponent5 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addShippingAddress: {
    fontSize: FontSize.subTitleL_size,
    letterSpacing: 4,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "300",
    fontFamily: FontFamily.subTitleL,
    color: Color.blackTitleActive,
    textAlign: "left",
  },
  addShippingAddressWrapper: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 125,
    height: 18,
    marginTop: 15,
  },
  frameGroup: {
    width: 284,
    alignItems: "center",
  },
  frameParent: {
    position: "absolute",
    marginTop: -295.5,
    marginLeft: -171.5,
    top: "50%",
    left: "50%",
    width: 343,
    alignItems: "center",
  },
  addNewAddress: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 797,
    overflow: "hidden",
  },
});

export default AddNewAddress;
