import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { FONTS, COLORS, SIZES } from "../../constants";

const GamesItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        margin: SIZES.base,
        marginVertical: SIZES.padding,
        alignItems: "center",
        maxWidth: "20.5%",
      }}
    >
      <Image
        source={item.imgUrl}
        style={{ width: "100%", height: 70, borderRadius: 30 }}
        resizeMode="stretch"
      />
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.darkgray2,
          marginTop: 3,
          textAlign: "center",
        }}
        numberOfLines={2}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default GamesItem;
