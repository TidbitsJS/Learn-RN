import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const CategoryItem = ({ item, selectedCategory, setSelectedCategory }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginRight: item.id !== 3 ? SIZES.padding : 0,
      }}
      onPress={() => setSelectedCategory(item.id)}
    >
      {selectedCategory === item.id && (
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.white,
            textTransform: "capitalize",
          }}
        >
          {item.categoryName}
        </Text>
      )}
      {selectedCategory !== item.id && (
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.lightGray,
            textTransform: "capitalize",
          }}
        >
          {item.categoryName}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const HomeCategoryHeader = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <View style={{ flex: 1, padding: SIZES.font, marginTop: SIZES.padding }}>
      <FlatList
        horizontal
        data={categories}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id + item.categoryName}`}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
      />
    </View>
  );
};

export default HomeCategoryHeader;
