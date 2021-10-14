import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <View style={{ flex: 1 }}>
        <Text style={{ color: COLORS.white }}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
