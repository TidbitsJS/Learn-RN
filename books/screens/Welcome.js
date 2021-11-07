import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { COLORS, FONTS, images, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

// const WelcomeBtn = ({ title, bgColor, color, navigation, ...props }) => (
//   <TouchableOpacity
//     activeOpacity={0.5}
//     onPress={() =>
//       navigation.navigate("Form", {
//         type: title,
//       })
//     }
//     style={{
//       flex: 1,
//       backgroundColor: bgColor,
//       padding: SIZES.font,
//       borderRadius: SIZES.padding,
//       ...SHADOW.lightShadow,
//       ...props,
//     }}
//   >
//     <Text
//       style={{
//         ...FONTS.h3,
//         color: color,
//         textAlign: "center",
//       }}
//     >
//       {title}
//     </Text>
//   </TouchableOpacity>
// );

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 3,
              minHeight: 250,
              backgroundColor: COLORS.black,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={images.logo}
              style={{ width: 120, height: 150 }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              minHeight: 300,
              backgroundColor: COLORS.primary,
              borderTopLeftRadius: SIZES.padding,
              borderTopRightRadius: SIZES.padding,
              padding: SIZES.padding,
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginVertical: SIZES.font }}>
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.white,
                  marginTop: SIZES.font,
                }}
              >
                Welcome
              </Text>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                  marginTop: SIZES.font,
                }}
              >
                Kitap is your best source to buy cheap book online, make online
                book purchase, making us the best book website in India to read
                book online.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",

                marginVertical: SIZES.padding,
              }}
            >
              <CustomButton
                title="Sign In"
                bgColor={COLORS.black}
                color={COLORS.white}
                onHandlePress={() => {
                  navigation.navigate("Form", {
                    type: "Sign In",
                  });
                }}
                marginRight={SIZES.font}
              />
              <CustomButton
                title="Sign Up"
                bgColor={COLORS.white}
                color={COLORS.black}
                onHandlePress={() => {
                  navigation.navigate("Form", {
                    type: "Sign Up",
                  });
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
