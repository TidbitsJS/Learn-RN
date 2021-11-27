import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar backgroundColor={COLORS.white} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            minHeight: SIZES.height,
          }}
        >
          <View style={{ width: "90%", padding: SIZES.font }}>
            <Image
              source={images.welcome}
              style={{ width: "100%", height: 350 }}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: SIZES.font,
            }}
          >
            <View>
              <Text
                style={{
                  ...FONTS.largeTitle,
                  color: COLORS.black,
                  textAlign: "center",
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lime,
                  textAlign: "center",
                  marginTop: SIZES.base,
                }}
              >
                Let's try Wallie now!
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lime,
                  textAlign: "center",
                }}
              >
                And get the best solution
              </Text>
            </View>

            <TouchableOpacity
              style={{
                width: "90%",
                padding: SIZES.font,
                backgroundColor: COLORS.emerald,
                marginVertical: SIZES.font,
                borderRadius: SIZES.radius,
              }}
              onPress={() => navigation.navigate("Sign Up")}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
