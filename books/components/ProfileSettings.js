import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SHADOW, SIZES } from "../constants";

const settingsData = [
  {
    title: "Language",
    icon: icons.language,
    color: COLORS.darkRed,
  },
  {
    title: "Notifications",
    icon: icons.notification,
    color: COLORS.darkBlue,
  },
  {
    title: "Privacy",
    icon: icons.privacy,
    color: COLORS.darkGreen,
  },
  {
    title: "Terms",
    icon: icons.terms,
    color: COLORS.darkBlue,
  },
  {
    title: "Help",
    icon: icons.help,
    color: COLORS.darkRed,
  },
];

const SettingItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.font,
      }}
    >
      <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: item.color,
          ...SHADOW.lightShadow,
        }}
      >
        <Image
          source={item.icon}
          resizeMode="cover"
          style={{
            width: "50%",
            height: "50%",
          }}
        />
      </TouchableOpacity>
      <View style={{ flex: 1, marginLeft: SIZES.base }}>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>
          {item.title}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={icons.arrowRight}
          style={{ width: "50%", height: "50%", tintColor: COLORS.primary }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const ProfileSettings = () => {
  return (
    <View style={{ marginHorizontal: SIZES.font }}>
      <Text
        style={{
          ...FONTS.h2,
          color: COLORS.white,
          marginHorizontal: SIZES.font,
        }}
      >
        Settings
      </Text>
      <View style={{ margin: SIZES.font }}>
        <FlatList
          data={settingsData}
          renderItem={({ item }) => <SettingItem item={item} />}
          keyExtractor={(item) => `setting-${item.title}`}
        />
      </View>
    </View>
  );
};

export default ProfileSettings;
