import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { COLORS, FONTS, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ width: "100%", height: 210 }}>
            <ImageBackground
              source={images.bookbg}
              resizeMode="cover"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: COLORS.gray,
              margin: SIZES.font,
              marginTop: -50,
              height: 100,
              padding: SIZES.font,
              borderRadius: SIZES.base,
              flexDirection: "row",
              //   justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderWidth: 1,
                borderColor: COLORS.primary,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                borderStyle: "dashed",
              }}
            >
              <Image
                source={images.enola}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
                resizeMode="contain"
              />
            </View>

            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                Enola Holmes
              </Text>
              <Text
                style={{
                  ...FONTS.body5,
                  marginTop: 5,
                  color: COLORS.white,
                }}
              >
                Balance <Text style={{ color: COLORS.primary }}>$7920</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
