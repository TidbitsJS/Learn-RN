import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS, FONTS, icons, images, SHADOW, SIZES } from "../constants";
import { profileOptions } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const ProfileOptionItem = ({ item }) => (
  <TouchableOpacity
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: SIZES.padding,
      marginVertical: 3,
      marginTop: item.title === "Password" ? SIZES.font * 2 : 3,
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
          color: COLORS.gray,
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
          color: COLORS.gray,
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

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <View style={{ flex: 1 }}>
        <View
          style={{
            marginVertical: SIZES.font,
            paddingHorizontal: SIZES.medium,
          }}
        >
          <FlatList
            data={profileOptions}
            renderItem={({ item }) => <ProfileOptionItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: SIZES.medium * 5 }}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <>
                <Text
                  style={{
                    ...FONTS.h3,
                    marginVertical: SIZES.font,
                    color: COLORS.lime,
                    fontFamily: "MSans-ExtraBold",
                  }}
                >
                  Account
                </Text>

                <View style={{ marginVertical: SIZES.font }}>
                  <View
                    style={{
                      backgroundColor: COLORS.primary,
                      padding: SIZES.font,
                      minHeight: 120,
                      borderRadius: SIZES.font,
                      flexDirection: "row",
                      alignItems: "center",
                      ...SHADOW.lightShadow,
                    }}
                  >
                    <View style={{ marginHorizontal: SIZES.base }}>
                      <Image
                        source={images.holmes}
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 10,
                        }}
                        resizeMode="cover"
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: COLORS.white,
                        }}
                      >
                        Sherlock Holmes
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body4,
                          fontFamily: "MSans-ExtraBold",
                          color: COLORS.white,
                          marginTop: 3,
                        }}
                      >
                        +1 898 860 110
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      elevation: 5,
                    }}
                  >
                    <Image
                      source={icons.dots}
                      style={{ width: 25, height: 25, tintColor: COLORS.white }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
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
