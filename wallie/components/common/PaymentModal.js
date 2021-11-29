import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Dash from "../../utils/Dash";
import { COLORS, SIZES, FONTS, icons, SHADOW } from "../../constants";
import * as Animatable from "react-native-animatable";

const PaymentModal = ({ handleClose, handleNavigate }) => {
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
        animation="zoomIn"
        duration={500}
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
          onPress={handleClose}
        >
          <Image
            source={icons.close}
            style={{ width: 12, height: 12, tintColor: COLORS.gray }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={{ ...FONTS.h3, color: COLORS.black, textAlign: "center" }}>
          Payment Confirmation
        </Text>

        <View style={{ margin: SIZES.font }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 3,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
              Top up amount
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.black }}>$ 20.00</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 3,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
              Administration fee
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.black }}>$ 0.10</Text>
          </View>
          <View
            style={{ marginVertical: SIZES.base, marginTop: SIZES.padding }}
          >
            <Dash strokeColor={COLORS.darkgray2} width={"100%"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 3,
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
              Total Payment
            </Text>
            <Text style={{ ...FONTS.body3, color: COLORS.primary }}>
              $ 20.10
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            margin: SIZES.font,
            marginBottom: 0,
            backgroundColor: COLORS.lightGreen,
            borderRadius: SIZES.medium,
          }}
          onPress={handleNavigate}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.primary,
              textAlign: "center",
            }}
          >
            Pay
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default PaymentModal;
