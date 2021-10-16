import React from "react";
import { View, Text } from "react-native";

const HomeBookTag = ({ tagName, tagColor, tagBgColor }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginRight: 5,
        marginTop: 5,
        backgroundColor: tagBgColor,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          fontFamily: "Roboto-Bold",
          color: tagColor,
          letterSpacing: 0.5,
        }}
      >
        {tagName}
      </Text>
    </View>
  );
};

export default HomeBookTag;
