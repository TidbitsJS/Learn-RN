import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const ShopCartItem = ({
  item,
  handleRemoveItem,
  handleTotalPrice,
  navigation,
}) => {
  const [items, setItems] = React.useState(1);

  const handleNoOfItems = (type) => {
    if (type === "add") {
      setItems(items + 1);
      handleTotalPrice(item.price);
    } else {
      if (items < 2) {
        handleRemoveItem(item.id);
      } else {
        setItems(items - 1);
      }
      handleTotalPrice(-item.price);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: SIZES.font,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.45}
        style={{ width: 60, height: 80 }}
        onPress={() => navigation.navigate("BookDetail", { book: item })}
      >
        <Image
          source={item.bookCover}
          resizeMode="cover"
          style={{ width: "100%", height: "100%", borderRadius: 2 }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginHorizontal: SIZES.base,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("BookDetail", { book: item })}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }} numberOfLines={1}>
            {item.bookName}
          </Text>
          <Text style={{ ...FONTS.body4, color: COLORS.lightGray3 }}>
            $ {item.price}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            handleTotalPrice(-(item.price * items));
            handleRemoveItem(item.id);
          }}
        >
          <Text style={{ ...FONTS.body4, color: COLORS.primary }}>remove</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", justifyContent: "space-evenly" }}>
        <TouchableOpacity onPress={() => handleNoOfItems("minus")}>
          <Image
            source={icons.minus}
            style={{ width: 23, height: 23 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.white,
            marginVertical: 5,
          }}
        >
          {items}
        </Text>
        <TouchableOpacity onPress={() => handleNoOfItems("add")}>
          <Image
            source={icons.plus}
            style={{ width: 23, height: 23 }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopCartItem;
