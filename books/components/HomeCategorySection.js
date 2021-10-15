import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const CategoryBook = ({ item }) => {
  return (
    <View style={{ marginVertical: SIZES.base }}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() =>
          NavigationPreloadManager.navigate("BookDetail", {
            book: item,
          })
        }
      >
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{ width: 100, height: 150, borderRadius: 10 }}
        />
        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
          <View>
            <Text
              style={{
                paddingRight: SIZES.padding,
                ...FONTS.h3,
                color: COLORS.white,
              }}
              numberOfLines={2}
            >
              {item.bookName}
            </Text>
            <Text style={{ ...FONTS.h4, color: COLORS.lightGray }}>
              {item.author}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
            <Image
              source={icons.page_filled_icon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray,
                paddingHorizontal: SIZES.radius,
              }}
            >
              {item.pageNo}
            </Text>

            <Image
              source={icons.read_icon}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightGray,
              }}
            />
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray,
                paddingHorizontal: SIZES.radius,
              }}
            >
              {item.readed}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: SIZES.base,
                backgroundColor: COLORS.darkBlue,
                borderRadius: SIZES.base,
              }}
            >
              <Text style={{ ...FONTS.body5, color: COLORS.lightBlue }}>
                Drama
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ position: "absolute", top: 5, right: 5 }}
        onPress={() => console.log("Bookmark")}
      >
        <Image
          source={icons.bookmark_icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.lightGray,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeCategorySection = ({ categories, selectedCategory }) => {
  let books = [];
  let selectedCategoryBooks = categories.filter(
    (a) => a.id === selectedCategory
  );

  if (selectedCategoryBooks.length > 0) {
    books = selectedCategoryBooks[0].books;
  }

  return (
    <View style={{ flex: 1, padding: SIZES.font }}>
      <FlatList
        data={books}
        renderItem={({ item }) => <CategoryBook item={item} />}
        keyExtractor={(item) => `category-${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCategorySection;
