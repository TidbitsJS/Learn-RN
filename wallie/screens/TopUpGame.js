import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TopUpGameHeader from "../components/game/TopUpGameHeader";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { diamondTokens } from "../data/dummy";
import CurrencyBtn from "../components/common/CurrencyBtn";
import { useStateContext } from "../context/StateContext";
import PaymentModal from "../components/common/PaymentModal";

const DiamondTokenCard = ({ item, active, setActive }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: active[item.title]
        ? COLORS.lightGreen
        : COLORS.lightGray,
      paddingVertical: SIZES.base,
      paddingHorizontal: SIZES.padding,
      margin: 5,
      borderRadius: SIZES.padding,
    }}
    onPress={() => setActive({ [item.title]: true })}
  >
    <Image
      source={icons.diamond}
      style={{ width: 15, height: 15 }}
      resizeMode="cover"
    />
    <Text
      style={{
        ...FONTS.h4,
        color: COLORS.black,
        marginLeft: SIZES.base,
      }}
    >
      {item.amount}
    </Text>
  </TouchableOpacity>
);

const TopUpGame = ({ navigation }) => {
  const { setAnimationType } = useStateContext();
  const [user, setUser] = React.useState({
    id: "",
    amount: 0,
  });

  const [active, setActive] = React.useState({
    diamond20: true,
  });

  const [processPayment, setProcessPayment] = React.useState(false);

  const handleClose = () => setProcessPayment(false);
  const handleNavigate = () => {
    navigation.navigate("PasswordConfirm", {
      title: "Top Up Success",
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
          title="Top Up Success"
          handleClose={handleClose}
          handleNavigate={handleNavigate}
        />
      )}
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <TopUpGameHeader navigation={navigation} />

          <View style={{ marginVertical: SIZES.font }}>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              Top Up Detail
            </Text>

            <View style={{ marginVertical: SIZES.medium }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>User Id</Text>
              <TextInput
                placeholder="Enter User ID"
                value={user.id}
                onChangeText={(text) => setUser({ ...user, id: text })}
                placeholderTextColor={COLORS.darkgray2}
                style={{
                  ...FONTS.body4,
                  color: COLORS.black,
                  borderBottomWidth: 0.5,
                  borderBottomColor: COLORS.gray,
                  paddingVertical: SIZES.base,
                }}
              />
            </View>

            <View style={{ marginVertical: SIZES.base }}>
              <Text style={{ ...FONTS.h4, color: COLORS.black }}>Diamonds</Text>

              <FlatList
                data={diamondTokens}
                renderItem={({ item }) => (
                  <DiamondTokenCard
                    item={item}
                    active={active}
                    setActive={setActive}
                  />
                )}
                keyExtractor={(item) => `diamond-${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginVertical: SIZES.base }}
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
                <TextInput
                  placeholder="20.00"
                  keyboardType="numeric"
                  value={user.amount.toString()}
                  onChangeText={(text) => setUser({ ...user, amount: text })}
                  placeholderTextColor={COLORS.darkgray2}
                  style={{
                    ...FONTS.body4,
                    flex: 1,
                    color: COLORS.black,
                    paddingVertical: SIZES.base,
                  }}
                />
                <CurrencyBtn />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: SIZES.padding,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.red }}>
              Discount 50%
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.red }}>$ 0.75</Text>
          </View>

          <View
            style={{
              marginTop: SIZES.medium * 2,
              marginBottom: SIZES.medium,
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

export default TopUpGame;
