import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const HomeHeader = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.white,
          paddingVertical: SIZES.font,
        }}
      >
        <TouchableOpacity
          style={{ justifyContent: "center", width: 50 }}
          onPress={() => console.log("Go Back")}
        >
          <Image
            source={icons.back_arrow}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.primary,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: 50,
          }}
          onPress={() => console.log("More")}
        >
          <Image
            source={icons.more}
            style={{ width: 30, height: 30, tintColor: COLORS.primary }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.font,
          paddingBottom: SIZES.padding,
          backgroundColor: COLORS.white,
        }}
      >
        <View>
          <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>
            My Expenses
          </Text>
          <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>
            Summary (private)
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.lightGray,
              height: 50,
              width: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.calendar}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.lightBlue,
              }}
            />
          </View>

          <View style={{ marginLeft: SIZES.padding }}>
            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
              25 Sep, 2021
            </Text>
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>
              18% more than last month
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
