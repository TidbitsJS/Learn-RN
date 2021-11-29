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
import PaymentModal from "../components/common/PaymentModal";
import TopUpAmount from "../components/topup/TopUpAmount";
import TopUpHeader from "../components/topup/TopUpHeader";
import { COLORS, FONTS, SIZES } from "../constants";
import { moneyHistoryData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const MoneyHistoryItem = ({ title, imgUrl, isActive, handleSelected }) => (
  <TouchableOpacity
    style={{
      width: 80,
      height: 50,
      padding: SIZES.padding,
      borderRadius: SIZES.padding,
      margin: SIZES.base,
      backgroundColor: isActive[title] ? COLORS.lightGreen : COLORS.lightGray,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={() => handleSelected(title)}
  >
    <Image
      source={imgUrl}
      style={{ width: "80%", height: "80%" }}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

const TopUp = ({ navigation }) => {
  const [isActive, setIsActive] = React.useState({
    mastercard: false,
  });
  const [processPayment, setProcessPayment] = React.useState(false);

  const handleSelected = (item) => {
    setIsActive({ [item]: true });
  };

  const handleClose = () => setProcessPayment(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      {processPayment && (
        <PaymentModal
          handleClose={handleClose}
          handleNavigate={() => {
            navigation.navigate("PasswordConfirm");
            setProcessPayment(false);
          }}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <TopUpHeader navigation={navigation} />
          <TopUpAmount />

          <View
            style={{
              marginTop: SIZES.medium * 1.5,
              marginBottom: SIZES.medium,
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              Money History
            </Text>

            <FlatList
              data={moneyHistoryData}
              contentContainerStyle={{ marginVertical: SIZES.base }}
              renderItem={({ item }) => (
                <MoneyHistoryItem
                  {...item}
                  isActive={isActive}
                  handleSelected={handleSelected}
                />
              )}
              keyExtractor={(item) => `moneyhistory-${item.title}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.lightGreen,
                marginTop: SIZES.medium * 2,
                padding: SIZES.font,
                borderRadius: SIZES.medium * 1.25,
              }}
              onPress={() => setProcessPayment(true)}
            >
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.primary,
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

export default TopUp;
