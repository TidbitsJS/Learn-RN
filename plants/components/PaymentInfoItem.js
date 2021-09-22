import React from "react";
import { Text, View } from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";

const PaymentInfoItem = ({ title, subtitle, titleStyle, subtitleStyle }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        marginVertical: SIZES.base,
      }}
    >
      <Text
        style={{
          ...FONTS.body3,
          textAlign: "left",
          color: COLORS.secondary,
          ...titleStyle,
        }}
      >
        {title}
      </Text>
      <Text style={{ ...FONTS.h3, textAlign: "right", ...subtitleStyle }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default PaymentInfoItem;
