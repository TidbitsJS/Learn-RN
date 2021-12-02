import React from "react";
import { View, Text } from "react-native";
import { SIZES, FONTS, COLORS } from "../../constants";
import CustomTextInput from "../CustomTextInput";
import CurrencyBtn from "./CurrencyBtn";

const TransferField = ({
  title,
  placeholderText,
  keyboardType,
  value,
  setValue,
  bottomBorder,
  isIcon,
}) => {
  return (
    <View style={{ marginVertical: SIZES.font }}>
      <Text style={{ ...FONTS.h4, color: COLORS.black }}>{title}</Text>
      {isIcon ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 0.5,
            borderBottomColor: COLORS.gray,
          }}
        >
          <CustomTextInput
            placeholderText={placeholderText}
            keyboardType={keyboardType}
            value={value}
            setValue={setValue}
            bottomBorder={bottomBorder}
          />
          <CurrencyBtn />
        </View>
      ) : (
        <CustomTextInput
          placeholderText={placeholderText}
          keyboardType={keyboardType}
          value={value}
          setValue={setValue}
          bottomBorder={bottomBorder}
        />
      )}
    </View>
  );
};

export default TransferField;
