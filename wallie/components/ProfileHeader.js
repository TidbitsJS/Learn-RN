import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, FONTS, SHADOW, images, icons } from "../constants";

const ProfileHeader = () => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.lime,
          marginBottom: SIZES.font,
          fontFamily: "MSans-ExtraBold",
        }}
      >
        Account
      </Text>

      <View style={{ marginVertical: SIZES.padding * 2 }}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font,
            minHeight: 150,
            borderRadius: SIZES.font,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginHorizontal: SIZES.base }}>
            <Image
              source={images.holmes}
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
              }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
              }}
            >
              Sherlock Holmes
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: "MSans-ExtraBold",
                color: COLORS.white,
                marginTop: 3,
              }}
            >
              +1 898 860 110
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            elevation: 5,
          }}
        >
          <Image
            source={icons.dots}
            style={{ width: 25, height: 25, tintColor: COLORS.white }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;
