import React from "react";
import { View } from "react-native";
import { SIZES } from "../../constants";
import BalanceCard from "../common/BalanceCard";
import HeadTitle from "../common/HeadTitle";

const TransferWalletHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="transfer to wallet" navigation={navigation} />
      <BalanceCard />
    </View>
  );
};

export default TransferWalletHeader;
