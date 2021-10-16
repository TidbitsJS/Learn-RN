import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import LineDivider from "../utils/LineDivider";

const SectionButton = ({ iconUrl, textName }) => {
  return (
    <TouchableOpacity onPress={() => console.log(textName)}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={iconUrl}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            ...FONTS.body4,
            color: COLORS.white,
          }}
        >
          {textName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeButtonSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.radius * 1.25,
        margin: SIZES.font,
        padding: SIZES.base,
        paddingHorizontal: SIZES.font,
      }}
    >
      <SectionButton iconUrl={icons.claim_icon} textName="Claim" />

      <LineDivider color={COLORS.lightGray} />

      <SectionButton iconUrl={icons.point_icon} textName="Get Point" />

      <LineDivider color={COLORS.lightGray} />

      <SectionButton iconUrl={icons.card_icon} textName="My Card" />
    </View>
  );
};

export default HomeButtonSection;
