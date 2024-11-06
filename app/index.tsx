import { View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useTheme } from "react-native-paper";

export default function Main() {
  const {
    colors: { surfaceVariant },
  } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: surfaceVariant,
      }}
    >
      <Link
        href="/(tabs)"
        style={{
          fontSize: 20,
          color: "#fff",
          textDecorationLine: "none",
          fontWeight: "bold",
        }}
      >
        Get Started
      </Link>
    </View>
  );
}
