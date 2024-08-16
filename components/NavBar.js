import React, { useMemo, memo } from "react";
import { ImageSourcePropType } from "react-native";
import Logo from "./Logo";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavBar = memo(
  ({
    menu,
    search,
    shoppingBag,
    navBarHeight,
    navBarBackgroundColor,
    navBarPosition,
    navBarTop,
    navBarLeft,
    logoHeight,
    urbanCultureFontSize,
    urbanCultureColor,
  }) => {
    const navBarStyle = useMemo(() => {
      return {
        ...getStyleValue("height", navBarHeight),
        ...getStyleValue("backgroundColor", navBarBackgroundColor),
        ...getStyleValue("position", navBarPosition),
        ...getStyleValue("top", navBarTop),
        ...getStyleValue("left", navBarLeft),
      };
    }, [
      navBarHeight,
      navBarBackgroundColor,
      navBarPosition,
      navBarTop,
      navBarLeft,
    ]);

    return (
      <View style={[styles.navbar, navBarStyle]}>
        <View style={[styles.navItems, styles.navItemsFlexBox]}>
          <Image style={styles.iconLayout} resizeMode="cover" source={menu} />
          <View style={[styles.logoCartSearch, styles.navItemsFlexBox]}>
            <Logo
              logoHeight={logoHeight}
              urbanCultureFontSize={urbanCultureFontSize}
              urbanCultureColor={urbanCultureColor}
            />
            <View style={styles.navItemsFlexBox}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={search}
              />
              <Image
                style={[styles.shoppingBagIcon, styles.iconLayout]}
                resizeMode="cover"
                source={shoppingBag}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  navItemsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  shoppingBagIcon: {
    marginLeft: 16,
  },
  logoCartSearch: {
    height: 59,
    marginLeft: 100,
  },
  navItems: {
    position: "absolute",
    top: 10,
    left: 11,
    width: 341,
    height: 42,
  },
  navbar: {
    backgroundColor: Color.primary,
    width: 375,
    height: 60,
    overflow: "hidden",
  },
});

export default NavBar;
