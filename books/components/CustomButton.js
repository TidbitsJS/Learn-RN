import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { SIZES, SHADOW, FONTS } from "../constants";

const CustomButton = ({ title, bgColor, color, onHandlePress, ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onHandlePress()}
      style={{
        flex: 1,
        backgroundColor: bgColor,
        padding: SIZES.font,
        borderRadius: SIZES.padding,
        ...SHADOW.lightShadow,
        ...props,
      }}
    >
      <Text
        style={{
          ...FONTS.h3,
          color: color,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
