import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { discoverBooks } from "../data/dummy";

const ShopSomething = ({ navigation }) => {
  return (
    <View style={{ flex: 1, margin: SIZES.font }}>
      <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
        Bag is Empty
      </Text>

      <View
        style={{
          backgroundColor: COLORS.gray,
          margin: SIZES.font,
          padding: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SIZES.base,
        }}
      >
        <Text
          style={{
            ...FONTS.body5,
            color: COLORS.white,
            marginBottom: SIZES.font,
            textTransform: "uppercase",
          }}
        >
          Discover new books
        </Text>

        <FlatList
          data={discoverBooks.slice(1, 5)}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ margin: SIZES.base }}
              onPress={() => navigation.navigate("BookDetail", { book: item })}
            >
              <Image
                source={item.bookCover}
                style={{ width: 80, height: 120, borderRadius: SIZES.base }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `cartshop-${item.bookName}`}
        />
      </View>
    </View>
  );
};

export default ShopSomething;
