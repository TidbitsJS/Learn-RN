import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { SIZES, FONTS, COLORS, SHADOW, icons } from "../constants";

const LogWithButton = ({ title, iconUrl }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        marginVertical: SIZES.base,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.font,
        paddingHorizontal: SIZES.padding,
        borderRadius: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        ...SHADOW.darkShadow,
      }}
    >
      <Image
        source={iconUrl}
        style={{ width: 25, height: 25 }}
        resizeMode="cover"
      />
      <Text
        style={{
          flex: 1,
          marginLeft: SIZES.base,
          ...FONTS.h4,
          color: COLORS.black,
        }}
      >
        {title}
      </Text>
      <Image
        source={icons.arrowRight}
        style={{ width: 15, height: 15 }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default LogWithButton;
