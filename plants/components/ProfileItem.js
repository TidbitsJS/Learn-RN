import React from "react";
import { Image, View } from "react-native";
import { COLORS } from "../constants";

const ProfileItem = ({
  containerWidthHeight,
  borderRadius,
  borderWidth,
  imgUrl,
  iconWidthHeight,
  isProfileImg,
}) => {
  return (
    <View
      style={{
        width: containerWidthHeight,
        height: containerWidthHeight,
        borderRadius: borderRadius,
        marginTop: isProfileImg ? -40 : null,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          borderRadius: borderRadius,
          padding: 5,
          backgroundColor: COLORS.white,
          borderWidth: borderWidth,
          borderColor: COLORS.secondary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={imgUrl}
          resizeMode="cover"
          style={{
            width: iconWidthHeight,
            height: iconWidthHeight,
            borderRadius: isProfileImg ? borderRadius : null,
          }}
        />
      </View>
    </View>
  );
};

export default ProfileItem;
