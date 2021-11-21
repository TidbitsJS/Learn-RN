import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import HomeFeatures from "../components/HomeFeatures";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.medium,
            paddingBottom: SIZES.medium * 5,
          }}
        >
          <View
            style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ ...FONTS.h3, fontFamily: "MSans-ExtraBold" }}>
                Hello!
              </Text>
              <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                Sherlock Holmes
              </Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.lightGray,
                  borderRadius: 2,
                }}
              >
                <Image
                  source={icons.bell}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.secondary,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    top: -5,
                    right: -5,
                    height: 10,
                    width: 10,
                    backgroundColor: COLORS.red,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: 120,
              borderRadius: SIZES.medium,
              marginVertical: SIZES.font,
            }}
          >
            <Image
              source={images.banner}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: SIZES.medium,
              }}
            />
          </View>

          <HomeFeatures />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
