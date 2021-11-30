import React from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import CurrencyBtn from "./CurrencyBtn";

const BalanceCard = () => {
  return (
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

        <CurrencyBtn />
      </View>
    </View>
  );
};

export default BalanceCard;
