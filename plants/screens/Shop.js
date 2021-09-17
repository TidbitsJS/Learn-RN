import React from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ShopItem from "../components/ShopItem";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { plantsData } from "../data/dummy";

const Shop = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGreen }}>
      <View style={{ flex: 1, marginVertical: SIZES.font }}>
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
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: SIZES.padding,
                  height: 80,
                  backgroundColor: COLORS.white,
                  borderRadius: SIZES.padding - 5,
                  marginVertical: SIZES.font,
                }}
              >
                <Text
                  style={{ flex: 1, ...FONTS.body3, color: COLORS.blackShed }}
                >
                  Coupon
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={icons.verified}
                    resizeMode="cover"
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <Text
                    style={{
                      textAlign: "right",
                      ...FONTS.body5,
                      color: "#2ECC71",
                      textTransform: "uppercase",
                    }}
                    numberOfLines={1}
                  >
                    Ecofriendly
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: SIZES.padding,
                  height: 80,
                  backgroundColor: COLORS.primary,
                  borderRadius: SIZES.padding - 5,
                  marginVertical: SIZES.font,
                }}
              >
                <Text style={{ flex: 1, ...FONTS.body3, color: COLORS.white }}>
                  Total
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "right",
                      ...FONTS.body2,
                      color: COLORS.white,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                    numberOfLines={1}
                  >
                    $2350
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Shop;
