import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SIZES, FONTS, COLORS, icons, images } from "../constants";

const TransferHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: SIZES.medium,
        }}
      >
        <TouchableOpacity
          style={{ marginRight: SIZES.font }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.primary,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
          }}
        >
          Transfer
        </Text>
      </View>

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
