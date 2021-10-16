import React from "react";
import { View, Text } from "react-native";

const HomeBookTag = ({ tagName, tagColor, tagBgColor, ...props }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: tagBgColor,
        borderRadius: 5,
        ...props,
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
