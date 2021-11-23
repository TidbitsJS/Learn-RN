import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../constants";

const ScanPaymentMethods = () => {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 55,
        padding: SIZES.medium * 2,
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        backgroundColor: COLORS.white,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h4 }}>Another</Text>
        <Text style={{ ...FONTS.h4, marginTop: 5 }}>Payment Method</Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: SIZES.font * 2,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.lightpurple,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Image
              source={icons.phone}
              resizeMode="cover"
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.purple,
              }}
            />
          </View>
          <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
            Phone Number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          onPress={() => console.log("Barcode")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.lightGreen,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
            <Image
              source={icons.barcode}
              resizeMode="cover"
              style={{
                height: 25,
                width: 25,
                tintColor: COLORS.primary,
              }}
            />
          </View>
          <Text style={{ marginLeft: SIZES.padding, ...FONTS.body4 }}>
            Barcode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanPaymentMethods;
