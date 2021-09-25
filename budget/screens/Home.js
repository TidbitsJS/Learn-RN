import React from "react";
import { SafeAreaView, View } from "react-native";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import { categoriesData } from "../data/dummy";
import HomeCategory from "../components/HomeCategory";
import HomeCategoryList from "../components/HomeCategoryList";

const Home = () => {
  const [categories, setCategories] = React.useState(categoriesData);
  const [viewMode, setViewMode] = React.useState("chart");
  const [selectedCategory, setSelectedCategory] = React.useState(null);

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
        <HomeCategoryList
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
