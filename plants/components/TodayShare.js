import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";

const TodayShare = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.lightGray,
      }}
    >
      <View
        style={{
          flex: 1,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
              Today's Share
            </Text>
            <TouchableOpacity
              onPress={() => console.log("See all on pressed.")}
            >
              <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: SIZES.base * 2,
              paddingVertical: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => {
                  navigation.navigate("PlantDetails", {
                    plantId: 5,
                  });
                }}
              >
                <Image
                  source={images.plant5}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ flex: 1, marginTop: SIZES.font }}
                onPress={() =>
                  navigation.navigate("PlantDetails", {
                    plantId: 6,
                  })
                }
              >
                <Image
                  source={images.plant6}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1.3 }}>
              <TouchableOpacity
                style={{ flex: 1, marginLeft: SIZES.font }}
                onPress={() => {
                  navigation.navigate("PlantDetails", {
                    plantId: 7,
                  });
                }}
              >
                <Image
                  source={images.plant7}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TodayShare;
