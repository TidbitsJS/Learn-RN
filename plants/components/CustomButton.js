import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const CustomButton = ({ title, onHandleClick }) => {
  return (
    <TouchableOpacity
      style={{ width: "100%" }}
      activeOpacity={0.95}
      onPress={() => onHandleClick()}
    >
      <View
        style={{
          height: 45,
          marginTop: SIZES.padding + 5,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          shadowColor: COLORS.primary,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.3,
          shadowRadius: 1.41,
          elevation: 3,
        }}
      >
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
