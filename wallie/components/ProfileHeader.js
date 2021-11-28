import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { SIZES, COLORS, FONTS, images, icons } from "../constants";

const ProfileHeader = () => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.lime,
          marginBottom: SIZES.font,
        }}
      >
        Account
      </Text>

      <View style={{ marginVertical: SIZES.padding * 2 }}>
        <View
          style={{
            padding: SIZES.font,
            height: 150,
            borderRadius: SIZES.font,
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <ImageBackground
            source={images.banner}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />
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
                fontFamily: "Rubik-ExtraBold",
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
