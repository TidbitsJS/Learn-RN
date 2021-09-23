import React from "react";
import { Text, View } from "react-native";
import { SIZES, FONTS, COLORS, images } from "../constants";
import OrderHistoryItem from "./OrderHistoryItem";

const OrderHistoryGroup = ({ date }) => {
  return (
    <View style={{ width: "100%", marginVertical: SIZES.base }}>
      <Text
        style={{
          marginBottom: SIZES.font,
          ...FONTS.body4,
          color: COLORS.secondary,
          fontFamily: "Roboto-Bold",
        }}
      >
        {date}
      </Text>
      <View style={{ width: "100%" }}>
        <OrderHistoryItem
          imgUrl={images.monstera}
          title="Monstera & 5 more"
          status="delivered"
          amount={1543.32}
          date="25/09/21"
        />
        <OrderHistoryItem
          imgUrl={images.anthurium}
          title="Anthurium"
          status="delivered"
          amount={521.45}
          date="15/03/21"
        />
        <OrderHistoryItem
          imgUrl={images.zzplant}
          title="Zz Plant & 2 nore"
          status="pending"
          amount={5221.41}
          date="07/07/21"
        />
        <OrderHistoryItem
          imgUrl={images.croton}
          title="Croton & Oliver"
          status="Cancelled"
          amount={1543.21}
          date="08/02/21"
        />
      </View>
    </View>
  );
};

export default OrderHistoryGroup;
