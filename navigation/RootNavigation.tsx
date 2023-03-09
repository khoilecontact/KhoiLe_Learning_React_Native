import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ScreensStack from "./ScreensNavigation";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <ScreensStack />
    </NavigationContainer>
  );
}
