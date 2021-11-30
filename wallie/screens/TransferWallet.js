import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import TransferWalletHeader from "../components/transfer/TransferWalletHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TransferWallet = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <TransferWalletHeader navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferWallet;
