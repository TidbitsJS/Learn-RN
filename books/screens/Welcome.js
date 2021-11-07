import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, images, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const WelcomeBtn = ({ bgColor, color, ...props }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={{
      flex: 1,
      backgroundColor: bgColor,
      padding: SIZES.font,
      borderRadius: SIZES.padding,
      ...SHADOW.lightShadow,
      ...props,
    }}
  >
    <Text
      style={{
        ...FONTS.h3,
        color: color,
        textAlign: "center",
      }}
    >
      Sign up
    </Text>
  </TouchableOpacity>
);

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1.25,
            backgroundColor: COLORS.black,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo}
            style={{ width: 120, height: 150 }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            padding: SIZES.padding,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.white,
                marginTop: SIZES.font,
              }}
            >
              Welcome
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
                marginTop: SIZES.font,
              }}
            >
              Kitap is your best source to buy cheap book online, make online
              book purchase, making us the best book website in India to read
              book online.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              marginVertical: SIZES.padding,
            }}
          >
            <WelcomeBtn
              bgColor={COLORS.black}
              color={COLORS.white}
              marginRight={SIZES.font}
            />
            <WelcomeBtn bgColor={COLORS.white} color={COLORS.black} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
