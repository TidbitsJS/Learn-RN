import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, icons, FONTS, SIZES } from "../constants";

const PaymentMethodItem = ({
  iconUrl,
  title,
  selectPaymentMethod,
  setSelectPaymentMethod,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: SIZES.base,
        marginVertical: SIZES.font,
      }}
      onPress={() => setSelectPaymentMethod(title)}
    >
      <Image
        source={iconUrl}
        style={{ width: 25, height: 25, ...props }}
        resizeMode="cover"
      />
      <Text
        style={{
          ...FONTS.body4,
          color: COLORS.white,
          marginLeft: SIZES.font,
          flex: 1,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          width: 18,
          height: 18,
          borderRadius: 10,
          borderWidth: 1,
          borderColor:
            selectPaymentMethod === title ? COLORS.primary : COLORS.lightGray,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "70%",
            height: "70%",
            borderRadius: 10,
            backgroundColor:
              selectPaymentMethod === title ? COLORS.primary : COLORS.lightGray,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const PaymentMethod = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [selectPaymentMethod, setSelectPaymentMethod] =
    React.useState("Apple Pay");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: SIZES.font,
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={icons.back_arrow_icon}
                style={{ width: 20, height: 20, tintColor: COLORS.white }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                Payment Method
              </Text>
            </View>
          </View>

          <View style={{ margin: SIZES.font }}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                marginVertical: SIZES.base,
                textAlign: "center",
              }}
            >
              Select your payment method
            </Text>

            <View style={{ marginVertical: SIZES.font }}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                  marginTop: SIZES.base,
                }}
              >
                Add a new credit/debit card
              </Text>
              <PaymentMethodItem
                iconUrl={icons.paypal}
                title="Paypal"
                selectPaymentMethod={selectPaymentMethod}
                setSelectPaymentMethod={setSelectPaymentMethod}
              />
              <PaymentMethodItem
                iconUrl={icons.mastercard}
                title="Credit Card"
                selectPaymentMethod={selectPaymentMethod}
                setSelectPaymentMethod={setSelectPaymentMethod}
              />
              <PaymentMethodItem
                iconUrl={icons.apple}
                title="Apple Pay"
                selectPaymentMethod={selectPaymentMethod}
                setSelectPaymentMethod={setSelectPaymentMethod}
                tintColor={COLORS.white}
              />
              <PaymentMethodItem
                iconUrl={icons.google}
                title="Google Pay"
                selectPaymentMethod={selectPaymentMethod}
                setSelectPaymentMethod={setSelectPaymentMethod}
              />
              {load && (
                <>
                  <PaymentMethodItem
                    iconUrl={icons.bhim}
                    title="Bhim UPI"
                    selectPaymentMethod={selectPaymentMethod}
                    setSelectPaymentMethod={setSelectPaymentMethod}
                  />
                  <PaymentMethodItem
                    iconUrl={icons.paytm}
                    title="Paytm"
                    selectPaymentMethod={selectPaymentMethod}
                    setSelectPaymentMethod={setSelectPaymentMethod}
                  />
                </>
              )}
              <TouchableOpacity
                onPress={() => setLoad(!load)}
                style={{
                  margin: SIZES.base,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h4,
                    color: COLORS.primary,
                    textAlign: "right",
                    letterSpacing: 0.78,
                  }}
                >
                  {load ? "Show Less" : "Show More"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: SIZES.font }}>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                  marginTop: SIZES.base,
                }}
              >
                Webmoney
              </Text>
              <PaymentMethodItem
                iconUrl={icons.webmoney}
                title="WebMoney"
                selectPaymentMethod={selectPaymentMethod}
                setSelectPaymentMethod={setSelectPaymentMethod}
              />
              <PaymentMethodItem
                iconUrl={icons.bitcoin}
                title="Bitcoin"
                selectPaymentMethod={selectPaymentMethod}
                setSelectPaymentMethod={setSelectPaymentMethod}
              />
            </View>

            <View
              style={{
                marginVertical: SIZES.font,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.white,
                  letterSpacing: 0.55,
                }}
              >
                Send Receipt to your Email
              </Text>
              <Switch
                trackColor={{ false: COLORS.lightGray, true: COLORS.primary }}
                thumbColor={COLORS.white}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
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
                  style={{ ...FONTS.h3, color: COLORS.white, letterSpacing: 1 }}
                >
                  Pay Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethod;
