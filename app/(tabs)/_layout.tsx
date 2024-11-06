import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

export default function TabsLayout() {
  const {
    colors: { tertiary },
  } = useTheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarLabelStyle: { color: "#fff" },
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarActiveTintColor: tertiary,
        headerStyle: {
          backgroundColor: "#663399",
        },
        tabBarStyle: {
          backgroundColor: "#663399",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "apps-sharp" : "apps-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="send/index"
        options={{
          title: "Send",
          href: null,
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "people-sharp" : "people-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
