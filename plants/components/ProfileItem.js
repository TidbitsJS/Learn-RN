import React from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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
    <TouchableOpacity
      activeOpacity={isProfileImg ? 0.8 : 0.45}
      style={{
        marginTop: isProfileImg ? -40 : null,
      }}
    >
      <View
        style={{
          width: containerWidthHeight,
          height: containerWidthHeight,
          borderRadius: borderRadius,
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
            borderColor: COLORS.primary,
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
    </TouchableOpacity>
  );
};

export default ProfileItem;
