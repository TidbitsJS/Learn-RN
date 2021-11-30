import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import TransactionProfileItem from "../components/transfer/TransactionProfileItem";
import TransferHeader from "../components/transfer/TransferHeader";
import TransferMoneyCard from "../components/transfer/TransferMoneyCard";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { transactionData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

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
                <TransferMoneyCard
                  bgColor={COLORS.lightyellow}
                  bgIconColor={COLORS.yellow}
                  iconUrl={icons.wallet}
                  title="Wallet to Wallet"
                  handleNavigate={() => navigation.navigate("TransferWallet")}
                />
                <TransferMoneyCard
                  bgColor={COLORS.lightGreen}
                  bgIconColor={COLORS.green}
                  iconUrl={icons.bank}
                  title="Wallet to Bank"
                  handleNavigate={() => navigation.navigate("TransferBank")}
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
