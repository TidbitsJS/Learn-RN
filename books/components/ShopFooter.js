import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
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

const ShopFooter = ({ totalPrice }) => {
  let discount = totalPrice * 0.25,
    tax = totalPrice * 0.1,
    shipping = totalPrice * 0.05;

  return (
    <View style={{ width: "100%", padding: SIZES.font }}>
      <ShopFooterItem title="Item" subtitle={`$ ${totalPrice}`} />
      <ShopFooterItem title="Tax" subtitle={`$ ${tax.toFixed(2)}`} />
      <ShopFooterItem title="Discount" subtitle={`$ ${discount.toFixed(2)}`} />
      <ShopFooterItem
        title="Shipping Charges"
        subtitle={`$ ${shipping.toFixed(2)}`}
      />
      <Dash width="100%" paddingVertical={SIZES.font} />
      <ShopFooterItem
        title="Total"
        subtitle={`$ ${(totalPrice - discount + tax + shipping).toFixed(2)}`}
      />

      <TouchableOpacity
        style={{
          width: "100%",
          padding: SIZES.font,
          marginTop: SIZES.padding,
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.radius,
          justifyContent: "center",
          alignItems: "center",
        }}
        activeOpacity={0.5}
      >
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.white,
            textTransform: "capitalize",
          }}
        >
          checkout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShopFooter;
