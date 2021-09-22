import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const PlantView = ({ imgUrl, onHandleClose }) => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        zIndex: 1,
        backgroundColor: "rgba(0,0,0,0.85)",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{ maxHeight: 450, width: "90%" }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 50,
          right: 10,
          backgroundColor: COLORS.primary,
          padding: SIZES.base,
          borderRadius: 40,
        }}
        onPress={() => onHandleClose()}
      >
        <Image source={icons.closewindow} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    </View>
  );
};

export default PlantView;
