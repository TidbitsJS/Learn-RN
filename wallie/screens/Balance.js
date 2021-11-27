import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BalanceHeader from "../components/BalanceHeader";
import MoneyBalanceItem from "../components/MoneyBalanceItem";
import { COLORS, FONTS, SIZES } from "../constants";
import { balanceData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Balance = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <FlatList
          data={balanceData.slice(0, 5)}
          renderItem={({ item }) => <MoneyBalanceItem item={item} />}
          keyExtractor={(item) => `balance-${item.id}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <BalanceHeader navigation={navigation} />}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={{
                marginVertical: SIZES.medium * 1.25,
                backgroundColor: COLORS.lightGreen,
                padding: SIZES.font,
                borderRadius: SIZES.font,
              }}
            >
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.primary,
                  textAlign: "center",
                  fontFamily: "MSans-ExtraBold",
                }}
              >
                Top Up
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Balance;
