import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const ShopCartItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: SIZES.font,
      }}
    >
      <TouchableOpacity activeOpacity={0.45} style={{ width: 60, height: 80 }}>
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: 2 }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginHorizontal: SIZES.base,
        }}
      >
        <View>
          <Text style={{ ...FONTS.h3, color: COLORS.white }} numberOfLines={1}>
            {item.bookName}
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.lightGray3 }}>
            $56.21
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={{ ...FONTS.body4, color: COLORS.primary }}>remove</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", justifyContent: "space-evenly" }}>
        <TouchableOpacity>
          <Image
            source={icons.minus}
            style={{ width: 23, height: 23 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.white,
            marginVertical: 5,
          }}
        >
          3
        </Text>
        <TouchableOpacity>
          <Image
            source={icons.plus}
            style={{ width: 23, height: 23 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopCartItem;
