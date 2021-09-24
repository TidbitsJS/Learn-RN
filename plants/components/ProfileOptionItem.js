import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

const ProfileOptionItem = ({ iconUrl, title, navigate }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.45}
      onPress={() => (navigate ? navigate() : {})}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: SIZES.padding,
          borderRadius: SIZES.font,
          backgroundColor: COLORS.white,
          marginVertical: SIZES.base,
        }}
      >
        <Image
          source={iconUrl}
          resizeMode="contain"
          style={{ width: 25, height: 25, marginRight: SIZES.font }}
        />
        <Text
          style={{
            ...FONTS.body3,
            textTransform: "capitalize",
            color: COLORS.blackShed,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileOptionItem;
