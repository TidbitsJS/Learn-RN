import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HomeCategories from "../components/HomeCategories";
import HomeHeader from "../components/HomeHeader";
import HomeRestaurants from "../components/HomeRestaurants";
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

const Home = ({ navigation }) => {
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

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id === id);

    if (category.length > 0) return category[0].name;

    return "";
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
        <ScrollView>
          <HomeCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
          />
          <HomeRestaurants
            restaurants={restaurants}
            navigation={navigation}
            currentLocation={currentLocation}
            getCategoryNameById={getCategoryNameById}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
