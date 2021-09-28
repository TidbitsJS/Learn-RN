import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import {
  setSelectCategoryByName,
  prcoessCategoryDataToDisplay,
} from "../utils/common";

const ExpenseSummaryItem = ({
  item,
  categories,
  selectedCategory,
  setSelectedCategory,
}) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      height: 40,
      paddingHorizontal: SIZES.radius,
      borderRadius: 10,
      backgroundColor:
        selectedCategory && selectedCategory.name === item.name
          ? item.color
          : COLORS.white,
    }}
    onPress={() => {
      let categoryName = item.name;
      setSelectCategoryByName(categoryName, categories, setSelectedCategory);
    }}
  >
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <View
        style={{
          width: 20,
          height: 20,
          backgroundColor:
            selectedCategory && selectedCategory.name === item.name
              ? COLORS.white
              : item.color,
          borderRadius: 5,
        }}
      />

      <Text
        style={{
          marginLeft: SIZES.base,
          color:
            selectedCategory && selectedCategory.name === item.name
              ? COLORS.white
              : COLORS.primary,
          ...FONTS.h3,
        }}
      >
        {item.name}
      </Text>
    </View>

    <View style={{ justifyContent: "center" }}>
      <Text
        style={{
          color:
            selectedCategory && selectedCategory.name === item.name
              ? COLORS.white
              : COLORS.primary,
          ...FONTS.h3,
        }}
      >
        {item.y} USD - {item.label}
      </Text>
    </View>
  </TouchableOpacity>
);

const HomeExpenseSummary = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  let data = prcoessCategoryDataToDisplay(categories);

  return (
    <View style={{ padding: SIZES.padding }}>
      <FlatList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <ExpenseSummaryItem
            item={item}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      />
    </View>
  );
};

export default HomeExpenseSummary;
