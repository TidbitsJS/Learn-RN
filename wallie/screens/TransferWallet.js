import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CurrencyBtn from "../components/common/CurrencyBtn";
import PaymentModal from "../components/common/PaymentModal";
import CustomTextInput from "../components/CustomTextInput";
import TransferToHeader from "../components/transfer/TransfeToHeader";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { useStateContext } from "../context/StateContext";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TransferWalletOption = ({ title, iconUrl, bgColor, tintColor }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      margin: SIZES.base,
    }}
  >
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.padding,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={iconUrl}
        style={{
          width: "50%",
          height: "50%",
          tintColor: tintColor,
        }}
      />
    </View>
    <Text
      style={{ ...FONTS.body4, color: COLORS.black, marginLeft: SIZES.base }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const TransferWallet = ({ navigation }) => {
  const { setAnimationType } = useStateContext();
  const [user, setUser] = React.useState({
    id: "",
    code: "",
    amount: "",
    message: "",
  });

  const [processPayment, setProcessPayment] = React.useState(false);

  const handleClose = () => setProcessPayment(false);
  const handleNavigate = () => {
    navigation.navigate("PasswordConfirm", {
      title: "Transfer Success",
    });
    setProcessPayment(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {processPayment && (
        <PaymentModal
          handleClose={handleClose}
          handleNavigate={handleNavigate}
          btnTitle="Transfer"
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <TransferToHeader
            title="Transfer to wallet"
            navigation={navigation}
          />

          <View style={{ marginVertical: SIZES.font }}>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              Transfer Detail
            </Text>

            <View style={{ marginVertical: SIZES.medium }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>
                Wallet Id
              </Text>
              <CustomTextInput
                placeholderText="Enter Wallet ID"
                keyboardType="default"
                value={user.id}
                setValue={(text) => setUser({ ...user, id: text })}
                bottomBorder={true}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TransferWalletOption
                title="Phone Number"
                iconUrl={icons.phone}
                bgColor={COLORS.lightpurple}
                tintColor={COLORS.purple}
              />
              <TransferWalletOption
                title="QR Code"
                iconUrl={icons.qrcode}
                bgColor={COLORS.lightGreen}
                tintColor={COLORS.primary}
              />
            </View>

            <View style={{ marginVertical: SIZES.medium }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>
                Received Wallet Code
              </Text>
              <CustomTextInput
                placeholderText="Enter Received Wallet Code"
                keyboardType="numeric"
                value={user.code}
                setValue={(text) => setUser({ ...user, code: text })}
                bottomBorder={true}
              />
            </View>

            <View style={{ marginVertical: SIZES.base }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>Amount</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 0.5,
                  borderBottomColor: COLORS.gray,
                }}
              >
                <CustomTextInput
                  placeholderText="20.00"
                  keyboardType="numeric"
                  value={user.amount}
                  setValue={(text) => setUser({ ...user, amount: text })}
                />
                <CurrencyBtn />
              </View>
            </View>

            <View style={{ marginVertical: SIZES.font }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>Message</Text>
              <CustomTextInput
                placeholderText="Enter Messages"
                value={user.message}
                setValue={(text) => setUser({ ...user, message: text })}
                bottomBorder={true}
              />
            </View>
          </View>

          <View
            style={{
              marginVertical: SIZES.medium,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.lightGreen,
                padding: SIZES.padding2,
                borderRadius: SIZES.padding2,
              }}
              onPress={() => {
                setProcessPayment(true);
                setAnimationType("zoomIn");
              }}
            >
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.green,
                  textAlign: "center",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferWallet;
