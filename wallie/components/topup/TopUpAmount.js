import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { COLORS, SIZES, FONTS } from "../../constants";
import TransferField from "../common/TransferField";

const amountTokens = [
  {
    bgColor: "#51DA88",
    amount: 20,
  },
  {
    bgColor: "#3BCE77",
    amount: 50,
  },
  {
    bgColor: "#26C165",
    amount: 100,
  },
  {
    bgColor: "#14B254",
    amount: 200,
  },
];

const AmountItem = ({ bgColor, amount, handleTokenPress }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      minWidth: "21%",
      maxWidth: "22%",
      height: 70,
      borderRadius: SIZES.medium * 1.25,
      margin: 5,
      backgroundColor: bgColor,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={() => handleTokenPress(amount)}
  >
    <Text style={{ ...FONTS.h3, color: COLORS.white }}>$ {amount}</Text>
  </TouchableOpacity>
);

const TopUpAmount = () => {
  const [amount, setAmount] = React.useState(20);

  const handleTokenPress = (amount) => setAmount(amount);

  return (
    <>
      <TransferField
        title="Amount"
        placeholderText="20.00"
        keyboardType="numeric"
        value={amount}
        setValue={(text) => setAmount(text)}
        bottomBorder={true}
      />

      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          marginVertical: SIZES.font,
        }}
      >
        {amountTokens.map((token) => (
          <AmountItem
            key={`token-${token.amount}`}
            {...token}
            handleTokenPress={handleTokenPress}
          />
        ))}
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Slider
          style={{ width: "100%" }}
          minimumValue={0}
          maximumValue={200}
          value={amount}
          onValueChange={(value) => setAmount(value)}
          minimumTrackTintColor={COLORS.lightGreen}
          maximumTrackTintColor={COLORS.gray}
          thumbTintColor={COLORS.primary}
          tapToSeek={true}
        />
      </View>
    </>
  );
};

export default TopUpAmount;
