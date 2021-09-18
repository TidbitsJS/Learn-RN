import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import ExploreHeader from "../components/ExploreHeader";
import PlantGridItem from "../components/PlantGridItem";
import { COLORS, SIZES } from "../constants";
import { plantsData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Explore = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.primary} />
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
    </SafeAreaView>
  );
};

export default Explore;
