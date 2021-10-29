import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, lotties, SIZES } from "../constants";
import { discoverBooks } from "../data/dummy";
import LottieView from "lottie-react-native";

class ShopSomething extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: SIZES.font,
          marginBottom: SIZES.font,
        }}
      >
        <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>
          Ouch, <Text style={{ color: COLORS.primary }}>books</Text> are{" "}
          <Text style={{ color: COLORS.primary }}>missing</Text>
        </Text>

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
            source={lotties.basketLottie}
            loop={true}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View
          style={{
            backgroundColor: COLORS.gray,
            margin: SIZES.font,
            padding: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
          }}
        >
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.white,
              marginBottom: SIZES.font,
            }}
          >
            Discover new books
          </Text>

          <FlatList
            data={discoverBooks.slice(1, 5)}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ margin: SIZES.base }}
                onPress={() =>
                  navigation.navigate("BookDetail", { book: item })
                }
              >
                <Image
                  source={item.bookCover}
                  style={{ width: 100, height: 150, borderRadius: SIZES.base }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => `cartshop-${item.bookName}`}
          />
        </View>
      </View>
    );
  }
}

export default ShopSomething;
