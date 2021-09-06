import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

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
            <View style={styles.info}>
              <Text
                style={{
                  ...styles.infoText,
                  color: "#046e26",
                  borderColor: "#046e26",
                  borderWidth: 1.2,
                  borderRadius: 12,
                  fontWeight: "bold",
                }}
              >
                {props.item.duration}m
              </Text>
              <Text
                style={{
                  ...styles.infoText,
                  color: "#0008ff",
                  backgroundColor: "#d1d9ff",
                  textTransform: "capitalize",
                }}
              >
                {props.item.complexity}
              </Text>
              <Text
                style={{
                  ...styles.infoText,
                  color: "#ff7300",
                  backgroundColor: "#ffebc9",
                  textTransform: "capitalize",
                }}
              >
                {props.item.affordability}
              </Text>
            </View>
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
    color: "#071645",
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
  info: {
    flexDirection: "row",
    paddingBottom: 5,
    textAlign: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
  },
  infoText: {
    textAlignVertical: "center",
    textAlign: "center",
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    fontSize: 10,
    letterSpacing: 0.7,
    fontFamily: "open-sans",
  },
});

export default MealItem;
