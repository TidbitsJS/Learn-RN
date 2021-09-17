import React from "react";
import { Image, Text, View } from "react-native";
import { SIZES, icons, FONTS } from "../constants";

const ShopFooterItem = ({
  isImage,
  title,
  subtitle,
  titleColor,
  subtitleColor,
  bgColor,
  bold,
  font,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: SIZES.padding,
        height: 80,
        backgroundColor: bgColor,
        borderRadius: SIZES.padding - 5,
        marginVertical: SIZES.font,
      }}
    >
      <Text
        style={{
          flex: 1,
          ...FONTS.body3,
          color: titleColor,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {isImage && (
          <Image
            source={icons.verified}
            resizeMode="cover"
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
        )}
        <Text
          style={{
            textAlign: "right",
            ...font,
            color: subtitleColor,
            textTransform: "uppercase",
            fontWeight: bold ? "bold" : null,
          }}
          numberOfLines={1}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default ShopFooterItem;
