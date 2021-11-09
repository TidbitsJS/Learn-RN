import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomAlert from "../components/CustomAlert";
import CustomButton from "../components/CustomButton";
import FormTextInput from "../components/FormTextInput";
import LogWithButton from "../components/LogWithButton";
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
  const [error, setError] = React.useState({
    status: false,
    errorMessage: "Something went wrong. Please try again.",
  });

  const handleInputText = (type, value) => {
    setCredential({
      ...credential,
      [type]: value,
    });
  };

  const handleSubmit = () => {
    let validateSignIn =
      credential.username.trim() === "" || credential.password.trim() === "";

    let validateSignUp =
      credential.email.trim() === "" ||
      credential.confirmPassword.trim() === "";

    if (type === "Sign In") {
      if (validateSignIn) {
        setError({
          status: true,
          errorMessage:
            "All fields are required. Please fill in the fields to proceed",
        });
      } else {
        navigation.navigate("Home");
        setCredential({
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
      }
    } else {
      if (validateSignUp && validateSignIn) {
        setError({
          status: true,
          errorMessage:
            "All fields are required. Please fill in the fields to proceed",
        });
      } else if (credential.password !== credential.confirmPassword) {
        setError({
          status: true,
          errorMessage:
            "Password does not match. Ensure your password & confirm password fields are same.",
        });
      } else {
        navigation.navigate("Home");
        setCredential({
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        });
      }
    }
  };

  const handleErrorClose = () => {
    setError({ status: false, errorMessage: "" });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      {error.status && (
        <CustomAlert
          errorMessage={error.errorMessage}
          onHandleClose={handleErrorClose}
        />
      )}
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
              <TouchableOpacity
                onPress={() => {
                  let whereto = type === "Sign In" ? "Sign Up" : "Sign In";
                  navigation.navigate("Form", { type: whereto });
                }}
              >
                <Text style={{ ...FONTS.body5, color: COLORS.black }}>
                  {type === "Sign In" ? "Register" : "Login"}
                </Text>
              </TouchableOpacity>
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
            }}
          >
            <View
              style={{
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
              <View style={{ marginTop: SIZES.padding }}>
                <CustomButton
                  title={type}
                  bgColor={COLORS.white}
                  color={COLORS.black}
                  onHandlePress={handleSubmit}
                />
              </View>
            </View>
            <View
              style={{
                marginVertical: SIZES.base,
                height: 7,
                backgroundColor: COLORS.gray,
              }}
            />
            <View style={{ padding: SIZES.padding }}>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.primary,
                  textAlign: "center",
                }}
              >
                OR
              </Text>
              <View style={{ marginVertical: SIZES.font }}>
                <LogWithButton
                  title="Continue With Google"
                  iconUrl={icons.google}
                />
                <LogWithButton
                  title="Continue With Github"
                  iconUrl={icons.github}
                />
                <LogWithButton
                  title="Continue With Twitter"
                  iconUrl={icons.twitter}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form;
