import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const TransferMoneyCard = ({
  bgColor,
  bgIconColor,
  iconUrl,
  title,
  handleNavigate,
}) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: SIZES.medium * 1.5,
        paddingHorizontal: SIZES.padding,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: bgColor,
        borderRadius: SIZES.font,
        margin: SIZES.base,
      }}
      onPress={handleNavigate}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: SIZES.base,
          backgroundColor: bgIconColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={iconUrl}
          style={{ width: "50%", height: "50%", tintColor: COLORS.white }}
        />
      </View>
      <View>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.black,
            fontFamily: "Rubik-Light",
          }}
        >
          Transfer your Money
        </Text>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.black,
            fontFamily: "Rubik-ExtraBold",
            marginTop: 2,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransferMoneyCard;
