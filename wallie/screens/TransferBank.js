import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import TransferToHeader from "../components/transfer/TransfeToHeader";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import TransferToWay from "../components/transfer/TransferToWay";
import CustomTextInput from "../components/CustomTextInput";
import CurrencyBtn from "../components/common/CurrencyBtn";

const bankOptions = [
  {
    id: 1,
    name: "dbsbank",
    iconUrl: icons.dbsbank,
  },
  {
    id: 2,
    name: "rbcbank",
    iconUrl: icons.rbcbank,
  },
  {
    id: 3,
    name: "tdbank",
    iconUrl: icons.tdbank,
  },
  {
    id: 4,
    name: "bcabank",
    iconUrl: icons.bcabank,
  },
];

const BankTag = ({ item, active, setActive }) => (
  <TouchableOpacity
    style={{
      paddingVertical: SIZES.base,
      paddingHorizontal: SIZES.font,
      borderRadius: SIZES.base,
      backgroundColor: active[item.name] ? COLORS.lightGreen : COLORS.lightGray,
      justifyContent: "center",
      alignItems: "center",
      margin: SIZES.base,
    }}
    onPress={() => setActive({ [item.name]: true })}
  >
    <Image
      source={item.iconUrl}
      style={{ width: 50, height: 25 }}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const TransferBank = ({ navigation }) => {
  const [active, setActive] = React.useState({
    dbsbank: true,
  });

  const [user, setUser] = React.useState({
    account: "",
    amount: "",
    message: "",
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <TransferToHeader title="transfer to bank" navigation={navigation} />

          <View style={{ marginVertical: SIZES.font }}>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              Transfer Detail
            </Text>

            <View style={{ marginVertical: SIZES.medium }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>
                Choose Bank
              </Text>

              <FlatList
                data={bankOptions}
                keyExtractor={(item) => `bank-${item.id}`}
                renderItem={({ item }) => (
                  <BankTag item={item} active={active} setActive={setActive} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginVertical: SIZES.base }}
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

              <View style={{ marginVertical: SIZES.medium }}>
                <Text style={{ ...FONTS.h4, color: COLORS.black }}>
                  Account Number
                </Text>
                <CustomTextInput
                  placeholderText="Enter Account Number"
                  keyboardType="numeric"
                  value={user.account}
                  setValue={(text) => setUser({ ...user, account: text })}
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
                <Text style={{ ...FONTS.h4, color: COLORS.black }}>
                  Message
                </Text>
                <CustomTextInput
                  placeholderText="Enter Messages"
                  value={user.message}
                  setValue={(text) => setUser({ ...user, message: text })}
                  bottomBorder={true}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferBank;
