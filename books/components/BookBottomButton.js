import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const BookBottomButton = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.base,
        paddingHorizontal: SIZES.font,
      }}
    >
      <TouchableOpacity
        style={{
          width: 50,
          backgroundColor: COLORS.secondary,
          borderRadius: 25,
          padding: SIZES.font,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => console.log("Bookmark")}
      >
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.lightGray2,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: 0.9,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          paddingHorizontal: SIZES.font,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => console.log("Start Reading")}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookBottomButton;
