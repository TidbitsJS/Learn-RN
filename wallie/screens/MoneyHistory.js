import React from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import MoneyHistoryHeader from "../components/MoneyHistoryHeader";
import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { balanceData } from "../data/dummy";
import MoneyBalanceItem from "../components/MoneyBalanceItem";

const MoneyHistory = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <FlatList
          data={balanceData}
          renderItem={({ item }) => <MoneyBalanceItem item={item} />}
          keyExtractor={(item) => `money-${item.id}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <MoneyHistoryHeader navigation={navigation} />
          )}
          ListFooterComponent={() => (
            <View
              style={{
                marginVertical: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.h3, color: COLORS.primary }}>. . .</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MoneyHistory;
