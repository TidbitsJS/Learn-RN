import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const SignUpForm = () => {
  const [areas, setAreas] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const fetchAreas = async () => {
    const response = await fetch("https://restcountries.com/v2/all");
    const jsonData = await response.json();

    let data = jsonData.map((item) => {
      return {
        code: item.alpha2Code,
        name: item.name,
        callingCode: `+${item.callingCodes[0]}`,
        flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
      };
    });

    setAreas(data);
    if (data.length > 0) {
      let defaultData = data.filter((a) => a.code === "US");

      if (defaultData.length > 0) {
        setSelectedArea(defaultData[0]);
      }
    }
  };

  React.useEffect(() => {
    fetchAreas();
  }, []);

  return (
    <View
      style={{
        marginVertical: SIZES.font,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <View>
        <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
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
        <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
          Phone Number
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 100,
              marginHorizontal: 5,
              paddingVertical: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              flexDirection: "row",
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
              <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
                {selectedArea?.callingCode}
              </Text>
            </View>
          </TouchableOpacity>

          <TextInput
            style={{
              flex: 1,
              marginVertical: SIZES.padding,
              paddingVertical: 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              color: COLORS.white,
              ...FONTS.body3,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>
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
