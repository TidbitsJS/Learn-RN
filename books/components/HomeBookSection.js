import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const BookItem = ({ navigation, item, index }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginLeft: index === 0 ? SIZES.font : 0,
        marginRight: SIZES.radius,
      }}
      onPress={() =>
        navigation.navigate("BookDetail", {
          book: item,
        })
      }
    >
      <Image
        source={item.bookCover}
        resizeMode="cover"
        style={{
          width: 180,
          height: 250,
          borderRadius: 20,
        }}
      />

      <View
        style={{
          marginTop: SIZES.base,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: SIZES.base,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={icons.clock_icon}
            style={{
              width: 10,
              height: 10,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{ marginLeft: 5, ...FONTS.body4, color: COLORS.lightGray }}
          >
            {item.lastRead}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={icons.page_icon}
            style={{
              marginLeft: SIZES.radius,
              width: 10,
              height: 10,
              tintColor: COLORS.lightGray,
            }}
          />
          <Text
            style={{ marginLeft: 5, ...FONTS.body4, color: COLORS.lightGray }}
          >
            {item.completion}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeBookSection = ({ navigation, myBooks }) => {
  return (
    <View style={{ flex: 1, marginTop: SIZES.font }}>
      <View
        style={{
          paddingHorizontal: SIZES.font,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>My Book</Text>
        <TouchableOpacity onPress={() => console.log("See More")}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.lightGray,
              alignSelf: "flex-start",
            }}
          >
            See more
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, marginTop: SIZES.padding }}>
        <FlatList
          horizontal
          data={myBooks}
          renderItem={({ item, index }) => (
            <BookItem navigation={navigation} item={item} index={index} />
          )}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default HomeBookSection;
