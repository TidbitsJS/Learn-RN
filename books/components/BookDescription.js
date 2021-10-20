import React from "react";
import { View, Text, Animated, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const BookDescription = ({ description }) => {
  const [scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
  const [scrollViewVisibleHeight, setScrollViewVisibleHeight] =
    React.useState(0);

  const indicator = new Animated.Value(0);

  const indicatorSize =
    scrollViewWholeHeight > scrollViewVisibleHeight
      ? (scrollViewVisibleHeight * scrollViewVisibleHeight) /
        scrollViewWholeHeight
      : scrollViewVisibleHeight;

  const difference =
    scrollViewVisibleHeight > indicatorSize
      ? scrollViewVisibleHeight - indicatorSize
      : 1;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        height: 210,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.font,
      }}
    >
      <View style={{ width: 4, height: "100%", backgroundColor: COLORS.gray1 }}>
        <Animated.View
          style={{
            width: 4,
            height: indicatorSize,
            backgroundColor: COLORS.lightGray4,
            transform: [
              {
                translateY: Animated.multiply(
                  indicator,
                  scrollViewVisibleHeight / scrollViewWholeHeight
                ).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingLeft: SIZES.padding2 }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={10}
        onContentSizeChange={(width, height) => {
          setScrollViewWholeHeight(height);
        }}
        onLayout={({
          nativeEvent: {
            layout: { x, y, width, height },
          },
        }) => {
          setScrollViewVisibleHeight(height);
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: indicator } } }],
          { useNativeDriver: false }
        )}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.white,
            marginBottom: SIZES.padding,
          }}
        >
          Description
        </Text>
        <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>
          {description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default BookDescription;
