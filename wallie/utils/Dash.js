import React from "react";
import { Dimensions, View } from "react-native";
import Svg, { Line } from "react-native-svg";
const { width } = Dimensions.get("window");

const Dash = ({ strokeColor, ...props }) => {
  return (
    <View
      style={{
        width,
        alignItems: "center",
        justifyContent: "center",
        ...props,
      }}
    >
      <Svg height={1} width={"100%"}>
        <Line
          strokeDasharray="10, 7"
          x1={0}
          y1={0}
          x2={"100%"}
          strokeLinecap="butt"
          y2={0}
          style={{
            stroke: strokeColor,
            strokeWidth: 1,
          }}
        />
      </Svg>
    </View>
  );
};

export default Dash;
