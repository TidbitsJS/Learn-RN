import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import ZigZag from "../utils/ZigZag";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            height: 150,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: SIZES.padding,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text
            style={{ ...FONTS.h1, color: COLORS.white }}
          >{`My \nProfile`}</Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 25,
                  padding: 5,
                  backgroundColor: COLORS.white,
                  borderWidth: 2,
                  borderColor: COLORS.secondary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.cameraFilled}
                  resizeMode="contain"
                  style={{
                    width: "95%",
                    height: "95%",
                  }}
                />
              </View>
            </View>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                marginTop: -40,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 60,
                  padding: 5,
                  backgroundColor: COLORS.white,
                  borderWidth: 4,
                  borderColor: COLORS.secondary,
                }}
              >
                <Image
                  source={images.profile5}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 60,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 25,
                  padding: 5,
                  backgroundColor: COLORS.white,
                  borderWidth: 2,
                  borderColor: COLORS.secondary,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.edit}
                  resizeMode="cover"
                  style={{
                    width: "80%",
                    height: "80%",
                  }}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              margin: SIZES.base,
              marginBottom: SIZES.font,
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                textAlign: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.base,
                color: COLORS.secondary,
              }}
            >
              John The Doe
            </Text>
          </View>
        </View>
        <ZigZag />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
