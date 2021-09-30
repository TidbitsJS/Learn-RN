import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { FONTS, COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.lightGray} />
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h1 }}>Foodie</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
