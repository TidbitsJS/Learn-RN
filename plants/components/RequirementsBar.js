import React from "react";
import { Image, View } from "react-native";
import { COLORS, icons, SIZES } from "../constants";

const CustomBar = ({ icon, barPercentage }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          borderWidth: 1,
          borderColor: COLORS.gray,
        }}
      >
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 25,
            height: 25,
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: 3,
          marginTop: SIZES.base - 4,
          backgroundColor: COLORS.gray,
        }}
      />

      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: barPercentage,
          height: 3,
          marginTop: SIZES.base,
          backgroundColor: COLORS.primary,
        }}
      />
    </View>
  );
};

const RequirementsBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-between",
      }}
    >
      <CustomBar icon={icons.sun} barPercentage="50%" />
      <CustomBar icon={icons.drop} barPercentage="25%" />
      <CustomBar icon={icons.temperature} barPercentage="80%" />
      <CustomBar icon={icons.garden} barPercentage="30%" />
      <CustomBar icon={icons.seed} barPercentage="50%" />
    </View>
  );
};

export default RequirementsBar;
