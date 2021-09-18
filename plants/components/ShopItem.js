import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const ShopItem = ({ item, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.base,
        backgroundColor: COLORS.lightGreen,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.45}
        onPress={() => {
          navigation.navigate("PlantDetails", {
            plantId: item.id,
          });
        }}
        style={{
          flex: 1.2,
          width: 100,
          height: 90,
          marginHorizontal: SIZES.font,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.base,
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
      </TouchableOpacity>

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
