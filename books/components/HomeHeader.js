import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HomeHeader = ({ profile }) => {
  return (
    <View
      style={{
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column", paddingRight: SIZES.base }}>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>
            Good Morning
          </Text>
          <Text style={{ ...FONTS.h2, color: COLORS.white }} numberOfLines={1}>
            {profile.name}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
          onPress={() => {
            console.log("Point");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.primary,
              padding: SIZES.base,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                padding: 5,
                backgroundColor: "rgba(0,0,0,0.5)",
              }}
            >
              <Image
                source={icons.plus_icon}
                resizeMode="contain"
                style={{
                  width: 10,
                  height: 10,
                }}
              />
            </View>

            <Text
              style={{
                marginHorizontal: SIZES.base,
                color: COLORS.white,
                textAlign: "center",
                ...FONTS.body5,
              }}
            >
              {profile.point} point
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
