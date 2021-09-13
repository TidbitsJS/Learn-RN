import React from "react";
import { Text, View, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const RequirementDetail = ({ icon, label, detail }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: SIZES.base }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 20,
            height: 20,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h3,
          }}
        >
          {label}
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Text
          style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h3 }}
        >
          {detail}
        </Text>
      </View>
    </View>
  );
};

const Requirements = () => {
  return (
    <View
      style={{
        flex: 2.5,
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        justifyContent: "space-around",
      }}
    >
      <RequirementDetail icon={icons.sun} label="Sublight" detail="15°C" />
      <RequirementDetail
        icon={icons.drop}
        label="Water"
        detail="250 ML Daily"
      />
      <RequirementDetail
        icon={icons.temperature}
        label="Room Temp"
        detail="25°C"
      />
      <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
      <RequirementDetail icon={icons.seed} label="Fertilizer" detail="150 Mg" />
    </View>
  );
};

export default Requirements;
