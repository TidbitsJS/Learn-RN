import React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SwipeListView } from "react-native-swipe-list-view";
import NotificationItem from "../components/NotificationItem";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { notifications } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Notifications = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <FocusedStatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <View
        style={{
          flex: 1,
          position: "relative",
        }}
      >
        <ImageBackground
          source={images.bannerBg}
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        />
        <View
          style={{
            flex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            backgroundColor: "rgba(0, 153, 109, 0.85)",
          }}
        />
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            ...FONTS.h2,
            color: COLORS.white,
            marginTop: SIZES.padding * 2,
            textAlign: "left",
            marginHorizontal: SIZES.font,
          }}
        >
          Notifications
        </Text>
        <View
          style={{
            width: "100%",
            paddingBottom: SIZES.padding * 3,
          }}
        >
          <SwipeListView
            data={notifications}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: SIZES.font }}
            renderItem={({ item }) => (
              <NotificationItem
                iconUrl={icons.notification}
                imgUrl={item.imgUrl}
                title={item.title}
                subtext={item.subtitle}
                date={item.date}
              />
            )}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  padding: SIZES.base,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    height: "100%",
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: SIZES.font,
                    width: 90,
                    borderTopRightRadius: SIZES.base,
                    borderBottomRightRadius: SIZES.base,
                  }}
                >
                  <Image
                    source={icons.trash}
                    resizeMode="cover"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
              </View>
            )}
            rightOpenValue={-100}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
