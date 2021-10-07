import React from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const RestaurantFoodInfo = ({
  restaurant,
  getOrderQty,
  editOrder,
  scrollX,
}) => {
  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={16}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {restaurant?.menu.map((item, index) => (
        <View
          key={`menu-${index}`}
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: SIZES.font,
          }}
        >
          <View
            style={{
              height: 250,
              width: "100%",
              padding: SIZES.base,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: SIZES.base,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: -20,
                width: SIZES.width,
                height: 50,
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
                onPress={() => editOrder("-", item.menuId, item.price)}
              >
                <Text style={{ ...FONTS.body1 }}>-</Text>
              </TouchableOpacity>

              <View
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ ...FONTS.h2 }}>{getOrderQty(item.menuId)}</Text>
              </View>

              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: COLORS.white,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() => editOrder("+", item.menuId, item.price)}
              >
                <Text style={{ ...FONTS.body1 }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: SIZES.width,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{ marginVertical: 15, textAlign: "center", ...FONTS.h2 }}
            >
              {item.name} - {item.price.toFixed(2)}
            </Text>
            <Text
              style={{
                ...FONTS.h4,
                textTransform: "capitalize",
                color: COLORS.black,
                marginTop: SIZES.font,
                width: "100%",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingHorizontal: SIZES.font,
              }}
            >
              description:
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                padding: SIZES.font,
                color: COLORS.black,
                width: "100%",
              }}
            >
              {item.description}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: SIZES.font,
              width: "100%",
              paddingHorizontal: SIZES.font,
            }}
          >
            <View>
              <Text style={{ ...FONTS.h4, textTransform: "capitalize" }}>
                calories:
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.fire}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.darkgray,
                }}
              >
                {item.calories.toFixed(2)} cal
              </Text>
            </View>
          </View>
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default RestaurantFoodInfo;
