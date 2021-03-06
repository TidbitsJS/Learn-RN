import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons, images } from "../../constants";
import HeadTitle from "../common/HeadTitle";

const GameHeader = ({ navigation }) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="games" navigation={navigation} />

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
            Choose
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              fontFamily: "Rubik-ExtraBold",
            }}
          >
            Your Game
          </Text>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <Image
            source={icons.search}
            style={{ width: 25, height: 25 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 150,
          borderRadius: SIZES.medium,
          marginTop: SIZES.font,
        }}
      >
        <Image
          source={images.gamebanner}
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

export default GameHeader;
