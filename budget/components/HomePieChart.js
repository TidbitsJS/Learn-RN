import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { FONTS, SIZES } from "../constants";

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

const HomePieChart = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  let chartData = prcoessCategoryDataToDisplay(categories);
  let colorScales = chartData.map((item) => item.color);
  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0
  );

  if (Platform.OS === "ios") {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <VictoryPie
          data={chartData}
          labels={(datum) => `${datum.y}`}
          radius={({ datum }) =>
            selectedCategory && selectedCategory.name === datum.name
              ? SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZES.width * 0.4 + innerRadius) / 2.5
          }
          style={{
            labels: { fill: "white" },
            parent: {
              ...styles.shadow,
            },
          }}
          width={SIZES.width * 0.8}
          height={SIZES.width * 0.8}
          colorScale={colorScales}
          events={[
            {
              target: "data",
              eventHandlers: {
                onPress: () => {
                  return [
                    {
                      target: "labels",
                      mutation: (props) => {
                        let categoryName = chartData[props.index].name;
                        setSelectCategoryByName(
                          categoryName,
                          categories,
                          setSelectedCategory
                        );
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />

        <View style={{ position: "absolute", top: "42%", left: "42%" }}>
          <Text style={{ ...FONTS.h1, textAlign: "center" }}>
            {totalExpenseCount}
          </Text>
          <Text style={{ ...FONTS.body3, textAlign: "center" }}>Expenses</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Svg
          width={SIZES.width}
          height={SIZES.width}
          style={{ width: "100%", height: "auto" }}
        >
          <VictoryPie
            standalone={false}
            data={chartData}
            labels={(datum) => `${datum.y}`}
            radius={({ datum }) =>
              selectedCategory && selectedCategory.name === datum.name
                ? SIZES.width * 0.4
                : SIZES.width * 0.4 - 10
            }
            innerRadius={70}
            labelRadius={({ innerRadius }) =>
              (SIZES.width * 0.4 + innerRadius) / 2.5
            }
            style={{
              labels: { fill: "white" },
              parent: {
                ...styles.shadow,
              },
            }}
            width={SIZES.width}
            height={SIZES.width}
            colorScale={colorScales}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: () => {
                    return [
                      {
                        target: "labels",
                        mutation: (props) => {
                          let categoryName = chartData[props.index].name;
                          setSelectCategoryByName(
                            categoryName,
                            categories,
                            setSelectedCategory
                          );
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </Svg>
        <View style={{ marginTop: -SIZES.padding }}>
          <Text style={{ ...FONTS.h1, textAlign: "center" }}>
            {totalExpenseCount}
          </Text>
          <Text style={{ ...FONTS.body3, textAlign: "center" }}>Expenses</Text>
        </View>
      </View>
    );
  }
};

export default HomePieChart;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
