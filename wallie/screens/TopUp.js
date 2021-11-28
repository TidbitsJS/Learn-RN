import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import TopUpHeader from "../components/topup/TopUpHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TopUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <TopUpHeader navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default TopUp;
