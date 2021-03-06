import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Dash from "../../utils/Dash";
import { COLORS, SIZES, FONTS } from "../../constants";
import CustomModal from "../CustomModal";
import { useStateContext } from "../../context/StateContext";

const PaymentModal = ({ handleClose, handleNavigate, btnTitle }) => {
  const { setAnimationType } = useStateContext();

  return (
    <CustomModal handleClose={handleClose}>
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
        <View style={{ marginVertical: SIZES.base, marginTop: SIZES.padding }}>
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
          <Text style={{ ...FONTS.body3, color: COLORS.primary }}>$ 20.10</Text>
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
        onPress={() => {
          setAnimationType("zoomOut");
          setTimeout(() => {
            handleNavigate();
          }, 770);
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.primary,
            textAlign: "center",
          }}
        >
          {btnTitle}
        </Text>
      </TouchableOpacity>
    </CustomModal>
  );
};

export default PaymentModal;
