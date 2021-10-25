import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";

const ShopHeader = () => {
  return (
    <View>
      <View
        style={{
          margin: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
          }}
        >
          My Cart
        </Text>
        <Text
          style={{ ...FONTS.body3, color: COLORS.lightGray3, marginTop: 5 }}
        >
          7 books
        </Text>
      </View>

      <View
        style={{
          marginHorizontal: SIZES.font,
          minheight: 50,
          justifyContent: "center",
          alignItems: "center",
          padding: SIZES.font,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={images.bluebg}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: SIZES.font,
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>30%</Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.white,
              textTransform: "uppercase",
              marginLeft: 5,
            }}
          >
            Off
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>Use Code</Text>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.white,
              marginHorizontal: 5,
            }}
          >
            book221
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.white }}>
            at checkout
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ShopHeader;
