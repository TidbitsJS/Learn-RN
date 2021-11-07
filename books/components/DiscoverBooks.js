import React from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { images, SIZES } from "../constants";
import { discoverBooks } from "../data/dummy";
import DiscoverBookPreview from "./DiscoverBookPreview";
import DiscoverOfferBar from "./DiscoverOfferBar";

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
        maxWidth: "48%",
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
        data={discoverBooks.slice(0, 12)}
        renderItem={({ item }) => (
          <DiscoverBooksItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        keyExtractor={(item) => `book-${item.bookName}`}
      />

      <DiscoverOfferBar
        imgUrl={images.redbg}
        title="Save Up to 50%"
        subtitle="expires in 3 days"
      />

      <DiscoverBookPreview book={discoverBooks[24]} navigation={navigation} />

      <FlatList
        data={discoverBooks.slice(12, 18)}
        renderItem={({ item }) => (
          <DiscoverBooksItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        keyExtractor={(item) => `book-${item.bookName}`}
      />

      <DiscoverBookPreview book={discoverBooks[0]} navigation={navigation} />

      <FlatList
        data={discoverBooks.slice(18)}
        renderItem={({ item }) => (
          <DiscoverBooksItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        keyExtractor={(item) => `book-${item.bookName}`}
      />

      <DiscoverOfferBar
        imgUrl={images.bluebg}
        title="Big Deal of Day"
        subtitle="Buy 1 get 1 free"
      />
    </View>
  );
};

export default DiscoverBooks;
