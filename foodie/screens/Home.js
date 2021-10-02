import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeCategories from "../components/HomeCategories";
import HomeHeader from "../components/HomeHeader";
import { FONTS, COLORS } from "../constants";
import { categoryData, restaurantData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const initialCurrentLocation = {
  streetName: "123 Baker Street, London",
  gps: {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  },
};

const Home = () => {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray4 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray4}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <HomeHeader currentLocation={currentLocation} />
        <HomeCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
