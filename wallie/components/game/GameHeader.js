import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons, images } from "../../constants";

const GameHeader = ({ navigation }) => {
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
          Games
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
