import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfileItem from "../components/ProfileItem";
import ProfileOptionItem from "../components/ProfileOptionItem";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import ZigZag from "../utils/ZigZag";

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.primary}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              minHeight: 170,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text
              style={{
                ...FONTS.h1,
                color: COLORS.white,
                marginTop: SIZES.font,
              }}
            >{`My \nProfile`}</Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.white,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: SIZES.padding,
              }}
            >
              <ProfileItem
                containerWidthHeight={50}
                borderRadius={25}
                borderWidth={2}
                imgUrl={icons.cameraFilled}
                iconWidthHeight="95%"
                isProfileImg={false}
              />

              <ProfileItem
                containerWidthHeight={120}
                borderRadius={60}
                borderWidth={4}
                imgUrl={images.profile5}
                iconWidthHeight="100%"
                isProfileImg={true}
              />

              <ProfileItem
                containerWidthHeight={50}
                borderRadius={25}
                borderWidth={2}
                imgUrl={icons.edit}
                iconWidthHeight="80%"
                isProfileImg={false}
              />
            </View>

            <View
              style={{
                width: "100%",
                margin: SIZES.base,
                marginBottom: SIZES.font,
              }}
            >
              <Text
                style={{
                  ...FONTS.h2,
                  textAlign: "center",
                  paddingHorizontal: SIZES.font,
                  paddingVertical: SIZES.base,
                  color: COLORS.secondary,
                }}
              >
                John The Doe
              </Text>
            </View>
          </View>
          <ZigZag />
          <View style={{ flex: 1, padding: SIZES.padding }}>
            <ProfileOptionItem iconUrl={icons.customer} title="My Account" />
            <ProfileOptionItem
              iconUrl={icons.notification}
              title="Notifications"
            />
            <ProfileOptionItem
              iconUrl={icons.orders}
              title="Transactions"
              navigate={() => navigation.navigate("Transactions")}
            />
            <ProfileOptionItem iconUrl={icons.coupon} title="coupons" />
            <ProfileOptionItem iconUrl={icons.coin} title="Supercoins Zone" />
            <ProfileOptionItem iconUrl={icons.gift} title="Gift Cards" />
            <ProfileOptionItem iconUrl={icons.help} title="Help Center" />
            <ProfileOptionItem iconUrl={icons.logout} title="Log out" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
