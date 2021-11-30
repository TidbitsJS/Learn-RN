import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import CustomModal from "../CustomModal";

const SuccessModal = ({ handleClose }) => {
  return (
    <CustomModal handleClose={handleClose}>
      <View style={{ marginVertical: SIZES.base }}>
        <Image
          source={icons.checkmark}
          style={{ width: "100%", height: 50 }}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          marginTop: SIZES.base,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.h3,
            fontFamily: "Rubik-Bold",
            color: COLORS.black,
          }}
        >
          Transfer Success
        </Text>

        <View
          style={{
            marginVertical: SIZES.base,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
            If you want to see the detail,
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
              please check on
            </Text>
            <TouchableOpacity>
              <Text style={{ color: COLORS.primary, marginLeft: 3 }}>
                Transaction Detail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

export default SuccessModal;
