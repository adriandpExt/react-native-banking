import { View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Avatar,
  Button,
  Card,
  Divider,
  Icon,
  IconButton,
  MD3Colors,
  Menu,
  useTheme,
  Text,
  List,
} from "react-native-paper";

import {
  GestureHandlerRootView,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";

import { Fab, VisaCard } from "@/components/home";

import React from "react";

const transactions = [
  { id: 1, name: "Purchase at Store A", amount: "-$20.00", date: "2024-11-01" },
  { id: 2, name: "Payment Received", amount: "+$150.00", date: "2024-10-30" },
  { id: 3, name: "Purchase at Store B", amount: "-$45.99", date: "2024-10-28" },
  { id: 4, name: "Transfer to Bank", amount: "-$100.00", date: "2024-10-25" },
];

export default function Dashboard() {
  const {
    colors: { surfaceVariant, secondary, surface, onSurface, tertiary },
    roundness,
  } = useTheme();

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ height: "100%", padding: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Animated.View style={{ gap: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Avatar.Text size={40} label="XD" />
              <View>
                <Text variant="bodyLarge">Hi There, XD</Text>
                <Text variant="bodyLarge">Welcome back!</Text>
              </View>
            </View>

            <VisaCard />

            <Fab />

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text variant="titleMedium" style={{ fontWeight: 700 }}>
                  Recent Activity
                </Text>

                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={
                    <Button onPress={openMenu} textColor={surfaceVariant}>
                      All
                    </Button>
                  }
                >
                  <Menu.Item onPress={() => {}} title="Today" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Montly" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Annual" />
                </Menu>
              </View>

              <List.Section>
                {transactions.map((transaction) => (
                  <List.Item
                    style={{ margin: 0, paddingBottom: 0 }}
                    key={transaction.id}
                    title={transaction.name}
                    description={`Amount: ${transaction.amount}`}
                    left={(props) => <IconButton {...props} icon="receipt" />}
                    right={(props) => (
                      <Text {...props} style={{ color: "gray" }}>
                        {transaction.date}
                      </Text>
                    )}
                  />
                ))}
              </List.Section>
            </View>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
