import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const TransferToWay = ({ title, iconUrl, bgColor, tintColor }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: SIZES.base,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: SIZES.padding,
          backgroundColor: bgColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={iconUrl}
          style={{
            width: "50%",
            height: "50%",
            tintColor: tintColor,
          }}
        />
      </View>
      <Text
        style={{ ...FONTS.body4, color: COLORS.black, marginLeft: SIZES.base }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TransferToWay;
