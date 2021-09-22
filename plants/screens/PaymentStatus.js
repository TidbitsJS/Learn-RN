import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import LottieView from "lottie-react-native";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS, lotties, SIZES, FONTS, icons } from "../constants";
import PaymentInfoItem from "../components/PaymentInfoItem";
import Dash from "../utils/Dash";

class PaymentStatus extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGreen }}>
        <FocusedStatusBar
          animated={true}
          backgroundColor={COLORS.lightGreen}
          barStyle="dark-content"
        />
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                width: "100%",
                paddingVertical: SIZES.padding,
                paddingBottom: SIZES.font,
                paddingHorizontal: SIZES.font,
                ...FONTS.h2,
                color: COLORS.secondary,
                textAlign: "center",
              }}
            >
              Payment Status
            </Text>
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: COLORS.lightGreen,
                borderRadius: 50,
              }}
            >
              <LottieView
                ref={(animation) => {
                  this.animation = animation;
                }}
                source={lotties.successLottie}
                loop={false}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -30,
                zIndex: -1,
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  paddingVertical: SIZES.font,
                  paddingHorizontal: SIZES.base,
                  width: "90%",
                  borderTopLeftRadius: SIZES.padding * 2,
                  borderTopRightRadius: SIZES.padding * 2,
                  borderBottomLeftRadius: SIZES.padding,
                  borderBottomRightRadius: SIZES.padding,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    textAlign: "center",
                    color: COLORS.blackShed,
                    marginTop: SIZES.padding * 1.5,
                  }}
                >
                  Payment Successful
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    textAlign: "center",
                    color: COLORS.secondary,
                    marginTop: 3,
                  }}
                >
                  Package activation in progress
                </Text>
                <View
                  style={{
                    marginTop: SIZES.font * 2,
                    marginBottom: SIZES.font,
                  }}
                >
                  <PaymentInfoItem
                    title="Date"
                    subtitle="23 Sep 2021"
                    titleStyle={{ ...FONTS.body4 }}
                    subtitleStyle={{ ...FONTS.body4 }}
                  />
                  <PaymentInfoItem
                    title="Payment Method"
                    subtitle="Credit Card"
                    titleStyle={{ ...FONTS.body4 }}
                    subtitleStyle={{ ...FONTS.body4 }}
                  />
                  <PaymentInfoItem
                    title="Gift to"
                    subtitle="16006077124"
                    titleStyle={{ ...FONTS.body4 }}
                    subtitleStyle={{ ...FONTS.body4 }}
                  />
                  <PaymentInfoItem
                    title="Transfer Amount"
                    subtitle="$7.62"
                    titleStyle={{ ...FONTS.body4 }}
                    subtitleStyle={{ ...FONTS.body4 }}
                  />
                  <PaymentInfoItem
                    title="Additional Cost"
                    subtitle="$0.5"
                    titleStyle={{ ...FONTS.body4 }}
                    subtitleStyle={{ ...FONTS.body4 }}
                  />
                  <Dash
                    width="100%"
                    marginTop={SIZES.font}
                    marginBottom={SIZES.base}
                  />
                  <PaymentInfoItem
                    title="Total"
                    subtitle="$2357.67"
                    titleStyle={{ ...FONTS.body4 }}
                    subtitleStyle={{ ...FONTS.body4 }}
                  />
                </View>
              </View>
            </View>

            <View style={{ width: "90%", marginTop: SIZES.padding }}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#c7f1e0",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: SIZES.base,
                  paddingHorizontal: SIZES.font,
                  borderRadius: SIZES.base,
                }}
              >
                <Image source={icons.info} style={{ width: 25, height: 25 }} />
                <Text
                  style={{
                    ...FONTS.body5,
                    marginLeft: SIZES.base,
                    color: COLORS.darkGreen,
                  }}
                >
                  Plants will be delivered within 7 business days.
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                width: "90%",
                marginTop: SIZES.padding * 1.5,
                marginBottom: SIZES.base,
              }}
              onPress={() => this.props.navigation.navigate("Home")}
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
                  Back To Home
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default PaymentStatus;
