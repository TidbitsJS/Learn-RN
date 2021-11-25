import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
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
          ListHeaderComponent={() => (
            <>
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
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: COLORS.primary,
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.primary,
                    fontFamily: "MSans-ExtraBold",
                  }}
                >
                  Balance
                </Text>
              </View>

              <View
                style={{
                  minHeight: 120,
                  marginVertical: SIZES.font,
                  padding: SIZES.font * 2,
                  backgroundColor: COLORS.lightGray,
                  justifyContent: "center",
                  borderRadius: SIZES.font,
                  ...SHADOW.dimShadow,
                }}
              >
                <Text style={{ ...FONTS.h4, color: COLORS.darkgray2 }}>
                  Balance
                </Text>
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
                    <Text style={{ ...FONTS.body5, color: COLORS.white }}>
                      USD
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: SIZES.medium * 1.25,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h4,
                    fontFamily: "MSans-ExtraBold",
                    color: COLORS.black,
                  }}
                >
                  Manage History
                </Text>
                <TouchableOpacity>
                  <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
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
