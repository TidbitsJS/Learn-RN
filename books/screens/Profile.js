import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import { COLORS } from "../constants";
import FocusedStatusBar from "../utils/FocusedStatusBar";

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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
