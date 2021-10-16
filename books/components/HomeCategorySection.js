import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import HomeBookTag from "./HomeBookTag";

const CategoryBook = ({ item, navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.base }}>
      <View
        style={{ flex: 1, flexDirection: "row" }}
        onPress={() =>
          NavigationPreloadManager.navigate("BookDetail", {
            book: item,
          })
        }
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BookDetail", {
              book: item,
            })
          }
        >
          <Image
            source={item.bookCover}
            resizeMode="cover"
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginLeft: SIZES.radius,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("BookDetail", {
                book: item,
              })
            }
          >
            <Text
              style={{
                paddingRight: SIZES.padding * 2,
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
          </TouchableOpacity>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.radius,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: SIZES.font,
                }}
              >
                <Image
                  source={icons.page_filled_icon}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGray,
                    marginRight: SIZES.base,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.lightGray,
                  }}
                >
                  {item.pageNo}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.read_icon}
                  resizeMode="contain"
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.lightGray,
                    marginRight: SIZES.base,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.lightGray,
                  }}
                >
                  {item.readed}
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.base,
                justifyContent: "flex-start",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <HomeBookTag
                tagName={item.genre[0]}
                tagBgColor={COLORS.darkGreen}
                tagColor={COLORS.lightGreen}
              />
              {item.genre[1] && (
                <HomeBookTag
                  tagName={item.genre[1]}
                  tagBgColor={COLORS.darkRed}
                  tagColor={COLORS.lightRed}
                />
              )}
              {item.genre[2] && (
                <HomeBookTag
                  tagName={item.genre[2]}
                  tagBgColor={COLORS.darkBlue}
                  tagColor={COLORS.lightBlue}
                />
              )}
            </View>
          </View>
        </View>
      </View>

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

const HomeCategorySection = ({ navigation, categories, selectedCategory }) => {
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
        renderItem={({ item }) => (
          <CategoryBook item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => `category-${item.id}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeCategorySection;
