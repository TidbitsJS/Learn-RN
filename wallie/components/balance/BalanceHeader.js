import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import HeadTitle from "../common/HeadTitle";

const BalanceHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="balance" navigation={navigation} />

      <View
        style={{
          minHeight: 150,
          marginVertical: SIZES.font,
          padding: SIZES.font * 2,
          backgroundColor: COLORS.lightGray,
          justifyContent: "center",
          borderRadius: SIZES.font,
        }}
      >
        <Text style={{ ...FONTS.h3, color: COLORS.darkgray2 }}>Balance</Text>
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
                fontFamily: "Rubik-ExtraBold",
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

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: SIZES.medium * 1.5,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.secondary,
          }}
        >
          Money History
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("MoneyHistory")}>
          <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceHeader;
