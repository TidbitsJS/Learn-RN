import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import { COLORS, SIZES, SHADOW, icons } from "../constants";
import { useStateContext } from "../context/StateContext";

const CustomModal = ({ handleClose, children }) => {
  const { animationType, setAnimationType } = useStateContext();

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Animatable.View
        animation={animationType}
        duration={500}
        delay={50}
        style={{
          backgroundColor: COLORS.white,
          padding: SIZES.medium,
          borderRadius: SIZES.font,
          width: "80%",
          ...SHADOW.mediumShadow,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            marginBottom: SIZES.font,
          }}
          onPress={() => {
            setAnimationType("zoomOut");
            setTimeout(() => {
              handleClose();
            }, 800);
          }}
        >
          <Image
            source={icons.close}
            style={{ width: 15, height: 15, tintColor: COLORS.gray }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        {children}
      </Animatable.View>
    </View>
  );
};

export default CustomModal;
