import React, { memo } from "react";
import { Image, StyleSheet, View } from "react-native";

const FashionShop = memo(() => {
  return (
    <View style={styles.fashionShop}>
      <View style={[styles.freepikBackgroundComplete, styles.groupPosition]}>
        <View style={[styles.group, styles.groupPosition]}>
          <View style={[styles.group1, styles.groupPosition]}>
            <Image
              style={[styles.groupIcon, styles.groupIconLayout1]}
              resizeMode="cover"
              source={require("../assets/group.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconPosition1]}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconLayout1]}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
        <Image
          style={[styles.groupIcon1, styles.groupIconLayout1]}
          resizeMode="cover"
          source={require("../assets/group1.png")}
        />
        <Image
          style={[styles.groupIcon2, styles.groupIconLayout1]}
          resizeMode="cover"
          source={require("../assets/group2.png")}
        />
        <Image
          style={[styles.groupIcon3, styles.groupIconLayout1]}
          resizeMode="cover"
          source={require("../assets/group3.png")}
        />
        <Image
          style={[styles.groupIcon4, styles.groupIconLayout1]}
          resizeMode="cover"
          source={require("../assets/group4.png")}
        />
        <Image
          style={[styles.vectorIcon7, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector7.png")}
        />
        <Image
          style={[styles.vectorIcon8, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector8.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon9, styles.groupIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.groupIcon5, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group5.png")}
      />
      <Image
        style={[styles.groupIcon6, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group6.png")}
      />
      <Image
        style={[styles.groupIcon7, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group7.png")}
      />
      <Image
        style={[styles.groupIcon8, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group8.png")}
      />
      <Image
        style={[styles.freepikClothesInject4Icon, styles.groupIconLayout1]}
        resizeMode="cover"
        source={require("../assets/freepikclothesinject4.png")}
      />
      <Image
        style={[styles.groupIcon9, styles.groupIconLayout1]}
        resizeMode="cover"
        source={require("../assets/group9.png")}
      />
      <Image
        style={[styles.groupIcon10, styles.groupIconPosition]}
        resizeMode="cover"
        source={require("../assets/group10.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  groupPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  groupIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    bottom: "-0.05%",
    top: "99.95%",
  },
  vectorIconLayout1: {
    height: "0.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "3.33%",
    top: "96.57%",
    height: "0.09%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    bottom: "66.37%",
    top: "31.96%",
    width: "1.2%",
    height: "1.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    width: "23.73%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconPosition: {
    bottom: "10.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "81.76%",
    width: "80.17%",
    right: "10.07%",
    bottom: "18.24%",
    left: "9.77%",
    top: "0%",
  },
  vectorIcon: {
    height: "0.1%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  group1: {
    height: "93.47%",
    bottom: "6.53%",
    top: "0%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  vectorIcon1: {
    width: "3.2%",
    top: "97.36%",
    right: "86.47%",
    bottom: "2.55%",
    left: "10.33%",
  },
  vectorIcon2: {
    width: "10.7%",
    top: "96.62%",
    right: "55.23%",
    bottom: "3.29%",
    left: "34.07%",
  },
  vectorIcon3: {
    width: "7.27%",
    right: "79%",
    left: "13.73%",
    bottom: "-0.05%",
    top: "99.95%",
  },
  vectorIcon4: {
    width: "8.63%",
    right: "15.7%",
    left: "75.67%",
  },
  vectorIcon5: {
    width: "1.27%",
    right: "12.63%",
    left: "86.1%",
  },
  vectorIcon6: {
    width: "10.77%",
    top: "98.33%",
    right: "26%",
    bottom: "1.57%",
    left: "63.23%",
  },
  group: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  groupIcon1: {
    height: "27.88%",
    width: "11.6%",
    top: "65.45%",
    right: "79.8%",
    bottom: "6.67%",
    left: "8.6%",
  },
  groupIcon2: {
    height: "45.11%",
    width: "19.23%",
    top: "36.31%",
    right: "7.97%",
    bottom: "18.57%",
    left: "72.8%",
  },
  groupIcon3: {
    height: "25.98%",
    width: "14.67%",
    top: "13.29%",
    right: "50.3%",
    bottom: "60.72%",
    left: "35.03%",
  },
  groupIcon4: {
    height: "25.43%",
    width: "14.37%",
    top: "5.33%",
    right: "32.07%",
    bottom: "69.25%",
    left: "53.57%",
  },
  vectorIcon7: {
    right: "73.03%",
    left: "25.77%",
  },
  vectorIcon8: {
    right: "87.3%",
    left: "11.5%",
  },
  freepikBackgroundComplete: {
    height: "71.97%",
    top: "9.03%",
    bottom: "19%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  vectorIcon9: {
    height: "2.47%",
    width: "87.5%",
    top: "88.47%",
    right: "6.23%",
    bottom: "9.07%",
    left: "6.27%",
  },
  groupIcon5: {
    height: "11.4%",
    top: "18.2%",
    right: "5.73%",
    bottom: "70.4%",
    left: "70.53%",
  },
  groupIcon6: {
    height: "10.47%",
    top: "17.8%",
    right: "68.83%",
    bottom: "71.73%",
    left: "7.43%",
  },
  groupIcon7: {
    height: "10.8%",
    width: "18.97%",
    top: "78.53%",
    right: "74.3%",
    left: "6.73%",
  },
  groupIcon8: {
    height: "56.27%",
    width: "13.43%",
    top: "33.07%",
    right: "8.73%",
    left: "77.83%",
  },
  freepikClothesInject4Icon: {
    height: "35.13%",
    width: "28.03%",
    top: "31.93%",
    right: "65.83%",
    bottom: "32.93%",
    left: "6.13%",
  },
  groupIcon9: {
    height: "58.07%",
    width: "28.37%",
    top: "31.17%",
    right: "26.67%",
    bottom: "10.77%",
    left: "44.97%",
  },
  groupIcon10: {
    height: "43.6%",
    width: "45.93%",
    top: "45.73%",
    right: "24.1%",
    left: "29.97%",
  },
  fashionShop: {
    width: 300,
    height: 300,
    overflow: "hidden",
  },
});

export default FashionShop;
