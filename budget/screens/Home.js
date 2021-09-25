import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
};

export default Home;
