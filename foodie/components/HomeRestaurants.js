import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HomeRestaurantsItem = ({
  item,
  navigation,
  currentLocation,
  getCategoryNameById,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginBottom: SIZES.padding * 4,
      }}
      onPress={() =>
        navigation.navigate("Restaurant", {
          item,
          currentLocation,
        })
      }
      activeOpacity={0.7}
    >
      <View
        style={{
          marginBottom: SIZES.padding,
        }}
      >
        <Image
          source={item.photo}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 200,
            borderRadius: SIZES.font,
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: COLORS.white,
            borderTopRightRadius: SIZES.radius,
            padding: SIZES.font - 2,
            paddingRight: SIZES.font + 3,
            alignItems: "center",
            justifyContent: "center",
            ...styles.shadow,
          }}
        >
          <Text
            style={{ ...FONTS.body4, fontFamily: "Roboto-Bold" }}
            numberOfLines={1}
          >
            {item.duration}
          </Text>
        </View>
      </View>

      <Text
        style={{
          ...FONTS.body3,
        }}
        numberOfLines={1}
      >
        {item.name}
      </Text>

      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: "row",
        }}
      >
        <Image
          source={icons.star}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.primary,
            marginRight: 10,
          }}
        />

        <Text style={{ ...FONTS.body4 }}>{item.rating}</Text>

        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
          }}
        >
          {item.categories.map((categoryId) => (
            <View
              style={{
                flexDirection: "row",
              }}
              key={categoryId}
            >
              <Text style={{ ...FONTS.body4 }} numberOfLines={1}>
                {getCategoryNameById(categoryId)}
              </Text>
              <Text
                style={{ ...FONTS.h3, color: COLORS.darkgray }}
                numberOfLines={1}
              >
                .
              </Text>
            </View>
          ))}
          {[1, 2, 3].map((priceRating) => (
            <Text
              key={priceRating}
              style={{
                ...FONTS.body4,
                fontFamily: "Roboto-Black",
                color:
                  priceRating <= item.priceRating
                    ? COLORS.black
                    : COLORS.darkgray,
              }}
            >
              $
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeRestaurants = ({
  restaurants,
  navigation,
  currentLocation,
  getCategoryNameById,
}) => {
  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <HomeRestaurantsItem
          item={item}
          navigation={navigation}
          currentLocation={currentLocation}
          getCategoryNameById={getCategoryNameById}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: SIZES.padding * 5,
      }}
    />
  );
};

export default HomeRestaurants;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
