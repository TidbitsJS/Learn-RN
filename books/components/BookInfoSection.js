import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import LineDivider from "../utils/LineDivider";

const InfoBar = ({ value, name }) => {
  return (
    <View style={{ alignItems: "center", paddingHorizontal: SIZES.radius }}>
      <Text style={{ ...FONTS.h3, color: COLORS.white, textAlign: "center" }}>
        {value}
      </Text>
      <Text
        style={{
          ...FONTS.body5,
          marginTop: 5,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const BookInfoSection = ({ book, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={book.bookCover}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      />

      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: book.backgroundColor,
        }}
      />

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.font,
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: SIZES.padding2,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back_arrow_icon}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: book.navTintColor,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ ...FONTS.h3, color: book.navTintColor }}>
            Book Detail
          </Text>
        </View>

        <TouchableOpacity onPress={() => console.log("Click More")}>
          <Image
            source={icons.more_icon}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              tintColor: book.navTintColor,
              alignSelf: "flex-end",
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: SIZES.padding2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={book.bookCover}
          resizeMode="contain"
          style={{
            width: 150,
            height: 210,
          }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.font,
          paddingHorizontal: SIZES.font,
        }}
      >
        <Text
          style={{ ...FONTS.h2, color: book.navTintColor, textAlign: "center" }}
        >
          {book.bookName}
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: book.navTintColor,
            textAlign: "center",
          }}
        >
          {book.author}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          margin: SIZES.padding,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(0,0,0, 0.3)",
        }}
      >
        <InfoBar value={book.rating} name="Rating" />
        <LineDivider color={COLORS.lightGray2} />
        <InfoBar value={book.pageNo} name="Number of Page" />
        <LineDivider color={COLORS.lightGray2} />
        <InfoBar value={book.language} name="Language" />
      </View>
    </View>
  );
};

export default BookInfoSection;
