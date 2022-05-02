import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";
import { Home } from "./src/screens/Home";
import { StatusBar, View } from "react-native";
import { Background } from "./src/components/Background";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsloaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsloaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
