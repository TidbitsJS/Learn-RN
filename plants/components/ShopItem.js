import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const ShopItem = ({ item, navigation }) => {
  const [quantity, setQuantity] = useState(1);

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: SIZES.base,
          }}
        >
          <TouchableOpacity
            style={{
              width: 25,
              height: 25,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: COLORS.gray,
              justifyContent: "center",
              alignItems: "center",
            }}
            activeOpacity={0.45}
            onPress={() => {
              if (quantity > 0) {
                setQuantity((quantity) => quantity - 1);
              }
            }}
          >
            <Image
              source={icons.minus}
              style={{ width: "50%", height: "50%" }}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...FONTS.body4,
              marginHorizontal: SIZES.base,
              fontFamily: "Roboto-Bold",
              color: COLORS.secondary,
            }}
          >
            {quantity}
          </Text>
          <TouchableOpacity
            style={{
              width: 25,
              height: 25,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: COLORS.gray,
              justifyContent: "center",
              alignItems: "center",
            }}
            activeOpacity={0.45}
            onPress={() => {
              setQuantity((quantity) => quantity + 1);
            }}
          >
            <Image
              source={icons.plusblack}
              style={{ width: "50%", height: "50%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>
          ${item.price * quantity}
        </Text>
      </View>
    </View>
  );
};

export default ShopItem;
