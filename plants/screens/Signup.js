import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Signup = ({ navigation }) => {
  const [signupcredential, setSignupCredential] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleClick = (signupcredential) => {
    let validate =
      signupcredential.email.trim() === "" ||
      signupcredential.password.trim() === "" ||
      signupcredential.name.trim() === "" ||
      signupcredential.confirmPassword.trim() === "";
    if (validate) {
      console.log("Please Provide proper credentials");
    } else {
      navigation.navigate("Home");
      setSignupCredential({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  const handleInputText = (type, value) => {
    setSignupCredential({
      ...signupcredential,
      [type]: value,
    });
  };

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
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "flex-start",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Image
                source={icons.leftArrow}
                resizeMode="cover"
                style={{ width: 30, height: 30 }}
              />
            </View>
          </TouchableOpacity>

          <View
            style={{
              width: "100%",
              padding: SIZES.padding,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.longTitle, color: COLORS.primary }}>
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
              Create your Account
            </Text>

            <CustomTextInput
              title="Name"
              type="name"
              value={signupcredential.name}
              onHandleInputClick={handleInputText}
            />
            <CustomTextInput
              title="Email"
              type="email"
              value={signupcredential.email}
              onHandleInputClick={handleInputText}
            />
            <CustomTextInput
              title="Password"
              type="password"
              value={signupcredential.password}
              onHandleInputClick={handleInputText}
            />
            <CustomTextInput
              title="Confirm Password"
              type="confirmpassword"
              value={signupcredential.confirmPassword}
              onHandleInputClick={handleInputText}
            />

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: SIZES.base,
              }}
            >
              <CustomButton
                title="Sign Up"
                onHandleClick={() => handleClick(signupcredential)}
              />

              <Text
                style={{
                  ...FONTS.body4,
                  marginTop: SIZES.padding * 2.5,
                  color: COLORS.secondary,
                }}
              >
                - Or Sign up with -
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
