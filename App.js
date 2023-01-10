import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";

import AppNav from "./src/navigation/AppNav";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <AppNav />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
