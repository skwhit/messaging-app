import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

function App() {
  return (
    <>
    <StatusBar />
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </>
  );
}

export default App;
