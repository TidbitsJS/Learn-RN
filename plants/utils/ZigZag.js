import React from "react";
import { Dimensions, Text, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { SIZES } from "../constants";
const { width } = Dimensions.get("window");

const renderZigZagView = () => {
  let nodes = [];
  for (var i = 0; i < 40; i++) {
    const point = `${20 * i},0 ${20 * i + 10},10 ${20 * (i + 1)},0`;
    nodes.push(
      <Polygon
        points={point}
        key={point}
        fill="white"
        stroke="white"
        strokeWidth="1"
      />
    );
  }
  return nodes;
};

const ZigZag = () => {
  return (
    <View
      style={{
        width,
        alignItems: "center",
        paddingBottom: SIZES.base,
      }}
    >
      <Svg height={10} width={width}>
        {renderZigZagView()}
      </Svg>
    </View>
  );
};

export default ZigZag;
