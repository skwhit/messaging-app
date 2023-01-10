import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

import { useTheme } from "../context/ThemeContext";

const SafeAreaWrapper = ({ children }) => {
  const { themes } = useTheme();
  return (
    <SafeAreaView
      style={[styles.AndroidSafeArea, { backgroundColore: themes.background }]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default SafeAreaWrapper;
