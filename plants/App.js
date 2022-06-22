import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { useFonts } from "expo-font";
import PlantDetail from "./screens/PlantDetail";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import PaymentMethod from "./screens/PaymentMethod";
import PaymentStatus from "./screens/PaymentStatus";
import Transactions from "./screens/Transactions";
import Notifications from "./screens/Notifications";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen
          name="PlantDetails"
          component={PlantDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
