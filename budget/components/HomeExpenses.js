import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

function ExpensesTitle() {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: COLORS.lightGray2,
        padding: SIZES.padding,
      }}
    >
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.primary,
          textTransform: "uppercase",
        }}
      >
        Incoing expenses
      </Text>
      <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
    </View>
  );
}

function ExpensesItem({ item, index, selectedCategory }) {
  return (
    <View
      style={{
        width: 300,
        marginRight: SIZES.padding,
        marginLeft: index === 0 ? SIZES.padding : 0,
        marginVertical: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          padding: SIZES.padding,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: COLORS.lightGray,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.base,
          }}
        >
          <Image
            source={selectedCategory.icon}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedCategory.color,
            }}
          />
        </View>

        <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>
          {selectedCategory.name}
        </Text>
      </View>

      <View style={{ paddingHorizontal: SIZES.padding }}>
        <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
        <Text
          style={{ ...FONTS.body3, flexWrap: "wrap", color: COLORS.darkgray }}
        >
          {item.description}
        </Text>
        <Text
          style={{
            marginTop: SIZES.padding,
            ...FONTS.h4,
            marginBottom: 2,
          }}
        >
          Location
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: SIZES.font,
          }}
        >
          <Image
            source={icons.pin}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.darkgray,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              color: COLORS.darkgray,
              ...FONTS.body4,
            }}
          >
            {item.location}
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderBottomStartRadius: SIZES.radius,
          borderBottomEndRadius: SIZES.radius,
          backgroundColor: selectedCategory.color,
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body3,
          }}
        >
          Confirm {item.total.toFixed(2)} USD
        </Text>
      </View>
    </View>
  );
}

const HomeExpenses = ({ selectedCategory }) => {
  let allExpenses = selectedCategory ? selectedCategory.expenses : [];
  let incomingExpenses = allExpenses.filter((a) => a.status === "P");

  return (
    <View>
      <ExpensesTitle />
      {incomingExpenses.length > 0 && (
        <FlatList
          data={incomingExpenses}
          renderItem={({ item, index }) => (
            <ExpensesItem
              item={item}
              index={index}
              selectedCategory={selectedCategory}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {incomingExpenses.length === 0 && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 300,
          }}
        >
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
        </View>
      )}
    </View>
  );
};

export default HomeExpenses;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
