import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS } from "../constants";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Shop from "../screens/Shop";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            backgroundColor: COLORS.black,
          },
        ],
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.lightGray;

          switch (route.name) {
            case "Main":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 20,
                    height: 20,
                  }}
                />
              );

            case "Search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 20,
                    height: 20,
                  }}
                />
              );

            case "Cart":
              return (
                <Image
                  source={icons.cart}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Setting":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 20,
                    height: 20,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Search" component={Discover} />
      <Tab.Screen name="Cart" component={Shop} />
      <Tab.Screen name="Setting" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
