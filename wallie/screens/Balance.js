import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import BalanceHeader from "../components/BalanceHeader";
import { COLORS, FONTS, icons, SHADOW, SIZES } from "../constants";
import { balanceData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const BalanceItem = ({ item }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: SIZES.padding2,
    }}
  >
    <View style={{ marginRight: SIZES.medium, width: 125 }}>
      <Text style={{ ...FONTS.body4, color: COLORS.primary }} numberOfLines={1}>
        {item.date}
      </Text>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: COLORS.lightGray,
          borderRadius: SIZES.padding2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.icon}
          style={{
            width: item.topUp ? "60%" : "70%",
            height: item.topUp ? "60%" : "70%",
            tintColor: item.topUp && COLORS.primary,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ width: 80 }}>
        <Text style={{ ...FONTS.body4, color: COLORS.gray }} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.black }} numberOfLines={1}>
          {item.amount}
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={icons.forward}
          resizeMode="cover"
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Balance = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <FlatList
          data={balanceData}
          renderItem={({ item }) => <BalanceItem item={item} />}
          keyExtractor={(item) => `balance-${item.id}`}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <BalanceHeader navigation={navigation} />}
          ListFooterComponent={() => (
            <TouchableOpacity
              style={{
                marginTop: SIZES.medium * 1.25,
                marginBottom: SIZES.base,
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
