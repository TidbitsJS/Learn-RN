import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, icons, SHADOW, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const OrderInfoItem = ({ title, subtitle, ...props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.base,
      }}
    >
      <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>{title} :</Text>
      <Text style={{ ...FONTS.body4, color: COLORS.white, ...props }}>
        {subtitle}
      </Text>
    </View>
  );
};

const ContactInfoItem = ({ iconUrl, title, subtitle, ...props }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: SIZES.font,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: COLORS.lightGray,
          justifyContent: "center",
          alignItems: "center",
          ...SHADOW.lightShadow,
        }}
      >
        <Image
          source={iconUrl}
          style={{ width: "80%", height: "80%", ...props }}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 1, marginLeft: SIZES.font }}>
        <Text style={{ ...FONTS.h4, color: COLORS.white, letterSpacing: 0.55 }}>
          {title}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.lightGray,
          }}
        >
          {subtitle}
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          source={icons.edit}
          resizeMode="cover"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.white,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const ContactInfo = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.black} />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: SIZES.font,
            }}
          >
            <TouchableOpacity>
              <Image
                source={icons.back_arrow_icon}
                style={{ width: 20, height: 20, tintColor: COLORS.white }}
                resizeMode="cover"
              />
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                Checkout
              </Text>
            </View>
          </View>

          <View style={{ margin: SIZES.font }}>
            <View
              style={{
                padding: SIZES.font,
                backgroundColor: COLORS.secondary,
                borderRadius: SIZES.font,
                ...SHADOW.mediumShadow,
              }}
            >
              <Text style={{ ...FONTS.body4, color: COLORS.primary }}>
                Billing Details
              </Text>

              <View>
                <ContactInfoItem
                  iconUrl={icons.message}
                  title="enolaholmes@gmail.com"
                  subtitle="Email"
                />
                <ContactInfoItem
                  iconUrl={icons.call}
                  title="+44 - 657 - 843 - 743"
                  subtitle="Phone"
                  width={20}
                  height={20}
                  tintColor={COLORS.white}
                />

                <View style={{ margin: SIZES.base }}>
                  <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                    Address
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.lightGray,
                      marginTop: 5,
                    }}
                  >
                    221B Baker Street, London, 11908 - UK
                  </Text>
                </View>

                <View
                  style={{
                    height: 170,
                    margin: SIZES.base,
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
              </View>
            </View>
          </View>

          <View style={{ margin: SIZES.font }}>
            <View
              style={{
                padding: SIZES.font,
                backgroundColor: COLORS.secondary,
                borderRadius: SIZES.font,
                ...SHADOW.mediumShadow,
              }}
            >
              <Text style={{ ...FONTS.body4, color: COLORS.primary }}>
                Order Info
              </Text>

              <View style={{ marginTop: SIZES.font }}>
                <OrderInfoItem title="Subtotal" subtitle="$128" />
                <OrderInfoItem title="Shipping Cost" subtitle="$50" />
                <OrderInfoItem
                  title="Total"
                  subtitle="$178"
                  fontWeight="bold"
                />
              </View>
            </View>
          </View>

          <View style={{ margin: SIZES.font }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                borderRadius: SIZES.padding,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ ...FONTS.h3, color: COLORS.white, letterSpacing: 1 }}
              >
                Pay $210
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactInfo;
