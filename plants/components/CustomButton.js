import React from "react";
import { Text, View } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const CustomButton = ({ title }) => {
  return (
    <View
      style={{
        width: "100%",
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
  );
};

export default CustomButton;
