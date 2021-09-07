import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tags = (props) => {
  return (
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
        {props.duration}m
      </Text>
      <Text
        style={{
          ...styles.infoText,
          color: "#0008ff",
          backgroundColor: "#d1d9ff",
          textTransform: "capitalize",
        }}
      >
        {props.complexity}
      </Text>
      <Text
        style={{
          ...styles.infoText,
          color: "#ff7300",
          backgroundColor: "#ffebc9",
          textTransform: "capitalize",
        }}
      >
        {props.affordability}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Tags;
