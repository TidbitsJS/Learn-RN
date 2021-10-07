import React from "react";
import { Animated, View, SafeAreaView, ScrollView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantFoodInfo from "../components/RestaurantFoodInfo";
import RestaurantDots from "../components/RestaurantDots";
import RestaurantOrder from "../components/RestaurantOrder";

const Restaurant = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = React.useState(null);
  const [currentLocation, setCurrentLocation] = React.useState(null);
  const [orderItems, setOrderItems] = React.useState([]);

  const scrollX = new Animated.Value(0);

  React.useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item);
    setCurrentLocation(currentLocation);
  }, [restaurant]);

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId === menuId);

    if (action === "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };

        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = item[0].qty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId === menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total.toFixed(2);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray3 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray3}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <RestaurantHeader navigation={navigation} restaurant={restaurant} />
          <RestaurantFoodInfo
            restaurant={restaurant}
            getOrderQty={getOrderQty}
            editOrder={editOrder}
            scrollX={scrollX}
          />
          <RestaurantDots restaurant={restaurant} scrollX={scrollX} />
          <RestaurantOrder
            navigation={navigation}
            restuarant={restaurant}
            currentLocation={currentLocation}
            getBasketItemCount={getBasketItemCount}
            sumOrder={sumOrder}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
