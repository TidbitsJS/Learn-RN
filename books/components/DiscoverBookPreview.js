import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SIZES, FONTS, COLORS } from "../constants";

const DiscoverBookPreview = ({ book, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: book.backgroundColor,
        padding: SIZES.font,
        height: 250,
        flexDirection: "row",
        borderRadius: 5,
        marginVertical: SIZES.font,
      }}
      activeOpacity={0.4}
      onPress={() => navigation.navigate("BookDetail", { book })}
    >
      <Image
        source={book.bookCover}
        resizeMode="cover"
        style={{ flex: 1, height: "100%", borderRadius: 5 }}
      />
      <View
        style={{
          flex: 1,
          marginLeft: SIZES.font,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{ ...FONTS.h2, color: book.navTintColor }}
            numberOfLines={2}
          >
            {book.bookName}
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              color: book.navTintColor,
            }}
          >
            {book.author}
          </Text>
          <Text
            style={{
              ...FONTS.body5,
              marginTop: SIZES.font,
              color: book.navTintColor,
            }}
            numberOfLines={5}
          >
            {book.description}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.base,
            borderRadius: SIZES.radius,
          }}
        >
          <Text
            style={{ ...FONTS.body4, color: COLORS.white, textAlign: "center" }}
          >
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default DiscoverBookPreview;
