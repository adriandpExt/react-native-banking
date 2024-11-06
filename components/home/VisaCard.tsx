import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Card, useTheme } from "react-native-paper";

export const VisaCard = () => {
  const {
    colors: { secondary, surface, onSurface, tertiary },
    roundness,
  } = useTheme();

  return (
    <Card
      style={{
        height: 240,
        width: "100%",
        backgroundColor: secondary,
      }}
    >
      <LinearGradient
        colors={["rgba(102, 51, 153, 1)", onSurface]}
        style={{
          borderRadius: roundness,
          position: "absolute",
          height: 240,
          left: 0,
          right: 0,
          top: 0,
        }}
      />
      <Card.Content
        style={{
          padding: 20,
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            textAlign: "right",
            color: tertiary,
          }}
        >
          VISA
        </Text>

        <Text
          style={{
            padding: 10,
            fontSize: 30,
            fontWeight: "600",
            color: surface,
          }}
        >
          Balance: PHP 1,000,000.00
        </Text>

        <View style={{ flex: 1 }} />

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: "600", color: surface }}>
            **** ***** ***** 3214
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "600", color: surface }}>
            Expire: 5/2035
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default VisaCard;
