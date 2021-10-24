import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { SIZES } from "../constants";
import { discoverBooks } from "../data/dummy";

const DiscoverBooksItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() =>
        navigation.navigate("BookDetail", {
          book: item,
        })
      }
      style={{
        flex: 1,
        margin: 5,
        backgroundColor: item.backgroundColor,
        padding: SIZES.base,
        borderRadius: 5,
        maxWidth: "50%",
      }}
    >
      <Image
        source={item.bookCover}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 215,
          borderRadius: 5,
        }}
      />
    </TouchableOpacity>
  );
};

const DiscoverBooks = ({ navigation }) => {
  return (
    <View style={{ marginTop: SIZES.padding, padding: SIZES.base }}>
      <FlatList
        data={discoverBooks}
        renderItem={({ item }) => (
          <DiscoverBooksItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        keyExtractor={(item) => `book-${item.bookName}`}
      />
    </View>
  );
};

export default DiscoverBooks;
