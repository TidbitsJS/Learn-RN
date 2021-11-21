import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, images, SIZES } from "../constants";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.lime} />
      <LinearGradient
        colors={[COLORS.lime, COLORS.emerald]}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View
              style={{
                marginVertical: SIZES.font,
                height: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={images.wallieLogo}
                resizeMode="contain"
                style={{ width: "60%" }}
              />
            </View>

            <SignUpForm />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;
