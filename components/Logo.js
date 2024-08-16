import React, { useMemo, memo } from "react";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Logo = memo(({ logoHeight, urbanCultureFontSize, urbanCultureColor }) => {
  const logoStyle = useMemo(() => {
    return {
      ...getStyleValue("height", logoHeight),
    };
  }, [logoHeight]);

  const urbanCultureStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", urbanCultureFontSize),
      ...getStyleValue("color", urbanCultureColor),
    };
  }, [urbanCultureFontSize, urbanCultureColor]);

  return (
    <View style={[styles.logo, logoStyle]}>
      <Text style={[styles.urbanCulture, urbanCultureStyle]}>
        U
        <Text style={styles.rban}>{`rban
`}</Text>
        C<Text style={styles.rban}>ulture</Text>
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  rban: {
    letterSpacing: -1,
  },
  urbanCulture: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_21xl,
    lineHeight: 16,
    textTransform: "capitalize",
    fontFamily: FontFamily.stokeRegular,
    color: Color.blackMBody,
    textAlign: "left",
  },
  logo: {
    width: 165,
    height: 59,
  },
});

export default Logo;
