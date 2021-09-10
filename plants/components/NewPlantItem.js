import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const NewPlantItem = ({ item, index }) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: SIZES.base,
      }}
    >
      <Image
        source={item.img}
        resizeMode="cover"
        style={{
          width: SIZES.width * 0.23,
          height: "82%",
          borderRadius: 15,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: "17%",
          right: 0,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          marginLeft: SIZES.base,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.body5 }} numberOfLines={1}>
          {item.name}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          position: "absolute",
          top: "15%",
          left: 7,
        }}
        onPress={() => {
          console.log("Focus on pressed");
        }}
      >
        <Image
          source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
          style={{
            width: 15,
            height: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewPlantItem;
