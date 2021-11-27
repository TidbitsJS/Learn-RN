import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import { COLORS, SIZES, images } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const MoneyHistory = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <Text>Money History</Text>

        <View
          style={{
            height: 150,
            borderRadius: SIZES.medium,
            marginVertical: SIZES.padding * 2,
          }}
        >
          <Image
            source={images.foodbanner}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: SIZES.medium,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoneyHistory;
