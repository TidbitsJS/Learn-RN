import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import PlantView from "../components/PlantView";
import Requirements from "../components/Requirements";
import RequirementsBar from "../components/RequirementsBar";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import { plantsData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const PlantDetail = ({ route, navigation }) => {
  const [showPlant, setShowPlant] = useState(false);
  const [likePlant, setLikePlant] = useState(false);

  const { plantId } = route.params;
  const displayPlant = plantsData.filter((plant) => plant.id === plantId);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
      <FocusedStatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        {showPlant && (
          <PlantView
            imgUrl={displayPlant[0].imgUrl}
            onHandleClose={() => setShowPlant(false)}
          />
        )}
        <ScrollView>
          <View>
            <Image
              source={images.bannerBg}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 270,
              }}
            />
          </View>

          <View
            style={{
              position: "absolute",
              top: 40,
              left: SIZES.padding,
              right: SIZES.padding,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 20,
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                  }}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                      width: 15,
                      height: 15,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
                onPress={() => console.log("Focus on pressed")}
              >
                <Image
                  source={icons.focus}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                height: 130,
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: COLORS.white, ...FONTS.longTitle }}
                numberOfLines={2}
              >
                {displayPlant[0].name}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                position: "absolute",
                backgroundColor: COLORS.white,
                bottom: -35,
                right: 0,
                zIndex: 1,
                padding: SIZES.base * 1.25,
                borderRadius: SIZES.padding,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: COLORS.white,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 2,
              }}
              onPress={() => {
                setLikePlant(!likePlant);
                console.log("click click");
              }}
            >
              <Image
                source={
                  likePlant || displayPlant[0].favourite
                    ? icons.heartRed
                    : icons.heartGreenOutline
                }
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              marginTop: -40,
              backgroundColor: COLORS.lightGray,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              paddingVertical: SIZES.padding,
            }}
          >
            <View style={{ flex: 1, marginVertical: SIZES.base }}>
              <Text
                style={{
                  paddingHorizontal: SIZES.padding,
                  color: COLORS.secondary,
                  ...FONTS.h2,
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  paddingHorizontal: SIZES.padding,
                  marginVertical: SIZES.base,
                  ...FONTS.body4,
                  color: COLORS.secondary,
                }}
              >
                {displayPlant[0].desc}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setShowPlant(true)}
              style={{
                width: "100%",
                marginVertical: SIZES.base,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={displayPlant[0].imgUrl}
                resizeMode="cover"
                style={{ width: "90%", height: 250, borderRadius: SIZES.base }}
              />
              <Text
                style={{
                  ...FONTS.body4,
                  textAlign: "center",
                  marginTop: SIZES.base,
                  paddingHorizontal: SIZES.padding,
                }}
              >
                {displayPlant[0].name}
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.padding,
                color: COLORS.secondary,
                ...FONTS.h2,
              }}
            >
              Requirements
            </Text>

            <RequirementsBar />
            <Requirements />

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: SIZES.padding * 2,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  paddingHorizontal: SIZES.padding,
                  paddingVertical: SIZES.padding,
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 30,
                  borderBottomRightRadius: 30,
                  backgroundColor: COLORS.primary,
                }}
                onPress={() => console.log("Take Action")}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                  Take Action
                </Text>
                <Image
                  source={icons.chevron}
                  resizeMode="contain"
                  style={{
                    marginLeft: SIZES.padding,
                    width: 15,
                    height: 15,
                  }}
                />
              </TouchableOpacity>

              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.padding,
                }}
              >
                <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h4 }}>
                  Almost 2 weeks of growing time
                </Text>
                <Image
                  source={icons.downArrow}
                  resizeMode="contain"
                  style={{
                    tintColor: COLORS.secondary,
                    marginLeft: SIZES.base,
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
