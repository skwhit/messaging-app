import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";

import { useTheme } from "../context/ThemeContext";

//Safe area wrapper thats used to avoid status bar on both iphone and android. Looks up status bar height for android.
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
