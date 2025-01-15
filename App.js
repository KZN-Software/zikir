import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import imsakiye from "./screens/imsakiye";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Zikirmatik"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
              if (rn === "Zikirmatik") {
                iconName = focused
                  ? "trending-down-outline"
                  : "trending-up-outline";
              } else if (rn === "İmsakiye") {
                iconName = focused ? "list" : "list-outline";
              } else if (rn === "Ayarlar") {
                iconName = focused ? "settings" : "settings";
              }
              return <Ionicons name={iconName} color={color} size={size} />;
            },
          })}
        >
          <Tab.Screen
            name="Zikirmatik"
            component={HomeScreen}
            options={{
              headerShown: true,
              headerStyle: {
                height: "0.5px",
                width: "80%",
                alignSelf: "center",
              },
            }}
          />
          <Tab.Screen
            name="İmsakiye"
            component={imsakiye}
            options={{
              headerShown: true,
              headerStyle: {
                height: "0.5px",
                width: "80%",
                alignSelf: "center",
              },
            }}
          />
          <Tab.Screen
            name="Ayarlar"
            component={SettingsScreen}
            options={{
              headerShown: true,
              headerStyle: {
                height: "0.5px",
                width: "80%",
                alignSelf: "center",
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
