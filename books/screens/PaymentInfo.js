import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, icons, SHADOW, SIZES } from "../constants";
import { TextInputMask } from "react-native-masked-text";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const PaymentInfo = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [paymentDetails, setPaymentDetails] = React.useState({
    name: "",
    cardNumber: "",
    password: "",
    cvv: "",
    expiry: "",
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: COLORS.black,
              paddingTop: SIZES.font,
              paddingLeft: SIZES.font,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image
                source={icons.cancel}
                style={{ width: 25, height: 25, tintColor: COLORS.white }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingVertical: SIZES.padding2,
              paddingTop: SIZES.padding,
              paddingHorizontal: SIZES.font,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: COLORS.black,
            }}
          >
            <Text style={{ color: COLORS.white }}>
              <Text style={{ ...FONTS.body1 }}>$ </Text>
              <Text style={{ ...FONTS.h1, letterSpacing: 0.75 }}>205.45</Text>
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.lightGray,
                marginTop: SIZES.base,
                letterSpacing: 0.45,
              }}
            >
              Enola Holmes
            </Text>
          </View>

          <View style={{ backgroundColor: COLORS.black }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: SIZES.padding,
                backgroundColor: COLORS.secondary,
                borderTopLeftRadius: SIZES.padding2,
                borderTopRightRadius: SIZES.padding2,
                ...SHADOW.darkShadow,
              }}
            >
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.white,
                  flex: 1,
                  letterSpacing: 0.5,
                }}
              >
                Show Saved Cards
              </Text>

              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: COLORS.lightGray,
                }}
              >
                <Image
                  source={icons.arrowDown}
                  style={{ width: "70%", height: "70%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ backgroundColor: COLORS.secondary }}>
            <View
              style={{
                padding: SIZES.font,
                paddingHorizontal: SIZES.padding - 5,
                backgroundColor: COLORS.white,
                borderTopLeftRadius: SIZES.padding2,
                borderTopRightRadius: SIZES.padding2,
                ...SHADOW.darkShadow,
              }}
            >
              <View style={{ marginVertical: SIZES.base }}>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    marginVertical: SIZES.base,
                  }}
                >
                  Card Holder Name
                </Text>
                <View
                  style={{
                    width: "100%",
                    padding: SIZES.base,
                    backgroundColor: COLORS.gray,
                    borderRadius: SIZES.base,
                    backgroundColor: COLORS.lightGray2,
                  }}
                >
                  <TextInput
                    placeholder="John Doe"
                    style={{ ...FONTS.h4, color: COLORS.primary }}
                    value={paymentDetails.name}
                    onChangeText={(text) => {
                      setPaymentDetails({
                        ...paymentDetails,
                        name: text,
                      });
                    }}
                    style={{
                      width: "100%",
                      ...FONTS.body4,
                      color: COLORS.secondary,
                      letterSpacing: 0.55,
                    }}
                  />
                </View>
              </View>

              <View style={{ marginVertical: SIZES.base }}>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    marginVertical: SIZES.base,
                  }}
                >
                  Card Number
                </Text>
                <View
                  style={{
                    width: "100%",
                    padding: SIZES.base,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: SIZES.base,
                    backgroundColor: COLORS.lightGray2,
                  }}
                >
                  <TextInputMask
                    type={"credit-card"}
                    value={paymentDetails.cardNumber}
                    placeholder="0000 0000 0000 0000"
                    onChangeText={(text) => {
                      setPaymentDetails({
                        ...paymentDetails,
                        cardNumber: text,
                      });
                    }}
                    style={{ flex: 1, ...FONTS.h4, color: COLORS.secondary }}
                  />
                  <Image
                    source={icons.creditCard}
                    style={{ width: 25, height: 25 }}
                    resizeMode="cover"
                  />
                </View>
              </View>

              <View style={{ marginVertical: SIZES.base }}>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.lightGray,
                    marginVertical: SIZES.base,
                  }}
                >
                  Password
                </Text>
                <View
                  style={{
                    width: "100%",
                    padding: SIZES.base,
                    backgroundColor: COLORS.gray,
                    borderRadius: SIZES.base,
                    backgroundColor: COLORS.lightGray2,
                  }}
                >
                  <TextInput
                    secureTextEntry={true}
                    placeholder="#*$%@@%@"
                    style={{ ...FONTS.h4, color: COLORS.primary }}
                    value={paymentDetails.password}
                    onChangeText={(text) => {
                      setPaymentDetails({
                        ...paymentDetails,
                        password: text,
                      });
                    }}
                    style={{
                      width: "100%",
                      ...FONTS.h4,
                      color: COLORS.secondary,
                    }}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: SIZES.base,
                }}
              >
                <View style={{ flex: 1, marginRight: SIZES.base }}>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.lightGray,
                      marginVertical: SIZES.base,
                    }}
                  >
                    CVV2
                  </Text>
                  <View
                    style={{
                      width: "100%",
                      padding: SIZES.base,
                      backgroundColor: COLORS.gray,
                      borderRadius: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  >
                    <TextInputMask
                      placeholder="123"
                      type={"custom"}
                      options={{
                        mask: "999",
                      }}
                      value={paymentDetails.cvv}
                      keyboardType="numeric"
                      onChangeText={(text) => {
                        setPaymentDetails({
                          ...paymentDetails,
                          cvv: text,
                        });
                      }}
                      style={{
                        width: "100%",
                        ...FONTS.h4,
                        color: COLORS.secondary,
                      }}
                    />
                  </View>
                </View>

                <View style={{ flex: 1, marginLeft: SIZES.base }}>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.lightGray,
                      marginVertical: SIZES.base,
                    }}
                  >
                    Expiry Date
                  </Text>
                  <View
                    style={{
                      width: "100%",
                      padding: SIZES.base,
                      backgroundColor: COLORS.gray,
                      borderRadius: SIZES.base,
                      backgroundColor: COLORS.lightGray2,
                    }}
                  >
                    <TextInputMask
                      type={"datetime"}
                      placeholder="04 / 05"
                      options={{
                        format: "MM/YYYY",
                      }}
                      value={paymentDetails.expiry}
                      onChangeText={(text) => {
                        setPaymentDetails({
                          ...paymentDetails,
                          expiry: text,
                        });
                      }}
                      style={{
                        width: "100%",
                        ...FONTS.h4,
                        color: COLORS.secondary,
                      }}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: SIZES.font,
                }}
              >
                <Text style={{ ...FONTS.body3, color: COLORS.lightGray }}>
                  Save this Card
                </Text>
                <Switch
                  trackColor={{ false: COLORS.lightGray, true: COLORS.primary }}
                  thumbColor={COLORS.white}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => {
                    setIsEnabled((previousState) => !previousState);
                  }}
                  value={isEnabled}
                />
              </View>

              <View style={{ marginVertical: SIZES.font }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primary,
                    padding: SIZES.font,
                    borderRadius: SIZES.padding,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  activeOpacity={0.5}
                >
                  <Text
                    style={{
                      ...FONTS.h3,
                      color: COLORS.white,
                      letterSpacing: 0.55,
                    }}
                  >
                    Process Payment
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentInfo;
