import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              padding: SIZES.padding,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.longTitle,
                color: COLORS.primary,
              }}
            >
              Bitki
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              marginVertical: SIZES.font * 1.25,
              paddingHorizontal: SIZES.font,
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                paddingHorizontal: SIZES.base,
                color: COLORS.secondary,
                marginBottom: SIZES.base,
                fontFamily: "Roboto-Bold",
              }}
            >
              Login to your Account
            </Text>

            <CustomTextInput title="Email" type="email" />
            <CustomTextInput title="Password" type="password" />

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: SIZES.base,
              }}
            >
              <CustomButton title="Log In" />

              <Text
                style={{
                  ...FONTS.body4,
                  marginTop: SIZES.padding * 2.5,
                  color: COLORS.secondary,
                }}
              >
                - Or Sign in with -
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: SIZES.base,
                marginTop: SIZES.font * 1.25,
              }}
            >
              <IconButton iconUrl={icons.google} />
              <IconButton iconUrl={icons.instagram} />
              <IconButton iconUrl={icons.twitter} />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: SIZES.padding,
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.secondary,
                }}
              >
                Don't have an Account?{" "}
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.darkGreen,
                    fontWeight: "bold",
                  }}
                  onPress={() => {
                    navigation.navigate("Signup");
                  }}
                >
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
