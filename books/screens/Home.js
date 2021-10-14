import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import HomeHeader from "../components/HomeHeader";
import { profileData } from "../data/dummy";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <View style={{ flex: 1 }}>
        <HomeHeader profile={profileData} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
