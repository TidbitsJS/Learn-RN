import React from "react";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Tabs from "./navigation/tabs";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Balance from "./screens/Balance";
import MoneyHistory from "./screens/MoneyHistory";
import Games from "./screens/Games";
import Transfer from "./screens/Transfer";
import TopUp from "./screens/TopUp";
import PasswordConfirm from "./screens/PasswordConfirm";
import TransactionDetail from "./screens/TransactionDetail";
import { StateContextProvider } from "./context/StateContext";
import TopUpGame from "./screens/TopUpGame";
import TransferWallet from "./screens/TransferWallet";
import TransferBank from "./screens/TransferBank";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

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
    "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("./assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <StateContextProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Welcome"
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Sign Up" component={SignUp} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Balance" component={Balance} />
          <Stack.Screen name="MoneyHistory" component={MoneyHistory} />
          <Stack.Screen name="Games" component={Games} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="TopUp" component={TopUp} />
          <Stack.Screen name="PasswordConfirm" component={PasswordConfirm} />
          <Stack.Screen name="TopUpGame" component={TopUpGame} />
          <Stack.Screen name="TransferWallet" component={TransferWallet} />
          <Stack.Screen name="TransferBank" component={TransferBank} />
          <Stack.Screen
            name="TransactionDetail"
            component={TransactionDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StateContextProvider>
  );
};

export default App;
