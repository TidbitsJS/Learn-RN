import React from "react";
import { View } from "react-native";
import HeadTitle from "../common/HeadTitle";
import { SIZES } from "../../constants";
import BalanceCard from "../common/BalanceCard";

const TopUpGameHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="top up game" navigation={navigation} />
      <BalanceCard />
    </View>
  );
};

export default TopUpGameHeader;
