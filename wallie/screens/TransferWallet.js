import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PaymentModal from "../components/common/PaymentModal";
import TransferToHeader from "../components/transfer/TransfeToHeader";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { useStateContext } from "../context/StateContext";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import TransferToWay from "../components/transfer/TransferToWay";
import TransferField from "../components/common/TransferField";

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

            <TransferField
              title="Wallet Id"
              placeholderText="Enter Wallet ID"
              keyboardType="default"
              value={user.id}
              setValue={(text) => setUser({ ...user, id: text })}
              bottomBorder={true}
              isIcon={false}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: SIZES.base,
              }}
            >
              <TransferToWay
                title="Phone Number"
                iconUrl={icons.phone}
                bgColor={COLORS.lightpurple}
                tintColor={COLORS.purple}
              />
              <TransferToWay
                title="QR Code"
                iconUrl={icons.qrcode}
                bgColor={COLORS.lightGreen}
                tintColor={COLORS.primary}
              />
            </View>

            <TransferField
              title="Received Wallet Code"
              placeholderText="Enter Received Wallet Code"
              keyboardType="numeric"
              value={user.code}
              setValue={(text) => setUser({ ...user, code: text })}
              bottomBorder={true}
            />

            <TransferField
              title="Amount"
              placeholderText="20.00"
              keyboardType="numeric"
              value={user.amount}
              setValue={(text) => setUser({ ...user, amount: text })}
              isIcon={true}
            />

            <TransferField
              title="Message"
              placeholderText="Enter Messages"
              keyboardType="default"
              value={user.message}
              setValue={(text) => setUser({ ...user, message: text })}
              bottomBorder={true}
            />
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
