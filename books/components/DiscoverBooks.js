import React from "react";
import { View, FlatList, Image } from "react-native";
import { COLORS, SIZES } from "../constants";
import { discoverBooks } from "../data/dummy";

const DiscoverBooksItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 5,
        backgroundColor: COLORS.gray,
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
    </View>
  );
};

const DiscoverBooks = () => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <FlatList
        data={discoverBooks}
        renderItem={({ item }) => <DiscoverBooksItem item={item} />}
        numColumns={2}
        keyExtractor={(item) => `book-${item.bookName}`}
      />
    </View>
  );
};

export default DiscoverBooks;
