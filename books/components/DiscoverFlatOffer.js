import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { discoverBooks } from "../data/dummy";

const DiscoverFlatOffer = ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: SIZES.padding,
        marginLeft: SIZES.font,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingLeft: SIZES.font,
        paddingVertical: SIZES.font,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        backgroundColor: COLORS.gray,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "absolute",
          top: -40,
          left: -60,
          width: 100,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: COLORS.black,
          backgroundColor: COLORS.black,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: -40,
          left: -40,
          width: 100,
          backgroundColor: COLORS.primary,
          height: 100,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: COLORS.primary,
        }}
      />

      <View style={{ paddingRight: SIZES.font }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>Flat</Text>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>50% off</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          data={discoverBooks.slice(18, 26)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginHorizontal: SIZES.font,
                backgroundColor: item.backgroundColor,
                padding: SIZES.base,
                borderRadius: 5,
              }}
              activeOpacity={0.4}
              onPress={() =>
                navigation.navigate("BookDetail", {
                  book: item,
                })
              }
            >
              <Image
                source={item.bookCover}
                resizeMode="cover"
                style={{ width: 150, height: 230, borderRadius: 5 }}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `flat-${item.bookName}`}
        />
      </View>
    </View>
  );
};

export default DiscoverFlatOffer;
