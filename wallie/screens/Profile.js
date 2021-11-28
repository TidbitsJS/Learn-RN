import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ProfileHeader from "../components/profile/ProfileHeader";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { profileOptions } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const ProfileOptionItem = ({ item, index, navigation }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: SIZES.padding,
      marginVertical: 3,
      marginTop: index === 3 ? SIZES.font * 2 : 3,
    }}
    onPress={() => {
      item.route && navigation.navigate(item.route);
    }}
  >
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.lightGreen,
        }}
      >
        <Image
          source={item.icon}
          style={{
            width: "50%",
            height: "50%",
            tintColor: COLORS.primary,
          }}
          resizeMode="cover"
        />
      </View>
      <Text
        style={{
          ...FONTS.body4,
          color: COLORS.darkgray2,
          marginLeft: SIZES.base,
          textAlign: "center",
        }}
      >
        {item.title}
      </Text>
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          ...FONTS.body4,
          color: COLORS.darkgray2,
          textAlign: "right",
        }}
        numberOfLines={1}
      >
        {item.description ? item.description : ""}
      </Text>
      <Image
        source={icons.forward}
        style={{ width: 20, marginLeft: SIZES.base, height: 20 }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
);

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: SIZES.medium,
          }}
        >
          <FlatList
            data={profileOptions}
            renderItem={({ item, index }) => (
              <ProfileOptionItem
                item={item}
                index={index}
                navigation={navigation}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: SIZES.medium * 6 }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <ProfileHeader />}
            ListFooterComponent={() => (
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.lightGreen,
                  padding: SIZES.padding,
                  borderRadius: SIZES.font,
                  marginTop: SIZES.medium,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                activeOpacity={0.5}
              >
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    backgroundColor: COLORS.emerald,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={icons.signout}
                    style={{
                      width: "50%",
                      height: "50%",
                      tintColor: COLORS.white,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <Text style={{ ...FONTS.body4, color: COLORS.primary }}>
                  Sign Out
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
