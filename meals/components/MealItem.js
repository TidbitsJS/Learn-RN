import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";
import Tags from "./Tags";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealRow}>
            <ImageBackground
              source={{ uri: props.item.imageUrl }}
              style={styles.bgImage}
            ></ImageBackground>
          </View>
          <View style={styles.mealDetail}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.item.title}
              </Text>
            </View>
            <Tags
              duration={props.item.duration}
              complexity={props.item.complexity}
              affordability={props.item.affordability}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginVertical: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 0.5,
  },
  bgImage: {
    width: "100%",
    height: 250,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 17,
    color: Colors.textColor,
    letterSpacing: 0.5,
  },
  titleContainer: {
    paddingBottom: 12,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealDetail: {
    padding: 10,
    flexDirection: "column",
  },
});

export default MealItem;
