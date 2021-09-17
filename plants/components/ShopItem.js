import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";

const ShopItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.base,
      }}
    >
      <View
        style={{
          flex: 1.2,
          borderRadius: SIZES.base,
          marginHorizontal: SIZES.font,
          width: 100,
          height: 90,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.imgUrl}
          resizeMode="cover"
          style={{
            width: "90%",
            height: "90%",
            borderRadius: SIZES.base,
          }}
        />
      </View>
      <View style={{ flex: 2, paddingRight: SIZES.font }}>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.blackShed,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text style={{ ...FONTS.body5, color: COLORS.secondary }}>
          Quantity: 1
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>
          ${item.price}
        </Text>
      </View>
    </View>
  );
};

export default ShopItem;
