import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { welcomeCarouselData } from "../data/dummy";

const WelcomeCarouselItem = ({ item }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.white,
      paddingHorizontal: SIZES.medium,
    }}
  >
    <Image source={item.imgUrl} style={{ width: 270, height: 270 }} />
    <Text style={{ ...FONTS.largeTitle, marginTop: SIZES.medium * 2 }}>
      Welcome
    </Text>
    <Text
      style={{
        ...FONTS.body3,
        color: COLORS.primary,
        padding: SIZES.medium,
        textAlign: "center",
      }}
    >
      {item.title}
    </Text>
  </View>
);

const Welcome = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar backgroundColor={COLORS.white} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: 650,
            paddingVertical: SIZES.medium,
          }}
        >
          <Carousel
            ref={isCarousel}
            data={welcomeCarouselData}
            renderItem={({ item }) => <WelcomeCarouselItem item={item} />}
            onSnapToItem={(index) => setIndex(index)}
            sliderWidth={SIZES.width}
            itemWidth={SIZES.width}
          />
          <Pagination
            dotsLength={welcomeCarouselData.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: COLORS.primary,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
          <TouchableOpacity
            style={{
              width: "90%",
              backgroundColor: COLORS.primary,
              color: COLORS.white,
              padding: SIZES.font,
              borderRadius: SIZES.medium * 1.5,
            }}
            activeOpacity={0.5}
            onPress={() => {
              if (index === welcomeCarouselData.length - 1) {
                navigation.navigate("Sign Up");
              } else {
                isCarousel.current.snapToNext();
              }
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.white,
                textAlign: "center",
              }}
            >
              {welcomeCarouselData[index].btnTitle}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
