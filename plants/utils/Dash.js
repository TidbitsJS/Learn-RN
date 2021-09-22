import React from "react";
import { Dimensions, View } from "react-native";
import Svg, { Line } from "react-native-svg";
import { COLORS, SIZES } from "../constants";
const { width } = Dimensions.get("window");

const Dash = (props) => {
  return (
    <View
      style={{
        width,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding,
        ...props,
      }}
    >
      <Svg height={1} width={width}>
        <Line
          strokeDasharray="7, 5"
          x1={SIZES.padding}
          y1={0}
          x2={width - SIZES.padding}
          strokeLinecap="butt"
          y2={0}
          style={{
            stroke: COLORS.secondary,
            strokeWidth: 1,
          }}
        />
      </Svg>
    </View>
  );
};

export default Dash;
