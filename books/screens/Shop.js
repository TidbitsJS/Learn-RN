import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import ShopHeader from "../components/ShopHeader";

const Shop = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <View style={{ flex: 1 }}>
        <ShopHeader />
      </View>
    </SafeAreaView>
  );
};

export default Shop;
