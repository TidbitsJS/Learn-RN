import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TransferHeader from "../components/TransferHeader";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

const TransferMoneyItem = ({ bgColor, bgIconColor, iconUrl, title }) => (
  <TouchableOpacity
    style={{
      paddingVertical: SIZES.medium * 1.5,
      paddingHorizontal: SIZES.padding,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: bgColor,
      borderRadius: SIZES.font,
      margin: SIZES.base,
    }}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: SIZES.base,
        backgroundColor: bgIconColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={iconUrl}
        style={{ width: "50%", height: "50%", tintColor: COLORS.white }}
      />
    </View>
    <View>
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.black,
          fontFamily: "MSans-Light",
        }}
      >
        Transfer your Money
      </Text>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.black,
          fontFamily: "MSans-ExtraBold",
          marginTop: 2,
        }}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const TransactionProfileItem = ({
  bgColor,
  imgUrl,
  name,
  transferId,
  amount,
  textColor,
}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.medium,
      margin: SIZES.base,
      borderRadius: SIZES.medium,
      backgroundColor: bgColor,
      minHeight: 210,
    }}
  >
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.padding,
      }}
    >
      <Image
        source={imgUrl}
        style={{ width: 50, height: 50, borderRadius: SIZES.base }}
        resizeMode="cover"
      />
      <Text
        style={{
          ...FONTS.body5,
          color: COLORS.black,
          fontFamily: "MSans-Light",
          marginTop: 5,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          ...FONTS.h4,
          fontFamily: "MSans-ExtraBold",
          color: COLORS.black,
          textAlign: "center",
        }}
      >
        {transferId}
      </Text>
    </View>

    <View
      style={{
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.padding,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.font,
      }}
    >
      <Text
        style={{
          ...FONTS.h4,
          lineHeight: 18,
          textAlign: "center",
          color: textColor,
        }}
      >
        {amount}
      </Text>
    </View>
  </TouchableOpacity>
);

const Transfer = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
          <TransferHeader navigation={navigation} />
          <View style={{ marginVertical: SIZES.base }}>
            <TransferMoneyItem
              bgColor={COLORS.lightyellow}
              bgIconColor={COLORS.yellow}
              iconUrl={icons.wallet}
              title="Wallet to Wallet"
            />
            <TransferMoneyItem
              bgColor={COLORS.lightGreen}
              bgIconColor={COLORS.green}
              iconUrl={icons.bank}
              title="Wallet to Bank"
            />
          </View>
          <View style={{ marginVertical: SIZES.font }}>
            <Text style={{ ...FONTS.h3, color: COLORS.black }}>
              Recent Transaction
            </Text>

            <View
              style={{
                flexDirection: "row",
                marginVertical: SIZES.padding,
              }}
            >
              <TransactionProfileItem
                bgColor={COLORS.lightGreen}
                imgUrl={images.holmes}
                name="MyCroft Holmes"
                transferId="******896890"
                amount="+ 510.23"
                textColor={COLORS.green}
              />
              <TransactionProfileItem
                bgColor={COLORS.lightRed}
                imgUrl={images.holmes}
                name="Enola Holmes"
                transferId="******673489"
                amount="- 120.55"
                textColor={COLORS.red}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transfer;
