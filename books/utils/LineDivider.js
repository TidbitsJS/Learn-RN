import React from "react";
import { View } from "react-native";
import { SIZES } from "../constants";

const LineDivider = ({ color }) => {
  return (
    <View
      style={{
        width: 1,
        paddingVertical: SIZES.font,
        backgroundColor: color,
      }}
    />
  );
};

export default LineDivider;
