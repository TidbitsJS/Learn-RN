import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import HomeHeader from "../components/HomeHeader";
import { myBooksData, profileData } from "../data/dummy";
import HomeButtonSection from "../components/HomeButtonSection";
import HomeBookSection from "../components/HomeBookSection";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <View style={{ flex: 1 }}>
        <HomeHeader profile={profileData} />
        <HomeButtonSection />
        <HomeBookSection navigation={navigation} myBooks={myBooksData} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
