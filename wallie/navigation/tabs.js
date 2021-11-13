import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { COLORS, icons } from "../constants";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
  let isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: 0,
          }}
        >
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -25,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary,
            ...styles.shadow,
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          backgroundColor: COLORS.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
        tabBarButton: (props) => {
          return <TabBarCustomButton {...props} />;
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.secondary;

          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.more}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            case "Scan":
              return (
                <Image
                  source={icons.scan}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );

            case "User":
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: tintColor,
                  }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Scan" component={Home} />
      <Tab.Screen name="User" component={Home} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
