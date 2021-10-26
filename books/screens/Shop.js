import React from "react";
import { View, Text, SafeAreaView, FlatList, ScrollView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, SIZES } from "../constants";
import ShopHeader from "../components/ShopHeader";
import ShopCartItem from "../components/ShopCartItem";
import { discoverBooks } from "../data/dummy";
import ShopFooter from "../components/ShopFooter";

const Shop = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <ShopHeader />
          <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.font }}>
            <FlatList
              data={discoverBooks.slice(4, 10)}
              renderItem={({ item }) => <ShopCartItem item={item} />}
              keyExtractor={(item) => `cart-${item.bookName}`}
            />
          </View>
          <ShopFooter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
