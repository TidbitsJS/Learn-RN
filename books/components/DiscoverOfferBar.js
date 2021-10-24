import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { SIZES, FONTS, COLORS } from "../constants";

const DiscoverOfferBar = ({ imgUrl, title, subtitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",

        marginVertical: SIZES.font,
        height: 70,
        padding: SIZES.font,
        borderRadius: SIZES.radius,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={imgUrl}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />
      <Text style={{ ...FONTS.h3, color: COLORS.white }}>{title}</Text>
      <Text
        style={{
          ...FONTS.body5,
          textTransform: "uppercase",
          color: COLORS.white,
        }}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default DiscoverOfferBar;
