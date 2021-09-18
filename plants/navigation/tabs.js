import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { COLORS } from "../constants";
import Explore from "../screens/Explore";
import Shop from "../screens/Shop";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: "10%",
  },
};

const CameraButton = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
      }}
    >
      <Image
        source={require("../assets/icons/camera.png")}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />
    </View>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={tabOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={require("../assets/icons/plant_icon.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 27,
                    height: 27,
                  }}
                />
              );
            case "Explore":
              return (
                <Image
                  source={require("../assets/icons/cube_icon.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 20,
                    height: 20,
                  }}
                />
              );
            case "Camera":
              return <CameraButton />;
            case "Cart":
              return (
                <Image
                  source={require("../assets/icons/bag.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 23,
                    height: 23,
                  }}
                />
              );
            case "Profile":
              return (
                <Image
                  source={require("../assets/icons/settings.png")}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 23,
                    height: 23,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Camera" component={Home} />
      <Tab.Screen name="Cart" component={Shop} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
