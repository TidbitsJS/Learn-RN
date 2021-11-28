import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons, images } from "../../constants";

const MoneyHistoryHeader = ({ navigation }) => {
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
          Money History
        </Text>
      </View>

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
