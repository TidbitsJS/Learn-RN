import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TopUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <Text>Top up screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default TopUp;
