import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Pressable } from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Text } from "react-native-paper";

type IconName = "send" | "bag" | "cart" | "scan";

const fabData = [
  {
    label: "Send",
    icon: "send",
    onPress: () => null,
    navigateTo: "/send",
  },
  {
    label: "Bill",
    icon: "bag",
    onPress: () => Alert.alert("Under Construction"),
    navigateTo: "/bill",
  },
  {
    label: "Shop",
    icon: "cart",
    onPress: () => Alert.alert("Under Construction"),
    navigateTo: "/cart",
  },
  {
    label: "Scan",
    icon: "scan",
    onPress: () => Alert.alert("Under Construction"),
  },
  { label: "See more", icon: "menu" },
];

export const Fab = () => {
  return (
    <Card
      style={{
        backgroundColor: "#FFF",
        padding: 10,
      }}
    >
      <Card.Content>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {fabData.map((item, index) => (
            <TouchableOpacity
              onPress={item.onPress}
              key={index}
              style={{
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.navigateTo ? (
                <Pressable
                  onPress={() => router.push(item?.navigateTo as any)}
                  style={{ alignItems: "center" }}
                >
                  <Ionicons
                    name={item.icon as IconName}
                    size={52}
                    color={"#663399"}
                    style={{ padding: 5 }}
                  />
                  <Text variant="bodySmall">{item.label}</Text>
                </Pressable>
              ) : (
                <Pressable style={{ alignItems: "center" }}>
                  <Ionicons
                    name={item.icon as IconName}
                    size={52}
                    color={"#663399"}
                    style={{ padding: 5 }}
                  />
                  <Text variant="bodySmall">{item.label}</Text>
                </Pressable>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Card.Content>
    </Card>
  );
};

export default Fab;
