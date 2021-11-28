import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import TransferHeader from "../components/transfer/TransferHeader";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { transactionData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TransferMoneyItem = ({ bgColor, bgIconColor, iconUrl, title }) => (
  <TouchableOpacity
    style={{
      paddingVertical: SIZES.medium * 1.5,
      paddingHorizontal: SIZES.padding,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: bgColor,
      borderRadius: SIZES.font,
      margin: SIZES.base,
    }}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: SIZES.base,
        backgroundColor: bgIconColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={iconUrl}
        style={{ width: "50%", height: "50%", tintColor: COLORS.white }}
      />
    </View>
    <View>
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.black,
          fontFamily: "Rubik-Light",
        }}
      >
        Transfer your Money
      </Text>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.black,
          fontFamily: "Rubik-ExtraBold",
          marginTop: 2,
        }}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const TransactionProfileItem = ({ item }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.medium,
      margin: SIZES.base,
      borderRadius: SIZES.medium,
      backgroundColor: item.bgColor,
      minHeight: 210,
      maxWidth: "46%",
    }}
  >
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.padding,
      }}
    >
      <Image
        source={item.imgUrl}
        style={{ width: 50, height: 50, borderRadius: SIZES.base }}
        resizeMode="cover"
      />
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.black,
          fontFamily: "Rubik-Light",
          marginTop: 5,
          textAlign: "center",
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          ...FONTS.h4,
          fontFamily: "Rubik-ExtraBold",
          color: COLORS.black,
          textAlign: "center",
        }}
      >
        {item.transferId}
      </Text>
    </View>

    <View
      style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.padding,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.font,
      }}
    >
      <Text
        style={{
          ...FONTS.h4,
          lineHeight: 18,
          textAlign: "center",
          color: item.textColor,
        }}
      >
        {item.amount}
      </Text>
    </View>
  </TouchableOpacity>
);

const Transfer = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <FlatList
          data={transactionData}
          renderItem={({ item }) => <TransactionProfileItem item={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `transaction-${item.id}`}
          ListHeaderComponent={() => (
            <>
              <TransferHeader navigation={navigation} />
              <View style={{ marginBottom: SIZES.medium }}>
                <TransferMoneyItem
                  bgColor={COLORS.lightyellow}
                  bgIconColor={COLORS.yellow}
                  iconUrl={icons.wallet}
                  title="Wallet to Wallet"
                />
                <TransferMoneyItem
                  bgColor={COLORS.lightGreen}
                  bgIconColor={COLORS.green}
                  iconUrl={icons.bank}
                  title="Wallet to Bank"
                />
              </View>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.black,
                  marginVertical: SIZES.base,
                }}
              >
                Recent Transaction
              </Text>
            </>
          )}
          ListFooterComponent={() => (
            <View style={{ marginVertical: SIZES.font }}>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.black,
                  textAlign: "center",
                }}
              >
                . . .
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Transfer;
