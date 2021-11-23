import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, icons, images, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.medium,
          paddingBottom: SIZES.medium * 5,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            marginVertical: SIZES.padding * 2,
            color: COLORS.lime,
            fontFamily: "MSans-ExtraBold",
          }}
        >
          Account
        </Text>

        <View style={{ marginVertical: SIZES.base }}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              padding: SIZES.font,
              minHeight: 120,
              borderRadius: SIZES.font,
              flexDirection: "row",
              alignItems: "center",
              ...SHADOW.lightShadow,
            }}
          >
            <View style={{ marginHorizontal: SIZES.base }}>
              <Image
                source={images.holmes}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                }}
                resizeMode="cover"
              />
            </View>
            <View>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                }}
              >
                Sherlock Holmes
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  fontFamily: "MSans-ExtraBold",
                  color: COLORS.white,
                }}
              >
                +1 898 860 110
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ position: "absolute", top: 10, right: 10, elevation: 5 }}
          >
            <Image
              source={icons.dots}
              style={{ width: 25, height: 25, tintColor: COLORS.white }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
