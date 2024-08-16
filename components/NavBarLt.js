import React, { useMemo, memo } from "react";
import Logo from "./Logo";
import { Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavBarLt = memo(
  ({
    navBarLtPosition,
    navBarLtTop,
    navBarLtLeft,
    navBarLtMarginLeft,
    logoHeight,
    urbanCultureFontSize,
    urbanCultureColor,
  }) => {
    const navBarLtStyle = useMemo(() => {
      return {
        ...getStyleValue("position", navBarLtPosition),
        ...getStyleValue("top", navBarLtTop),
        ...getStyleValue("left", navBarLtLeft),
        ...getStyleValue("marginLeft", navBarLtMarginLeft),
      };
    }, [navBarLtPosition, navBarLtTop, navBarLtLeft, navBarLtMarginLeft]);

    return (
      <View style={[styles.navbarLt, navBarLtStyle]}>
        <View style={[styles.navItems, styles.navItemsFlexBox]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/menu.png")}
          />
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
                source={require("../assets/search.png")}
              />
              <Image
                style={[styles.shoppingBagIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/shopping-bag.png")}
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
  navbarLt: {
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 57,
    overflow: "hidden",
  },
});

export default NavBarLt;
