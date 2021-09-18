import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTS, SIZES, COLORS } from "../constants";

const ProfileOptionItem = ({ iconUrl, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.45}>
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
