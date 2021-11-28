import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { COLORS, icons, SIZES, FONTS } from "../../constants";

const HeadTitle = ({ title, navigation }) => {
  return (
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
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default HeadTitle;
