import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { specialPromoData } from "../data/dummy";

const HomeSpecialOffersItem = ({ item }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      margin: 5,
    }}
  >
    <View
      style={{
        height: 80,
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font,
        backgroundColor: COLORS.primary,
      }}
    >
      <Image
        source={images.promoBanner}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font,
        }}
      />
    </View>

    <View
      style={{
        padding: SIZES.padding,
        backgroundColor: COLORS.lightGray,
        borderBottomLeftRadius: SIZES.font,
        borderBottomRightRadius: SIZES.font,
      }}
    >
      <Text style={{ ...FONTS.body4, fontFamily: "MSans-ExtraBold" }}>
        {item.title}
      </Text>
      <Text style={{ ...FONTS.body5, marginTop: 5 }}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const HomeSpecialOffers = () => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromoData}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => <HomeSpecialOffersItem item={item} />}
        ListHeaderComponent={
          <View style={{ flexDirection: "row", marginBottom: SIZES.padding }}>
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.body3 }}>Speical Promos</Text>
            </View>
            <TouchableOpacity>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

export default HomeSpecialOffers;
