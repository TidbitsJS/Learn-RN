import React from "react";
import { View, Text, SafeAreaView, FlatList, SectionList } from "react-native";
import GameHeader from "../components/game/GameHeader";
import GamesItem from "../components/game/GamesItem";
import { COLORS, FONTS, SIZES } from "../constants";
import { gamesData } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Games = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <SectionList
          sections={gamesData}
          initialNumToRender={1}
          keyExtractor={(item, index) => `game-${item + index}`}
          renderItem={({ item }) => (
            <FlatList
              data={item.gameList}
              numColumns={4}
              renderItem={({ item }) => <GamesItem item={item} />}
              keyExtractor={(item) => `Games-${item.id}`}
              showsVerticalScrollIndicator={false}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View
              style={{
                marginBottom: SIZES.base,
                marginTop: SIZES.medium * 1.25,
              }}
            >
              <Text style={{ ...FONTS.h3, color: COLORS.black }}>{title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <GameHeader navigation={navigation} />}
          ListFooterComponent={() => (
            <View
              style={{
                marginVertical: SIZES.font,
                paddingBottom: SIZES.font,
              }}
            >
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.black,
                  textAlign: "center",
                }}
              >
                . . .
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Games;
