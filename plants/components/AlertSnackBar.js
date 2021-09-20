import React, { useEffect, useRef } from "react";
import { Text, View, Image, TouchableOpacity, Animated } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const AlertSnackBar = ({ onHandleClose }) => {
  const showAnim = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(showAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [showAnim]);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        zIndex: 1,
      }}
    >
      <Animated.View
        style={{
          width: "90%",
          backgroundColor: COLORS.white,
          borderRadius: SIZES.padding,
          padding: SIZES.base,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: SIZES.font,
          shadowColor: COLORS.white,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
          transform: [{ translateY: showAnim }],
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              marginRight: SIZES.base,
              backgroundColor: "#FFF2F2",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.alert}
              resizeMode="cover"
              style={{ width: "60%", height: "60%" }}
            />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ ...FONTS.body4, color: COLORS.secondary }}>
              False credentials
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 12,
                color: "red",
              }}
            >
              Please fill the fields properly
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => onHandleClose()}>
          <View
            style={{
              width: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: 25 }}
              source={icons.close}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AlertSnackBar;
