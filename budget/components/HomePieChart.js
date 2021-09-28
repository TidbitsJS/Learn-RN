import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { VictoryPie } from "victory-native";
import { Svg } from "react-native-svg";
import { FONTS, SIZES } from "../constants";
import {
  prcoessCategoryDataToDisplay,
  setSelectCategoryByName,
} from "../utils/common";

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

        <View style={{ position: "absolute", top: "42%", left: "40%" }}>
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
        <View style={{ position: "absolute", top: "42%", left: "40%" }}>
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
