import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import Requirements from "../components/Requirements";
import { COLORS, FONTS, images, SIZES } from "../constants";

const PlantDetail = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image
            source={images.bannerBg}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 250,
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            marginTop: -40,
            backgroundColor: COLORS.lightGray,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingVertical: SIZES.padding,
          }}
        >
          <Text
            style={{
              paddingHorizontal: SIZES.padding,
              color: COLORS.secondary,
              ...FONTS.h2,
            }}
          >
            Requirements
          </Text>

          <Requirements />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
