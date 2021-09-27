import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

function prcoessCategoryDataToDisplay(categories) {
  let chartData = categories.map((item) => {
    let confirmExpenses = item.expenses.filter((a) => a.status === "C");
    let total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0);

    return {
      name: item.name,
      y: total,
      expenseCount: confirmExpenses.length,
      color: item.color,
      id: item.id,
    };
  });

  let filterChartData = chartData.filter((item) => item.y > 0);

  let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0);

  let finalChartData = filterChartData.map((item) => {
    let percentage = ((item.y / totalExpense) * 100).toFixed(0);
    return {
      label: `${percentage}`,
      y: Number(item.y),
      expenseCount: item.expenseCount,
      color: item.color,
      name: item.name,
      id: item.id,
    };
  });

  return finalChartData;
}

function setSelectCategoryByName(name, categories, setSelectedCategory) {
  console.log(categories);
  let category = categories.filter((a) => a.name === name);
  setSelectedCategory(category[0]);
}

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
