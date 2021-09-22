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
        zIndex: 2,
        backgroundColor: "rgba(0,0,0,0.85)",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        elevation: 3,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 5,
          borderRadius: SIZES.base,
          margin: SIZES.base,
        }}
        onPress={() => onHandleClose()}
      >
        <Image source={icons.closewindow} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>

      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{ maxHeight: "70%", width: "90%" }}
      />
    </View>
  );
};

export default PlantView;
