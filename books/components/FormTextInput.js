import React from "react";
import { View, Text, TextInput } from "react-native";
import { COLORS, FONTS, SHADOW, SIZES } from "../constants";

const FormTextInput = ({ placeholderText, type, value, onHandleInputText }) => {
  return (
    <View
      style={{
        marginVertical: SIZES.base + 2,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.padding2,
        padding: SIZES.font,
        paddingHorizontal: SIZES.padding,
        ...SHADOW.darkShadow,
      }}
    >
      <TextInput
        placeholder={placeholderText}
        secureTextEntry={type === "password" || type === "confirmPassword"}
        placeholderTextColor={COLORS.lightGray4}
        value={value}
        onChangeText={(value) => {
          onHandleInputText(type, value);
        }}
        style={{
          color: COLORS.lightGray2,
          ...FONTS.body4,
        }}
      />
    </View>
  );
};

export default FormTextInput;
