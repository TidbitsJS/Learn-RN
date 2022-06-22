import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants";

const IconButton = ({ iconUrl }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, backgroundColor: COLORS.white }}
      activeOpacity={0.95}
    >
      <View
        style={{
          padding: SIZES.font,
          backgroundColor: COLORS.white,
          shadowColor: COLORS.black,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          margin: SIZES.base,
          borderRadius: SIZES.base,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
