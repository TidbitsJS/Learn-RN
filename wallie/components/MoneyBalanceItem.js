import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../constants";

const MoneyBalanceItem = ({ item }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: SIZES.padding2,
    }}
  >
    <View style={{ marginRight: SIZES.medium, width: 130 }}>
      <Text style={{ ...FONTS.body4, color: COLORS.primary }} numberOfLines={1}>
        {item.date}
      </Text>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: COLORS.lightGray,
          borderRadius: SIZES.padding2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.icon}
          style={{
            width: item.topUp ? "60%" : "70%",
            height: item.topUp ? "60%" : "70%",
            tintColor: item.topUp && COLORS.primary,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ width: 80 }}>
        <Text style={{ ...FONTS.body4, color: COLORS.gray }} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.black }} numberOfLines={1}>
          {item.amount}
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={icons.forward}
          resizeMode="cover"
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

export default MoneyBalanceItem;
