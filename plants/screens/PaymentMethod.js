import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import Dash from "../utils/Dash";
import PaymentInfoItem from "../components/PaymentInfoItem";

const PaymentMethodItem = ({
  iconUrl,
  title,
  subtitle,
  type,
  onHandleSelect,
  selectedCard,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => onHandleSelect(type)}>
      <View
        style={{
          width: "90%",
          padding: SIZES.font,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.white,
          borderRadius: SIZES.base,
          marginBottom: SIZES.font,
        }}
      >
        <Image
          source={iconUrl}
          style={{ width: 30, height: 30, marginRight: SIZES.font }}
        />
        <View
          style={{
            paddingLeft: SIZES.font,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flex: 1,
            borderLeftWidth: 1,
            borderLeftColor: COLORS.lightGray,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{title}</Text>
          <Text style={{ ...FONTS.body5, color: COLORS.secondary }}>
            {subtitle}
          </Text>
        </View>
        <View
          style={{
            width: 20,
            height: 20,
            backgroundColor: COLORS.lightGreen,
            borderWidth: 1,
            borderColor:
              type === selectedCard ? COLORS.blackShed : COLORS.secondary,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              height: "80%",
              backgroundColor:
                type === selectedCard ? COLORS.blackShed : COLORS.white,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const PaymentMethod = ({ navigation }) => {
  const [selectCard, setSelectCard] = useState("creditcard");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGreen}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: COLORS.lightGreen }}>
          <Text
            style={{
              width: "100%",
              paddingVertical: SIZES.padding,
              paddingHorizontal: SIZES.font,
              ...FONTS.h2,
              color: COLORS.secondary,
              textAlign: "center",
            }}
          >
            Payment Method
          </Text>
          <View
            style={{
              marginVertical: SIZES.font,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PaymentMethodItem
              iconUrl={icons.mastercard}
              title="Credit Card"
              subtitle="+1 6006****24"
              type="creditcard"
              onHandleSelect={(type) => setSelectCard(type)}
              selectedCard={selectCard}
            />
            <PaymentMethodItem
              iconUrl={icons.paypal}
              title="Paypal"
              subtitle="5221****2465"
              type="paypal"
              onHandleSelect={(type) => setSelectCard(type)}
              selectedCard={selectCard}
            />
            <PaymentMethodItem
              iconUrl={icons.google}
              title="Google Pay"
              subtitle="4142****7667"
              type="googlepay"
              onHandleSelect={(type) => setSelectCard(type)}
              selectedCard={selectCard}
            />
          </View>

          <View
            style={{
              marginVertical: SIZES.font,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                borderRadius: SIZES.font * 1.25,
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Image source={icons.promo} style={{ width: 25, height: 25 }} />
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    marginLeft: SIZES.base,
                    fontFamily: "Roboto-Regular",
                  }}
                >
                  Promo Code
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.blackShed,
                  paddingVertical: SIZES.base,
                  paddingHorizontal: SIZES.font * 1.25,
                  borderRadius: SIZES.font,
                }}
              >
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.white,
                    textAlign: "center",
                  }}
                >
                  Apply
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <PaymentInfoItem title="Transfer Amount" subtitle={"$2351.15"} />
            <PaymentInfoItem title="Additional Cost" subtitle="$0.75" />
            <PaymentInfoItem title="Shipping" subtitle="$21.5" />
            <Dash
              marginTop={SIZES.font}
              marginBottom={SIZES.base}
              width={"100%"}
            />
            <PaymentInfoItem title="Total" subtitle="$2563.05" />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.padding * 2,
              marginBottom: SIZES.padding,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ width: "90%" }}
              onPress={() => navigation.navigate("PaymentStatus")}
            >
              <View
                style={{
                  width: "100%",
                  padding: SIZES.font,
                  borderRadius: SIZES.font,
                  backgroundColor: COLORS.blackShed,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    textAlign: "center",
                  }}
                >
                  Pay
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentMethod;
