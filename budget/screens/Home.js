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
import { categoriesData } from "../data/dummy";
import HomeCategory from "../components/HomeCategory";

const Home = () => {
  const [categories, setCategories] = React.useState(categoriesData);
  const [viewMode, setViewMode] = React.useState("chart");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
        <HomeHeader />
        <HomeCategory
          categories={categories}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
