import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";

const CustomAlert = ({ errorMessage, onHandleClose }) => {
  return (
    <>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Animatable.View
          animation="zoomIn"
          duration={500}
          style={{
            width: "80%",
            backgroundColor: COLORS.white,
            paddingHorizontal: SIZES.padding,
            paddingTop: SIZES.font,
            ...SHADOW.darkShadow,
            borderRadius: SIZES.font,
            minHeight: 170,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ ...FONTS.h2, color: COLORS.primary }}>Alert</Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.gray,
                marginVertical: SIZES.font,
              }}
            >
              {errorMessage}
            </Text>
          </View>

          <TouchableOpacity
            style={{
              marginVertical: SIZES.font,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
            onPress={() => onHandleClose()}
          >
            <Text style={{ ...FONTS.h4, color: COLORS.gray }}>Okay</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </>
  );
};

export default CustomAlert;
