import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HeadTitle from "../components/common/HeadTitle";
import { COLORS, FONTS, images, SIZES } from "../constants";
import Dash from "../utils/Dash";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const itemDesc = [
  {
    title: "2 Double Whopper",
    price: "$10.58",
  },
  {
    title: "3 Chickern Nuggets - Meal",
    price: "$17.99",
  },
  {
    title: "1 Small Onion Rings",
    price: "$5.37",
  },
  {
    title: "2 Medium French Fires",
    price: "$6.57",
  },
  {
    title: "4 Medium Coke",
    price: "$6.35",
  },
];

const transactionCard = [
  {
    title: "Saved",
    price: "7.10",
    titleColor: COLORS.yellow,
    bgColor: COLORS.lightyellow,
  },
  {
    title: "Spent",
    price: "40.24",
    titleColor: COLORS.red,
    bgColor: COLORS.lightRed,
  },
  {
    title: "Balance",
    price: "115.90",
    titleColor: COLORS.green,
    bgColor: COLORS.lightGreen,
  },
];

const TransactionDetailItem = ({
  title,
  price,
  titleColor,
  priceColor,
  titleFont,
  priceFont,
  backgroundColor,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 7,
        backgroundColor: backgroundColor || COLORS.white,
        padding: backgroundColor && SIZES.padding,
        borderRadius: backgroundColor && SIZES.base,
      }}
    >
      <Text
        style={[
          titleFont || FONTS.body4,
          { color: titleColor || COLORS.darkgray2 },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          priceFont || FONTS.body4,
          { color: priceColor || COLORS.darkgray2 },
        ]}
      >
        {price}
      </Text>
    </View>
  );
};

const TransactionCard = ({ item }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      minWidth: "40%",
      maxWidth: "48%",
      margin: 5,
      backgroundColor: item.bgColor,
      padding: SIZES.padding,
      borderRadius: SIZES.padding,
    }}
    activeOpacity={0.7}
  >
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: SIZES.base,
      }}
    >
      <View
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: item.titleColor,
        }}
      />
    </View>
    <View
      style={{
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Text style={{ ...FONTS.body4, color: item.titleColor }}>
        {item.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: 3,
          width: "80%",
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.black,
            marginRight: 5,
            fontFamily: "Rubik-Light",
          }}
        >
          $
        </Text>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
          }}
        >
          {item.price}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const TransactionDetail = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <View style={{ marginVertical: SIZES.font }}>
            <HeadTitle title="transaction detail" navigation={navigation} />

            <View
              style={{
                marginVertical: SIZES.base,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>
                  {item.date}
                </Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>
                  Burger King Woodland Hills
                </Text>
                <Text style={{ ...FONTS.body4, color: COLORS.black }}>
                  CA 91367, California
                </Text>
              </View>

              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: COLORS.lightGray,
                  borderRadius: SIZES.padding2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    width: item.topUp ? "60%" : "70%",
                    height: item.topUp ? "60%" : "70%",
                    tintColor: item.topUp && COLORS.primary,
                  }}
                  resizeMode="cover"
                />
              </View>
            </View>

            <View style={{ marginVertical: SIZES.padding }}>
              <Dash strokeColor={COLORS.darkgray2} width="100%" />
            </View>

            <View style={{ marginVertical: SIZES.padding }}>
              {itemDesc.map((item) => (
                <TransactionDetailItem {...item} key={`desc-${item.title}`} />
              ))}

              <TransactionDetailItem
                title="Subtotal"
                price="$ 46.84"
                backgroundColor={COLORS.lightGray}
              />
              <TransactionDetailItem
                title="PB1(10%)"
                price="$ 0.50"
                titleFont={FONTS.h4}
                priceFont={FONTS.h4}
              />
              <TransactionDetailItem
                title="Cashback 15%"
                price="$ 7.10"
                titleColor={COLORS.red}
                priceColor={COLORS.red}
              />
              <View style={{ marginVertical: SIZES.font }}>
                <Dash strokeColor={COLORS.darkgray2} width="100%" />
              </View>
              <TransactionDetailItem
                title="Total Payment"
                price={item.amount}
                titleColor={COLORS.black}
                priceColor={COLORS.primary}
                priceFont={FONTS.body3}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: SIZES.medium,
            }}
          >
            {transactionCard.map((item) => (
              <TransactionCard item={item} key={`card-${item.title}`} />
            ))}
          </View>

          <View
            style={{
              marginVertical: SIZES.font,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
              If you need a refund, please ask
            </Text>
            <Text style={{ ...FONTS.body4, color: COLORS.darkgray2 }}>
              the merchant to scan the barcode below
            </Text>

            <Image
              source={images.barcode}
              style={{ width: "95%", height: 55, marginTop: SIZES.medium }}
            />
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.black,
                marginTop: SIZES.font,
              }}
            >
              201500111012020-15860
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionDetail;
