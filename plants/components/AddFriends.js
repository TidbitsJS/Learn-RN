import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import ShowFriends from "./ShowFriends";

const AddFriends = ({ friendList }) => {
  return (
    <View style={{ backgroundColor: COLORS.lightGray }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <View
          style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>
              Added Friends -
            </Text>
            <Text
              style={{
                color: COLORS.secondary,
                marginLeft: 5,
                ...FONTS.h2,
              }}
            >
              {friendList.length}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: SIZES.font }}>
            <View
              style={{ flex: 1.3, flexDirection: "row", alignItems: "center" }}
            >
              <ShowFriends friendList={friendList} />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>
                Add New
              </Text>
              <TouchableOpacity
                style={{
                  marginLeft: SIZES.base,
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.white,
                }}
                onPress={() => {
                  console.log("Add friend on pressed");
                }}
              >
                <Image
                  source={icons.plus}
                  resizeMode="contain"
                  style={{
                    width: 12,
                    height: 12,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddFriends;
