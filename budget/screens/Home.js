import React from "react";
import { SafeAreaView, ScrollView, View, LogBox } from "react-native";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import HomeHeader from "../components/HomeHeader";
import { categoriesData } from "../data/dummy";
import HomeCategory from "../components/HomeCategory";
import HomeCategoryList from "../components/HomeCategoryList";
import HomeExpenses from "../components/HomeExpenses";
import HomePieChart from "../components/HomePieChart";
import HomeExpenseSummary from "../components/HomeExpenseSummary";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

const Home = () => {
  const [categories, setCategories] = React.useState(categoriesData);
  const [viewMode, setViewMode] = React.useState("chart");
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <FocusedStatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
        <ScrollView keyboardShouldPersistTaps="always">
          <HomeHeader />
          <HomeCategory
            categories={categories}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          {viewMode === "list" && (
            <View>
              <HomeCategoryList
                categories={categories}
                setSelectedCategory={setSelectedCategory}
              />
              <HomeExpenses selectedCategory={selectedCategory} />
            </View>
          )}
          {viewMode === "chart" && (
            <View>
              <HomePieChart
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <HomeExpenseSummary
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
