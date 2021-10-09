import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { isIphoneX } from "react-native-iphone-x-helper";

const RestaurantOrder = ({
  navigation,
  restuarant,
  currentLocation,
  getBasketItemCount,
  sumOrder,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>
            {getBasketItemCount()} items in Cart
          </Text>
          <Text style={{ ...FONTS.h3 }}>${sumOrder()}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              Location
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />

            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              88888
            </Text>
          </View>
        </View>

        <View
          style={{
            padding: SIZES.padding * 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: SIZES.radius,
            }}
            onPress={() =>
              navigation.navigate("OrderDelivery", {
                restuarant: restuarant,
                currentLocation: currentLocation,
              })
            }
          >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Order</Text>
          </TouchableOpacity>
        </View>
      </View>

      {isIphoneX() && (
        <View
          style={{
            position: "absolute",
            bottom: -34,
            left: 0,
            right: 0,
            height: 34,
            backgroundColor: COLORS.white,
          }}
        />
      )}
    </View>
  );
};

export default RestaurantOrder;
