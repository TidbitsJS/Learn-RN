import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HomeHeader = ({ currentLocation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SIZES.font,
        paddingHorizontal: SIZES.font,
        height: "auto",
        paddingBottom: SIZES.padding * 2,
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "70%",
            paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.font,
            backgroundColor: COLORS.lightGray3,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius,
          }}
        >
          <Text style={{ ...FONTS.body4 }} numberOfLines={1}>
            {currentLocation.streetName}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
        }}
      >
        <Image
          source={icons.basket}
          resizeMode="contain"
          style={{
            width: 23,
            height: 23,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
