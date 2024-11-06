import { MD3LightTheme as DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1E3A8A", // Blue - Trust, Security
    secondary: "#0D9488", // Teal - Calming, Reliable
    background: "#F9FAFB", // Light background for readability
    surface: "#FFFFFF", // White surface for cards and input fields
    tertiary: "#F59E0B", // Gold - Highlight, Call to action
    surfaceVariant: "#663399", // Dark gray text for high contrast
    onSurface: "#374151", // Dark gray for surface-based text
    placeholder: "#6B7280", // Gray for placeholders in forms
    error: "#EF4444", // Red for error messages
    success: "#10B981", // Green for success messages
  },
  roundness: 4, // Slightly rounded corners for a modern feel
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  //   fonts: {
  //     regular: {
  //       fontFamily: "Roboto",
  //       fontWeight: "400",
  //     },
  //     medium: {
  //       fontFamily: "Roboto",
  //       fontWeight: "500",
  //     },
  //     bold: {
  //       fontFamily: "Roboto",
  //       fontWeight: "700",
  //     },
  //   },
  animation: {
    scale: 1.2, // Slightly increased animation scale for a more dynamic feel
  },
};
