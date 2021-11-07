import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FormTextInput from "../components/FormTextInput";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Form = ({ route, navigation }) => {
  const { type } = route.params;
  const [credential, setCredential] = React.useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputText = (type, value) => {
    setCredential({
      ...credential,
      [type]: value,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.primary} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              minHeight: 170,
              padding: SIZES.padding,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: SIZES.font,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Welcome");
                }}
              >
                <Image
                  source={icons.back_arrow_icon}
                  resizeMode="cover"
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>
              <Text style={{ ...FONTS.body5, color: COLORS.black }}>
                Register
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.white,
                marginTop: SIZES.padding,
              }}
            >
              {type}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
                marginVertical: SIZES.font,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.black,
              borderTopRightRadius: SIZES.padding,
              borderTopLeftRadius: SIZES.padding,
              padding: SIZES.padding,
            }}
          >
            {type === "Sign Up" && (
              <FormTextInput
                placeholderText="Email"
                type="email"
                value={credential.email}
                onHandleInputText={handleInputText}
              />
            )}
            <FormTextInput
              placeholderText="Username"
              type="username"
              value={credential.username}
              onHandleInputText={handleInputText}
            />
            <FormTextInput
              placeholderText="Password"
              type="password"
              value={credential.password}
              onHandleInputText={handleInputText}
            />
            {type === "Sign Up" && (
              <FormTextInput
                placeholderText="Confirm Password"
                type="confirmPassword"
                value={credential.confirmPassword}
                onHandleInputText={handleInputText}
              />
            )}
            {type === "Sign In" && (
              <TouchableOpacity
                style={{ marginTop: SIZES.base }}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.primary,
                    textAlign: "right",
                  }}
                >
                  Forgot Password?.
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form;
