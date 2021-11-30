import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, SIZES } from "../../constants";

const TransactionProfileItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.medium,
        margin: SIZES.base,
        borderRadius: SIZES.medium,
        backgroundColor: item.bgColor,
        minHeight: 210,
        maxWidth: "46%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.padding,
        }}
      >
        <Image
          source={item.imgUrl}
          style={{ width: 50, height: 50, borderRadius: SIZES.base }}
          resizeMode="cover"
        />
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.black,
            fontFamily: "Rubik-Light",
            marginTop: 5,
            textAlign: "center",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            ...FONTS.h4,
            fontFamily: "Rubik-ExtraBold",
            color: COLORS.black,
            textAlign: "center",
          }}
        >
          {item.transferId}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: COLORS.white,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.base,
          borderRadius: SIZES.padding,
          justifyContent: "center",
          alignItems: "center",
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            ...FONTS.h4,
            lineHeight: 18,
            textAlign: "center",
            color: item.textColor,
          }}
        >
          {item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionProfileItem;
