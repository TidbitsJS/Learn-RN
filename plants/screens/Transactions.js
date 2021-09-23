import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import OrderHistoryGroup from "../components/OrderHistoryGroup";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Transactions = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View
            style={{
              width: "100%",
              marginTop: SIZES.base,
              padding: SIZES.font,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: COLORS.primary,
                  borderRadius: 25,
                }}
              >
                <Image
                  source={images.profile5}
                  resizeMode="cover"
                  style={{ width: "85%", height: "85%", borderRadius: 25 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.h3,
                  marginLeft: SIZES.base,
                  color: COLORS.secondary,
                }}
                numberOfLines={1}
              >
                John D.
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ width: 25, height: 25 }}
            >
              <Image
                source={icons.settings}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%", padding: SIZES.padding }}>
            <OrderHistoryGroup date="Today, 25 Sep" />
            <OrderHistoryGroup date="Yesterday, 24 Sep" />
            <OrderHistoryGroup date="2021, 20 Sep " />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
