import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const RestaurantHeader = ({ navigation, restaurant }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: SIZES.font,
      }}
    >
      <TouchableOpacity
        style={{
          justifyContent: "center",
          paddingHorizontal: SIZES.font,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.lightGray3,
          }}
        >
          <Text style={{ ...FONTS.body3 }}> {restaurant?.name} </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: "center",
          paddingHorizontal: SIZES.font,
        }}
      >
        <Image
          source={icons.list}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantHeader;
