import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import TransferToHeader from "../components/transfer/TransfeToHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TransferBank = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <TransferToHeader title="transfer to bank" navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default TransferBank;
