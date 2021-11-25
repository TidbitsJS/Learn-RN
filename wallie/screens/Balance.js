import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Balance = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.font }}>
        <View
          style={{
            marginVertical: SIZES.padding * 2,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ marginRight: SIZES.font }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back}
              style={{ width: 25, height: 25, tintColor: COLORS.primary }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Balance</Text>
        </View>

        <View
          style={{
            minHeight: 120,
            marginVertical: SIZES.font,
            padding: SIZES.font * 2,
            backgroundColor: COLORS.lightGray,
            justifyContent: "center",
            borderRadius: SIZES.font,
          }}
        >
          <Text style={{ ...FONTS.h4, color: COLORS.darkgray2 }}>Balance</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.darkgray2,
                  marginRight: 3,
                }}
              >
                $
              </Text>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.black,
                  fontFamily: "MSans-ExtraBold",
                }}
              >
                115.00
              </Text>
              <Image
                source={icons.eye}
                style={{
                  width: 20,
                  height: 20,
                  marginLeft: SIZES.base,
                  tintColor: COLORS.darkgray2,
                }}
                resizeMode="cover"
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.35}
              style={{
                backgroundColor: COLORS.purple,
                paddingHorizontal: SIZES.padding2,
                paddingVertical: 5,
                borderRadius: SIZES.font * 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={icons.down}
                style={{
                  width: 10,
                  height: 10,
                  tintColor: COLORS.white,
                  marginRight: SIZES.base,
                }}
                resizeMode="cover"
              />
              <Text style={{ ...FONTS.body5, color: COLORS.white }}>USD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Balance;
