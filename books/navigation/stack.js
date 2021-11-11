import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useStateContext } from "../context/StateContext";
import Tabs from "./tabs";
import BookDetail from "../screens/BookDetail";
import Welcome from "../screens/Welcome";
import Form from "../screens/Form";
import ContactInfo from "../screens/ContactInfo";
import PaymentMethod from "../screens/PaymentMethod";
import PaymentInfo from "../screens/PaymentInfo";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Welcome"}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Tabs"}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactInfo"
        component={ContactInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentInfo"
        component={PaymentInfo}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const { logged } = useStateContext();
  if (logged) {
    return <HomeNavigator />;
  } else {
    return <AuthNavigator />;
  }
};
