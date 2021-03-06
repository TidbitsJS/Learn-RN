import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const OrderHistoryItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.padding,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.white,
          borderRadius: SIZES.font * 1.1,
        }}
      >
        <Image
          source={item.plantUrl}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.font * 1.1,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginLeft: SIZES.base * 1.25,
        }}
      >
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.blackShed,
            fontFamily: "Roboto-Bold",
          }}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.secondary,
            textTransform: "capitalize",
          }}
        >
          {item.status}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginLeft: SIZES.base,
        }}
      >
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.blackShed,
            fontFamily: "Roboto-Bold",
            textAlign: "right",
          }}
          numberOfLines={1}
        >
          ${item.amount}
        </Text>
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.secondary,
            textTransform: "capitalize",
            textAlign: "right",
          }}
        >
          {item.day}
        </Text>
      </View>
    </View>
  );
};

export default OrderHistoryItem;
