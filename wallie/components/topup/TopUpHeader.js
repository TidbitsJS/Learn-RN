import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import HeadTitle from "../common/HeadTitle";

const TopUpHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="top up" navigation={navigation} />

      <View style={{ marginVertical: SIZES.padding * 2 }}>
        <View
          style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.font,
            borderRadius: SIZES.font,
            overflow: "hidden",
          }}
        >
          <ImageBackground
            source={images.banner}
            resizeMode="cover"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

          <View style={{ margin: SIZES.base }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.white,
                  fontFamily: "Rubik-Light",
                  marginRight: SIZES.base,
                }}
              >
                $
              </Text>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.white,
                  fontFamily: "Rubik-Medium",
                }}
              >
                20.00
              </Text>
            </View>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              Total balance : $135.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TopUpHeader;
