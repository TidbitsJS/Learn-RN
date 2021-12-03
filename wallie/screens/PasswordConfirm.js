import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeadTitle from "../components/common/HeadTitle";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useStateContext } from "../context/StateContext";

const PasswordConfirm = ({ route, navigation }) => {
  const { title } = route.params;

  const { setStatusModal, setAnimationType, setModalText } = useStateContext();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <View style={{ marginVertical: SIZES.font }}>
            <HeadTitle title="password confirmation" navigation={navigation} />

            <View style={{ marginVertical: SIZES.base }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                }}
              >
                Please Enter
              </Text>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                }}
              >
                Your Password
              </Text>

              <View style={{ marginVertical: SIZES.base }}>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
                  To finish top up payment you need
                </Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
                  to confirm with your old password
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 90,
            }}
          >
            <OTPInputView
              style={{ width: "90%" }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={{
                width: 40,
                height: 50,
                borderWidth: 1,
                borderColor: COLORS.lightGray,
                backgroundColor: COLORS.lightGray,
                color: COLORS.emerald,
                ...SHADOW.dimShadow,
              }}
              codeInputHighlightStyle={{
                borderColor: COLORS.primary,
              }}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
                setAnimationType("zoomIn");
                setModalText(title);
                navigation.navigate("Home");
                setTimeout(() => {
                  setStatusModal(true);
                }, 1000);
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              marginVertical: SIZES.font,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.primary }}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordConfirm;
