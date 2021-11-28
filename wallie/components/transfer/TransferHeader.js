import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../../constants";
import HeadTitle from "../common/HeadTitle";

const TransferHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="transfer" navigation={navigation} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.base,
        }}
      >
        <View>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              fontFamily: "Rubik-ExtraBold",
            }}
          >
            Where
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              fontFamily: "Rubik-ExtraBold",
            }}
          >
            to Send?
          </Text>
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: 40,
            height: 40,
            backgroundColor: COLORS.lightGray,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
          }}
        >
          <Image
            source={icons.code}
            style={{ width: "60%", height: "60%", tintColor: COLORS.black }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransferHeader;
