import React from "react";
import { View, SafeAreaView, FlatList, ScrollView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, SIZES } from "../constants";
import ShopHeader from "../components/ShopHeader";
import ShopCartItem from "../components/ShopCartItem";
import { discoverBooks } from "../data/dummy";
import ShopFooter from "../components/ShopFooter";

const Shop = () => {
  const [cartItems, setCartItems] = React.useState(discoverBooks.slice(15, 20));
  const [totalPrice, setTotalPrice] = React.useState(
    cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)
  );

  const handleRemoveItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleTotalPrice = (price) => {
    if (cartItems.length === 0) {
      setTotalPrice(0);
    } else {
      let newPrice = parseFloat(totalPrice) + parseFloat(price);
      setTotalPrice(newPrice.toFixed(2));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <ShopHeader />
          <View style={{ marginTop: SIZES.padding, marginBottom: SIZES.font }}>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => (
                <ShopCartItem
                  item={item}
                  handleRemoveItem={handleRemoveItem}
                  handleTotalPrice={handleTotalPrice}
                />
              )}
              keyExtractor={(item) => `cart-${item.bookName}`}
            />
          </View>
          <ShopFooter totalPrice={totalPrice} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;
