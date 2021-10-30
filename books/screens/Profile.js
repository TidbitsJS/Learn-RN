import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import FocusedStatusBar from "../utils/FocusedStatusBar";
import { COLORS } from "../constants";
import ProfileSettings from "../components/ProfileSettings";

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
          <ProfileSettings />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
