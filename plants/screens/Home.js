import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import AddFriends from "../components/AddFriends";
import NewPlantItem from "../components/NewPlantItem";
import TodayShare from "../components/TodayShare";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import { plants, friends } from "../data/dummy";

const Home = ({ navigation }) => {
  const [newPlants, setNewPlants] = React.useState(plants);
  const [friendList, setFriendList] = React.useState(friends);

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ScrollView>
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
                  renderItem={({ item, index }) => (
                    <NewPlantItem item={item} index={index} />
                  )}
                />
              </View>
            </View>
          </View>
        </View>

        <TodayShare navigation={navigation} />
        <AddFriends friendList={friendList} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
