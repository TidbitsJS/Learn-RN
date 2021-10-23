import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons, COLORS } from "../constants";
import Home from "../screens/Home";
import Discover from "../screens/Discover";

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
            case "Home":
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

            case "Notification":
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 20,
                    height: 20,
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Discover} />
      <Tab.Screen name="Notification" component={Home} />
      <Tab.Screen name="Setting" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;
