import React, { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";

const ExploreHeader = () => {
  const [textFilter, setTextFilter] = useState({ active: "natural" });

  return (
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
              marginVertical: SIZES.font,
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
              marginBottom: SIZES.base,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: SIZES.base,
          marginBottom: SIZES.font,
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
          renderItem={({ item }) => (
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
                    textFilter.active === item ? COLORS.darkGreen : COLORS.gray,
                  ...FONTS.body4,
                  fontWeight: textFilter.active === item ? "bold" : "normal",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ExploreHeader;
