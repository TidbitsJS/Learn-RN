import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Balance = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.font }}>
        <View
          style={{
            marginVertical: SIZES.padding * 2,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ marginRight: SIZES.font }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.back}
              style={{ width: 25, height: 25, tintColor: COLORS.primary }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={{ ...FONTS.h4, color: COLORS.primary }}>Balance</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Balance;
