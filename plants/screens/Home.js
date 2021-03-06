import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import AddFriends from "../components/AddFriends";
import NewPlantItem from "../components/NewPlantItem";
import TodayShare from "../components/TodayShare";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { plantsData, friends } from "../data/dummy";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const Home = ({ navigation }) => {
  const [newPlants, setNewPlants] = React.useState(plantsData.slice(0, 4));
  const [friendList, setFriendList] = React.useState(friends);

  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <FocusedStatusBar animated={true} backgroundColor={COLORS.primary} />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View
              style={{
                flex: 1,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                backgroundColor: COLORS.primary,
                paddingBottom: SIZES.base,
              }}
            >
              <View
                style={{
                  marginTop: SIZES.padding,
                  marginHorizontal: SIZES.padding,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                    New Plants
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      console.log("Focuse on pressed");
                    }}
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

                <View style={{ marginTop: SIZES.base }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={newPlants}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                      <NewPlantItem item={item} navigation={navigation} />
                    )}
                  />
                </View>
              </View>
            </View>
          </View>

          <TodayShare navigation={navigation} />
          <AddFriends friendList={friendList} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
