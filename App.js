import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getMessages } from "./utils/messages";

import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";

function App() {
 

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
