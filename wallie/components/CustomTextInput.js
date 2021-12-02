import React from "react";
import { TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const CustomTextInput = ({
  placeholderText,
  keyboardType,
  value,
  setValue,
  bottomBorder,
}) => {
  return (
    <TextInput
      placeholder={placeholderText}
      keyboardType={keyboardType}
      value={value.toString()}
      onChangeText={(text) => setValue(text)}
      placeholderTextColor={COLORS.darkgray2}
      style={[
        {
          ...FONTS.body4,
          flex: 1,
          color: COLORS.black,
          paddingVertical: SIZES.base,
        },
        bottomBorder && {
          borderBottomWidth: 0.5,
          borderBottomColor: COLORS.gray,
        },
      ]}
    />
  );
};

export default CustomTextInput;
