import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import HeadTitle from "../common/HeadTitle";
import { COLORS, FONTS, icons, SIZES } from "../../constants";
import BalanceCard from "../common/BalanceCard";

const diamondTokens = [
  {
    id: 1,
    amount: 20,
  },
  {
    id: 2,
    amount: 50,
  },
  {
    id: 3,
    amount: 100,
  },
  {
    id: 4,
    amount: 200,
  },
  {
    id: 5,
    amount: 500,
  },
];

const DiamondTokenCard = ({ amount }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: COLORS.lightGreen,
      paddingVertical: SIZES.base,
      paddingHorizontal: SIZES.padding,
      margin: 5,
      borderRadius: SIZES.padding,
    }}
  >
    <Image
      source={icons.diamond}
      style={{ width: 15, height: 15 }}
      resizeMode="cover"
    />
    <Text
      style={{
        ...FONTS.h4,
        color: COLORS.black,
        marginLeft: SIZES.base,
      }}
    >
      {amount}
    </Text>
  </TouchableOpacity>
);

const TopUpGameHeader = ({ navigation }) => {
  const [user, setUser] = React.useState({
    id: "",
    amount: 0,
  });

  return (
    <View style={{ marginVertical: SIZES.font }}>
      <HeadTitle title="top up game" navigation={navigation} />
      <BalanceCard />

      <View style={{ marginVertical: SIZES.medium }}>
        <Text style={{ ...FONTS.h3, color: COLORS.black }}>Top Up Detail</Text>

        <View style={{ marginVertical: SIZES.medium }}>
          <Text style={{ ...FONTS.h4, color: COLORS.black }}>User Id</Text>
          <TextInput
            placeholder="Enter User ID"
            value={user.id}
            onChangeText={(text) => setUser({ ...user, id: text })}
            placeholderTextColor={COLORS.darkgray2}
            style={{
              ...FONTS.body4,
              color: COLORS.black,
              borderBottomWidth: 0.5,
              borderBottomColor: COLORS.gray,
              paddingVertical: SIZES.base,
            }}
          />
        </View>

        <View>
          <Text style={{ ...FONTS.h4, color: COLORS.black }}>Amount</Text>

          <FlatList
            data={diamondTokens}
            renderItem={({ item }) => <DiamondTokenCard amount={item.amount} />}
            keyExtractor={(item) => `diamond-${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: SIZES.base }}
          />
        </View>
      </View>
    </View>
  );
};

export default TopUpGameHeader;
