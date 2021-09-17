import React from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";
import { plantsData } from "../data/dummy";
import { COLORS, FONTS, SIZES } from "../constants";
import ShopFooterItem from "../components/ShopFooterItem";
import ShopItem from "../components/ShopItem";

const Shop = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGreen }}>
      <View style={{ flex: 1, marginTop: SIZES.font }}>
        <FlatList
          data={plantsData.slice(7, 13)}
          keyExtractor={(item) => "shop-" + item.name}
          renderItem={({ item }) => <ShopItem item={item} />}
          ListHeaderComponent={() => (
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: SIZES.padding,
              }}
            >
              <Text
                style={{ ...FONTS.h1, color: COLORS.secondary }}
              >{`My \nCart`}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={{ flex: 1, margin: SIZES.padding }}>
              <ShopFooterItem
                isImage={true}
                title="coupon"
                subtitle="ecofriendly"
                titleColor={COLORS.blackShed}
                subtitleColor="#2ECC71"
                bgColor={COLORS.white}
                bold={false}
                font={FONTS.body5}
              />

              <ShopFooterItem
                isImage={false}
                title="total"
                subtitle="$2451"
                titleColor={COLORS.white}
                subtitleColor={COLORS.white}
                bgColor={COLORS.primary}
                bold={true}
                font={FONTS.body2}
              />

              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: SIZES.base,
                }}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    ...FONTS.body3,
                    textAlign: "center",
                    paddingHorizontal: SIZES.base,
                    color: COLORS.secondary,
                    fontWeight: "bold",
                  }}
                >
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Shop;
