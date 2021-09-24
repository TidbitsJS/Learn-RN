import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const NotificationItem = ({ iconUrl, imgUrl, title, subtext, date }) => {
  return (
    <View
      style={{
        width: "100%",
        padding: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.base,
        marginVertical: SIZES.base,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: SIZES.base,
          marginTop: 5,
          position: "relative",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Image
            source={iconUrl}
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              top: -10,
              left: -10,
              transform: [{ rotate: "40deg" }],
            }}
          />
          <Image
            source={imgUrl}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginTop: SIZES.base,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginLeft: SIZES.base,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.blackShed,
                fontFamily: "Roboto-Bold",
              }}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.secondary,
                fontFamily: "Roboto-Bold",
              }}
            >
              {date}
            </Text>
          </View>
          <Text
            style={{
              ...FONTS.body5,
              lineHeight: 15,
              marginTop: 3,
              marginRight: SIZES.base,
              color: COLORS.gray,
            }}
            numberOfLines={2}
          >
            {subtext}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotificationItem;
