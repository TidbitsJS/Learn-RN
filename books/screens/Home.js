import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import HomeHeader from "../components/HomeHeader";
import { categoriesData, myBooksData, profileData } from "../data/dummy";
import HomeButtonSection from "../components/HomeButtonSection";
import HomeBookSection from "../components/HomeBookSection";
import HomeCategoryHeader from "../components/HomeCategoryHeader";
import HomeCategorySection from "../components/HomeCategorySection";
import * as Animatable from "react-native-animatable";

const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <Animatable.View animation="fadeIn" style={{ flex: 1 }}>
          <HomeHeader profile={profileData} />
          <HomeButtonSection />
          <HomeBookSection navigation={navigation} myBooks={myBooksData} />
          <HomeCategoryHeader
            categories={categoriesData}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <HomeCategorySection
            navigation={navigation}
            categories={categoriesData}
            selectedCategory={selectedCategory}
          />
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
