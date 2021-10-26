import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import Dash from "../utils/Dash";

const ShopFooterItem = ({ title, subtitle }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 2,
    }}
  >
    <Text style={{ ...FONTS.body3, color: COLORS.lightGray3 }}>{title}</Text>
    <Text
      style={{ ...FONTS.body4, fontFamily: "Roboto-Bold", color: COLORS.white }}
    >
      {subtitle}
    </Text>
  </View>
);

const ShopFooter = () => {
  return (
    <View style={{ width: "100%", padding: SIZES.font }}>
      <ShopFooterItem title="Item" subtitle="$ 102.50" />
      <ShopFooterItem title="Discounts" subtitle="-$ 3.00" />
      <ShopFooterItem title="Shipping Charges" subtitle="$ 10.25" />
      <Dash width="100%" paddingVertical={SIZES.font} />
      <ShopFooterItem title="Total" subtitle="$ 100.75" />
    </View>
  );
};

export default ShopFooter;
