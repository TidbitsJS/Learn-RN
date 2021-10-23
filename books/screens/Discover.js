import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, SIZES } from "../constants";
import DiscoverHeader from "../components/DiscoverHeader";
import DiscoverBooks from "../components/DiscoverBooks";

const Discover = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.font }}>
          <DiscoverHeader />
          <DiscoverBooks navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
