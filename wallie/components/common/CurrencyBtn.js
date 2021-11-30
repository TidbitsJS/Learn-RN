import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../../constants";

const CurrencyBtn = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.35}
      style={{
        backgroundColor: COLORS.purple,
        paddingHorizontal: SIZES.padding2,
        paddingVertical: 5,
        borderRadius: SIZES.font * 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={icons.down}
        style={{
          width: 10,
          height: 10,
          tintColor: COLORS.white,
          marginRight: SIZES.base,
        }}
        resizeMode="cover"
      />
      <Text style={{ ...FONTS.body5, color: COLORS.white }}>USD</Text>
    </TouchableOpacity>
  );
};

export default CurrencyBtn;
