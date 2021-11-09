import React from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const CustomAlert = ({ errorMessage, onHandleClose }) => {
  const [fadeValue] = React.useState(new Animated.Value(0));

  const _end = () => {
    // fade out effect animation
    Animated.timing(fadeValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).stop();
  };

  React.useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  });

  return (
    <>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <Animated.View
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
        <View
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
            onPress={() => {
              _end();
              onHandleClose();
            }}
          >
            <Text style={{ ...FONTS.h4, color: COLORS.gray }}>Okay</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </>
  );
};

export default CustomAlert;
