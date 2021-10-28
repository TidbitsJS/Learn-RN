import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, images, icons, SIZES, FONTS } from "../constants";

const ProfileHeader = () => {
  return (
    <>
      <View style={{ width: "100%", height: 170 }}>
        <ImageBackground
          source={images.bookbg}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: COLORS.gray,
          margin: SIZES.font,
          marginTop: -25,
          minHeight: 100,
          padding: SIZES.font,
          borderRadius: SIZES.padding,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderWidth: 1.25,
            borderColor: COLORS.primary,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            borderStyle: "dashed",
          }}
        >
          <Image
            source={images.enola}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
            }}
            resizeMode="contain"
          />
        </View>

        <View style={{ marginLeft: SIZES.font, flex: 1 }}>
          <Text style={{ ...FONTS.h3, color: COLORS.white }} numberOfLines={1}>
            Enola Holmes
          </Text>
          <Text
            style={{
              ...FONTS.body5,
              marginTop: 5,
              color: COLORS.white,
            }}
            numberOfLines={1}
          >
            Balance <Text style={{ color: COLORS.primary }}>$7920</Text>
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={icons.menu}
            style={{ width: 25, height: 25, tintColor: COLORS.primary }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileHeader;
