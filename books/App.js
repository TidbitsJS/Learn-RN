import React from "react";
import { LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import { StateContextProvider } from "./context/StateContext";
import { RootNavigator } from "./navigation/stack";

LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

function App() {
  const [loaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StateContextProvider>
        <NavigationContainer theme={theme}>
          <RootNavigator />
        </NavigationContainer>
      </StateContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
