import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import TransferHeader from "../components/TransferHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Transfer = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <TransferHeader navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default Transfer;
