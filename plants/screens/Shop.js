import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { plantsData } from "../data/dummy";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import ShopFooterItem from "../components/ShopFooterItem";
import ShopItem from "../components/ShopItem";
import { SwipeListView } from "react-native-swipe-list-view";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Shop = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGreen }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGreen}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, backgroundColor: COLORS.lightGreen }}>
        <View style={{ flex: 1, marginTop: SIZES.font }}>
          <SwipeListView
            data={plantsData.slice(7, 13)}
            keyExtractor={(item) => "shop-" + item.name}
            renderItem={({ item }) => (
              <ShopItem item={item} navigation={navigation} />
            )}
            renderHiddenItem={(data, rowMap) => (
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  padding: SIZES.base,
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    right: 0,
                    height: "100%",
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    padding: SIZES.font,
                    width: 90,
                    borderTopRightRadius: SIZES.base,
                    borderBottomRightRadius: SIZES.base,
                  }}
                >
                  <Image
                    source={icons.trash}
                    resizeMode="cover"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
              </View>
            )}
            rightOpenValue={-100}
            previewRowKey={"0"}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={() => {}}
            ListHeaderComponent={() => (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: SIZES.padding,
                }}
              >
                <Text
                  style={{ ...FONTS.h1, color: COLORS.secondary }}
                >{`My \nCart`}</Text>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    padding: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                  }}
                >
                  <Image
                    source={images.profile5}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%", borderRadius: 30 }}
                  />
                </View>
              </View>
            )}
            ListFooterComponent={() => (
              <View style={{ flex: 1, margin: SIZES.padding }}>
                <ShopFooterItem
                  isImage={true}
                  title="coupon"
                  subtitle="ecofriendly"
                  titleColor={COLORS.blackShed}
                  subtitleColor="#2ECC71"
                  bgColor={COLORS.white}
                  bold={false}
                  font={FONTS.body5}
                />

                <ShopFooterItem
                  isImage={false}
                  title="total"
                  subtitle="$2451"
                  titleColor={COLORS.white}
                  subtitleColor={COLORS.white}
                  bgColor={COLORS.primary}
                  bold={true}
                  font={FONTS.body2}
                />

                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: SIZES.base,
                  }}
                  activeOpacity={0.5}
                >
                  <Text
                    style={{
                      ...FONTS.body3,
                      textAlign: "center",
                      paddingHorizontal: SIZES.base,
                      color: COLORS.secondary,
                      fontWeight: "bold",
                    }}
                  >
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Shop;
