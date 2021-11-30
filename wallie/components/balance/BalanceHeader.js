import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FONTS, COLORS, SIZES } from "../../constants";
import BalanceCard from "../common/BalanceCard";
import HeadTitle from "../common/HeadTitle";

const BalanceHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="balance" navigation={navigation} />
      <BalanceCard />

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
