import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { images, SIZES } from "../constants";

const plantsData = [
  {
    name: "Anthurium",
    imgUrl: images.anthurium,
  },
  {
    name: "Croton",
    imgUrl: images.croton,
  },
  {
    name: "Fruit Tree",
    imgUrl: images.fruittree,
  },
  {
    name: "Home Decor",
    imgUrl: images.homedecor,
  },
  {
    name: "Monstera",
    imgUrl: images.monstera,
  },
  {
    name: "Olive",
    imgUrl: images.olive,
  },
  {
    name: "Orchid",
    imgUrl: images.orchid,
  },
  {
    name: "Palm Tree",
    imgUrl: images.palm,
  },
  {
    name: "Philodendron",
    imgUrl: images.philodendron,
  },
];

const renderPlantsGrid = (itemData) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          width: 160,
          margin: 10,
          borderRadius: SIZES.base,
          padding: SIZES.font - 4,
          backgroundColor: "#E9F5EF",
        }}
        key={"plant-" + itemData.item.name}
      >
        <Image
          source={itemData.item.imgUrl}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 170,
            borderRadius: SIZES.base,
          }}
        />
        <Text
          style={{
            paddingHorizontal: SIZES.base,
            paddingTop: SIZES.base,
            fontFamily: "Roboto-Regular",
            color: "#0E5F13",
            textAlign: "left",
            textTransform: "capitalize",
          }}
        >
          {itemData.item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Explore = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.base,
      }}
    >
      <FlatList
        data={plantsData}
        keyExtractor={(item, index) => "plant-" + item.name}
        renderItem={renderPlantsGrid}
        numColumns={2}
      />
    </View>
  );
};

export default Explore;
