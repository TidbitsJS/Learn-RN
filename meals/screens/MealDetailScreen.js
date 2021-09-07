import React from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Tags from "../components/Tags";
import Colors from "../constants/Colors";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Tags
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
      <View style={styles.desc}>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient, index) => (
          <Text style={styles.line} key={ingredient + index}>
            <Text style={{ color: Colors.primaryColor }}>{"\u25CF"}</Text>{" "}
            {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.desc}>
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map((step, index) => (
          <Text style={styles.line} key={step + index}>
            <Text style={{ fontWeight: "bold", color: Colors.primaryColor }}>
              {index + 1}]{" "}
            </Text>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="star"
          onPress={() => {
            console.log("Mark as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 270,
  },
  details: {
    padding: 10,
  },
  desc: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    paddingBottom: 10,
    color: Colors.textColor,
    letterSpacing: 0.5,
  },
  line: {
    fontFamily: "open-sans",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 2,
    color: Colors.textColor,
    letterSpacing: 0.6,
    lineHeight: 23,
  },
});

export default MealDetailScreen;
