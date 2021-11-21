import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const SignUpForm = ({ selectedArea, setModalVisible }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View
      style={{
        marginVertical: SIZES.font * 2,
        paddingHorizontal: SIZES.medium * 2,
      }}
    >
      <View>
        <Text style={{ color: COLORS.lightGreen, ...FONTS.body5 }}>
          Full Name
        </Text>
        <TextInput
          style={{
            marginVertical: SIZES.base,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            color: COLORS.white,
            ...FONTS.body4,
            fontFamily: "MSans-Light",
          }}
          placeholder="Enter Full Name"
          placeholderTextColor={COLORS.lightGray}
          selectionColor={COLORS.white}
        />
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <Text style={{ color: COLORS.lightGreen, ...FONTS.body5 }}>
          Phone Number
        </Text>
        <View
          style={{
            marginVertical: SIZES.base,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginHorizontal: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              paddingRight: SIZES.base,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              ...FONTS.body2,
            }}
            onPress={() => setModalVisible(true)}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                source={icons.down}
                style={{
                  width: 10,
                  height: 10,
                  tintColor: COLORS.white,
                  marginRight: 5,
                }}
              />
            </View>
            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Image
                source={{ uri: selectedArea?.flag }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>

            <View style={{ justifyContent: "center", marginLeft: 5 }}>
              <Text
                style={{
                  color: COLORS.white,
                  textAlign: "center",
                  ...FONTS.body4,
                }}
              >
                {selectedArea?.callingCode}
              </Text>
            </View>
          </TouchableOpacity>

          <TextInput
            style={{
              flex: 1,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              color: COLORS.white,
              ...FONTS.body4,
            }}
            keyboardType="number-pad"
          />
        </View>
      </View>

      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <Text style={{ color: COLORS.lightGreen, ...FONTS.body5 }}>
          Password
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            color: COLORS.white,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              ...FONTS.body4,
              color: COLORS.white,
              fontFamily: "MSans-Light",
            }}
            placeholder="Enter Password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpForm;
