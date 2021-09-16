import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { COLORS, SIZES } from "../constants";

const PlantGridItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        navigation.navigate("PlantDetails", {
          plantId: item.id,
        });
      }}
    >
      <View
        style={{
          width: 160,
          margin: 10,
          borderRadius: SIZES.font + 5,
          padding: SIZES.font,
          backgroundColor: COLORS.lightGreen,
        }}
        key={"plant-" + item.name}
      >
        <Image
          source={item.imgUrl}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 170,
            borderRadius: SIZES.font,
          }}
        />
        <Text
          style={{
            paddingHorizontal: SIZES.base,
            paddingTop: SIZES.font - 2,
            fontFamily: "Roboto-Regular",
            color: COLORS.darkGreen,
            textAlign: "left",
            textTransform: "capitalize",
          }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlantGridItem;
