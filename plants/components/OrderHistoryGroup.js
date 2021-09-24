import React from "react";
import { Text, View, FlatList } from "react-native";
import { SIZES, FONTS, COLORS, images } from "../constants";
import OrderHistoryItem from "./OrderHistoryItem";

const OrderHistoryGroup = ({ item }) => {
  return (
    <View
      style={{
        width: "100%",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.font,
      }}
    >
      <Text
        style={{
          marginBottom: SIZES.font,
          ...FONTS.body4,
          color: COLORS.secondary,
          fontFamily: "Roboto-Bold",
        }}
      >
        {item.date}
      </Text>
      <View style={{ width: "100%" }}>
        <FlatList
          data={item.items}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <OrderHistoryItem item={item} />}
        />
      </View>
    </View>
  );
};

export default OrderHistoryGroup;
