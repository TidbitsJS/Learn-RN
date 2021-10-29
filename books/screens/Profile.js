import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <FocusedStatusBar
        animated={true}
        translucent={true}
        backgroundColor="transparent"
      />
      <ScrollView>
        <View style={{ flex: 1 }}>
          <ProfileHeader />
          <ProfileStats />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
