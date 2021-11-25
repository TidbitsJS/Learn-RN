import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#24C16B", // green
  secondary: "#0C381F", // dark green

  green: "#66D59A",
  lightGreen: "#E6FEF0",

  lime: "#00BA63",
  emerald: "#2BC978",

  red: "#FF4134",
  lightRed: "#FFF1F0",

  purple: "#6B3CE9",
  lightpurple: "#F3EFFF",

  yellow: "#FFC664",
  lightyellow: "#FFF9EC",

  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#faf9fe",
  gray: "#C1C3C5",
  darkgray: "#C3C6C7",
  darkgray2: "#808080",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  medium: 16,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 22,
  body3: 18,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "MSans-ExtraBold",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "MSans-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "MSans-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "MSans-Bold", fontSize: SIZES.h3, lineHeight: 26 },
  h4: { fontFamily: "MSans-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "MSans-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "MSans-Regular",
    fontSize: SIZES.body2,
    lineHeight: 32,
  },
  body3: {
    fontFamily: "MSans-Regular",
    fontSize: SIZES.body3,
    lineHeight: 26,
  },
  body4: {
    fontFamily: "MSans-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "MSans-Regular",
    fontSize: SIZES.body5,
    lineHeight: 18,
  },
};

export const SHADOW = {
  darkShadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  mediumShadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  lightShadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
};

const appTheme = { COLORS, SIZES, FONTS, SHADOW };

export default appTheme;
