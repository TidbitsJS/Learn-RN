import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../constants";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ ...FONTS.h1 }}>Home Screen</Text>
    </View>
  );
};

export default Home;
