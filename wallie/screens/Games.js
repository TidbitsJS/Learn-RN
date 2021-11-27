import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import GameHeader from "../components/GameHeader";
import { COLORS, FONTS, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Games = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <GameHeader navigation={navigation} />

        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={images.frycry4}
            style={{ width: 70, height: 70, borderRadius: 50 }}
            resizeMode="stretch"
          />
          <Text
            style={{ ...FONTS.body5, color: COLORS.darkgray2, marginTop: 3 }}
          >
            Age of Empires II
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Games;
