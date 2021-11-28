import React from "react";
import { View, Image } from "react-native";
import { SIZES, images } from "../../constants";
import HeadTitle from "../common/HeadTitle";

const MoneyHistoryHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="money history" navigation={navigation} />

      <View
        style={{
          height: 150,
          borderRadius: SIZES.medium,
          marginVertical: SIZES.font,
        }}
      >
        <Image
          source={images.foodbanner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SIZES.medium,
          }}
        />
      </View>
    </View>
  );
};

export default MoneyHistoryHeader;
