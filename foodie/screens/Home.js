import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { FONTS, COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const initialCurrentLocation = {
  streetName: "123 Baker Street, London",
  gps: {
    latitude: 1.5496614931250685,
    longitude: 110.36381866919922,
  },
};

const Home = () => {
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray4 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray4}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <HomeHeader currentLocation={currentLocation} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
