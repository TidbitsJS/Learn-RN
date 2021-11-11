import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { COLORS, FONTS, lotties, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import LottieView from "lottie-react-native";
import Dash from "../utils/Dash";

const DetailsItem = ({ title, value }) => {
  return (
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
          ...FONTS.h4,
          color: COLORS.white,
          letterSpacing: 0.75,
        }}
      >
        {value}
      </Text>
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
              style={{ width: 200, height: 200 }}
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
              padding: SIZES.padding,
              ...SHADOW.darkShadow,
            }}
          >
            <DetailsItem title="Books" value="11" />
            <DetailsItem title="Amount" value="$ 210.87" />
            <DetailsItem title="Shipping Cost" value="$ 24.80" />
            <DetailsItem title="Tax" value="$ 0.00" />
            <Dash
              strokeColor={COLORS.white}
              width="100%"
              marginBottom={SIZES.base}
              marginTop={SIZES.font}
            />
            <DetailsItem title="Total" value="$ 235.57" />
          </View>

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
        </View>
      </SafeAreaView>
    );
  }
}

export default PaymentSuccess;
