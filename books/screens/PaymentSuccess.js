import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, lotties, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import LottieView from "lottie-react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const DetailsItem = ({ title, value }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        marginHorizontal: SIZES.font,
        marginVertical: SIZES.base,
        borderRadius: SIZES.font,
        paddingVertical: SIZES.font,
        paddingHorizontal: SIZES.padding,
        ...SHADOW.darkShadow,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 3,
        }}
      >
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>{title}</Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.primary,
            letterSpacing: 0.75,
          }}
        >
          {value}
        </Text>
      </View>
    </View>
  );
};

class PaymentSuccess extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LottieView
                ref={(animation) => {
                  this.animation = animation;
                }}
                source={lotties.successLottie}
                loop={false}
                style={{ width: 170, height: 170 }}
              />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
              }}
            >
              <Text
                style={{
                  ...FONTS.body2,
                  letterSpacing: 0.5,
                  textAlign: "center",
                }}
              >
                <Text style={{ color: COLORS.white }}>Your Order has been</Text>
                <Text style={{ color: COLORS.white }}> Placed</Text>
              </Text>

              <Text
                style={{
                  marginVertical: SIZES.base,
                  ...FONTS.body3,
                  color: COLORS.lightGray,
                  textAlign: "center",
                  paddingHorizontal: SIZES.font,
                }}
              >
                Total amount paid by Mastercard. Please help us with our product
                reviews
              </Text>
            </View>

            <View
              style={{
                margin: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.primary,
                    letterSpacing: 0.7,
                  }}
                >
                  Share Feedback
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                backgroundColor: COLORS.secondary,
                margin: SIZES.font,
                borderRadius: SIZES.font,
                padding: SIZES.font,
                ...SHADOW.darkShadow,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginRight: SIZES.font,
                  height: 100,
                  borderRadius: SIZES.font,
                  overflow: "hidden",
                }}
              >
                <MapView
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  provider={PROVIDER_GOOGLE}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: SIZES.font,
                  }}
                />
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  paddingRight: SIZES.base,
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    letterSpacing: 0.75,
                  }}
                >
                  Address
                </Text>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.lightGray,
                      letterSpacing: 0.55,
                      textAlign: "right",
                    }}
                  >
                    <Text>221B Baker Street</Text>
                    <Text> London - UK, </Text>
                    <Text>11908</Text>
                  </Text>
                </View>
              </View>
            </View>

            <DetailsItem title="Transaction ID" value="#0004672918" />
            <DetailsItem title="Delivery By" value="Jan 22, 2022" />

            <View
              style={{
                margin: SIZES.font,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 120,
                  backgroundColor: COLORS.primary,
                  paddingVertical: SIZES.font,
                  borderRadius: SIZES.padding,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Main")}
                activeOpacity={0.5}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                    letterSpacing: 0.75,
                  }}
                >
                  Done
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.lightGray,
                }}
              >
                Item will be delived soon on your address
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default PaymentSuccess;
