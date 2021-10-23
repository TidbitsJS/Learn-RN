import React from "react";
import {
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { icons, FONTS, COLORS, SIZES } from "../constants";
import { discoverBooksTag } from "../data/dummy";

const DiscoverHeaderItem = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: COLORS.lightGray2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginRight: SIZES.font,
        paddingHorizontal: SIZES.font,
        paddingVertical: 5,
      }}
    >
      <Image
        source={item.icon}
        resizeMode="cover"
        style={{ width: 30, height: "90%" }}
      />
      <View style={{ marginLeft: SIZES.font }}>
        <Text style={{ ...FONTS.h4, color: COLORS.black }}>{item.title}</Text>
        <Text style={{ ...FONTS.body5, marginTop: 1, color: COLORS.lightGray }}>
          {item.total} Items
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const DiscoverHeader = () => {
  return (
    <>
      <View style={{ marginTop: SIZES.font }}>
        <Text style={{ ...FONTS.h1, color: COLORS.white }}>Discover</Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.white,
          }}
        >
          Search based on your need fella
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.gray,
          borderRadius: 5,
        }}
      >
        <TextInput
          placeholder="Hey, search here"
          backgroundColor={COLORS.gray}
          placeholderTextColor={COLORS.lightGray}
          style={{
            flex: 1,
            padding: SIZES.base,
            color: COLORS.white,
            ...FONTS.body4,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          }}
        />

        <TouchableOpacity>
          <Image
            source={icons.mic}
            resizeMode="cover"
            style={{ width: 20, height: 20, marginHorizontal: SIZES.base }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: SIZES.padding,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            fontSize: 19,
            color: COLORS.white,
          }}
        >
          Explore books
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.white }}>More</Text>
      </View>

      <View style={{ marginTop: SIZES.padding }}>
        <FlatList
          data={discoverBooksTag}
          renderItem={({ item }) => <DiscoverHeaderItem item={item} />}
          keyExtractor={(item) => `explore-${item.title}`}
          showsVerticalScrollIndicator={false}
          horizontal
        />
      </View>
    </>
  );
};

export default DiscoverHeader;
