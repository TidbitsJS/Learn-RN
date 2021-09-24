import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import OrderHistoryGroup from "../components/OrderHistoryGroup";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { stats, transactions } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const StatCard = ({ item }) => {
  return (
    <View
      style={{
        height: 200,
        width: 170,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: SIZES.font,
        marginHorizontal: SIZES.font,
      }}
    >
      <Image source={item.iconUrl} style={{ width: 30, height: 30 }} />
      <View style={{ marginBottom: SIZES.font }}>
        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{item.title}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};

const Transactions = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        animated={true}
        backgroundColor={COLORS.lightGray}
        barStyle="dark-content"
      />
      <View style={{ flex: 1 }}>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <OrderHistoryGroup item={item} />}
          ListHeaderComponent={() => (
            <>
              <View
                style={{
                  width: "100%",
                  backgroundColor: COLORS.lightGray,
                  padding: SIZES.font,
                  minHeight: 170,
                }}
              >
                <TouchableOpacity
                  style={{ width: "100%", marginBottom: SIZES.font }}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Image
                      source={icons.leftArrow}
                      resizeMode="cover"
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: "100%",
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
                        style={{
                          width: "85%",
                          height: "85%",
                          borderRadius: 25,
                        }}
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
                <View
                  style={{
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: SIZES.padding,
                  }}
                >
                  <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>
                    My Stats
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    marginVertical: SIZES.font,
                    marginTop: SIZES.padding,
                  }}
                >
                  <FlatList
                    horizontal
                    data={stats}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <StatCard item={item} />}
                  />
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: COLORS.white,
                  padding: SIZES.font,
                  marginTop: SIZES.base,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={{ ...FONTS.h3, color: COLORS.secondary }}>
                  My History
                </Text>
                <View
                  style={{
                    flex: 1,
                    height: 1,
                    backgroundColor: COLORS.secondary,
                    marginLeft: SIZES.base,
                    marginTop: SIZES.font,
                  }}
                />
              </View>
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Transactions;
