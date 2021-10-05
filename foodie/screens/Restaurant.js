import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantFoodInfo from "../components/RestaurantFoodInfo";

const Restaurant = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, [restaurant]);

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId === menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray3 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray3}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <RestaurantHeader navigation={navigation} restaurant={restaurant} />
        <RestaurantFoodInfo restaurant={restaurant} getOrderQty={getOrderQty} />
      </View>
    </SafeAreaView>
  );
};

export default Restaurant;
