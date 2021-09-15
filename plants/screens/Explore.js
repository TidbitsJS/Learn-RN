import React, { useState } from "react";
import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, images, SIZES } from "../constants";

const plantsData = [
  {
    name: "Anthurium",
    imgUrl: images.anthurium,
  },
  {
    name: "Croton",
    imgUrl: images.croton,
  },
  {
    name: "Fruit Tree",
    imgUrl: images.fruittree,
  },
  {
    name: "Home Decor",
    imgUrl: images.homedecor,
  },
  {
    name: "Monstera",
    imgUrl: images.monstera,
  },
  {
    name: "Olive",
    imgUrl: images.olive,
  },
  {
    name: "Orchid",
    imgUrl: images.orchid,
  },
  {
    name: "Palm Tree",
    imgUrl: images.palm,
  },
  {
    name: "Philodendron",
    imgUrl: images.philodendron,
  },
];

const renderPlantsGrid = (itemData) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          width: 160,
          margin: 10,
          borderRadius: SIZES.font + 5,
          padding: SIZES.font,
          backgroundColor: "#E9F5EF",
        }}
        key={"plant-" + itemData.item.name}
      >
        <Image
          source={itemData.item.imgUrl}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 170,
            borderRadius: SIZES.font,
          }}
        />
        <Text
          style={{
            paddingHorizontal: SIZES.base,
            paddingTop: SIZES.font - 2,
            fontFamily: "Roboto-Regular",
            color: "#0E5F13",
            textAlign: "left",
            textTransform: "capitalize",
          }}
        >
          {itemData.item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Explore = () => {
  const [textFilter, setTextFilter] = useState({ active: "natural" });

  return (
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={plantsData}
        keyExtractor={(item, index) => "plant-" + item.name}
        renderItem={renderPlantsGrid}
        numColumns={2}
        ListHeaderComponent={
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: COLORS.primary,
                paddingBottom: SIZES.font,
                borderBottomRightRadius: SIZES.padding,
                marginBottom: SIZES.font,
              }}
            >
              <View
                style={{
                  width: "100%",
                  paddingHorizontal: SIZES.base,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    marginVertical: SIZES.base,
                    color: COLORS.white,
                    ...FONTS.h2,
                  }}
                >
                  Explore
                </Text>
              </View>
              <View
                style={{
                  marginVertical: SIZES.base,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextInput
                  placeholder="Search"
                  style={{
                    width: "90%",
                    height: 40,
                    backgroundColor: "#f6f6f6",
                    paddingHorizontal: SIZES.font,
                    fontFamily: "Roboto-Regular",
                    borderRadius: SIZES.font,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginBottom: SIZES.base,
                paddingHorizontal: SIZES.padding,
                flex: 1,
              }}
            >
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[
                  "indoor",
                  "outdoor",
                  "natural",
                  "artificial",
                  "office",
                  "decor",
                ]}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setTextFilter({ active: item });
                    }}
                  >
                    <Text
                      style={{
                        marginRight: SIZES.padding,
                        textTransform: "capitalize",
                        color:
                          textFilter.active === item
                            ? COLORS.darkGreen
                            : COLORS.gray,
                        ...FONTS.body4,
                        fontWeight:
                          textFilter.active === item ? "bold" : "normal",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        }
      />
    </View>
  );
};

export default Explore;
