import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import RestaurantHeader from "../components/RestaurantHeader";

const Restaurant = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, [restaurant]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray3 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray3}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <RestaurantHeader navigation={navigation} restaurant={restaurant} />
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;

const styles = StyleSheet.create({});
