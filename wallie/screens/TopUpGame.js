import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import TopUpGameHeader from "../components/game/TopUpGameHeader";
import { COLORS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TopUpGame = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <TopUpGameHeader navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default TopUpGame;
