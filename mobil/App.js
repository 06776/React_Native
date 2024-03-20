import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HackerScreen from "./components/HackerScreen";
import SettingsScreen from "./components/SettingsScreen";
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hackerek" component={HackerScreen} />
        <Tab.Screen name="Beállítások" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
