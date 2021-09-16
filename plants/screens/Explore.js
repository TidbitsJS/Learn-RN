import React from "react";
import { View, FlatList } from "react-native";
import ExploreHeader from "../components/ExploreHeader";
import PlantGridItem from "../components/PlantGridItem";
import { SIZES } from "../constants";
import { plantsData } from "../data/dummy";

const Explore = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={plantsData.slice(7)}
        keyExtractor={(item) => "plant-" + item.name}
        renderItem={({ item }) => (
          <PlantGridItem item={item} navigation={navigation} />
        )}
        numColumns={2}
        style={{
          marginBottom: SIZES.font,
        }}
        ListHeaderComponent={() => <ExploreHeader />}
      />
    </View>
  );
};

export default Explore;
