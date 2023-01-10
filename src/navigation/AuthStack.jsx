import { SafeAreaView } from "react-native";
import { LoginScreen } from "../screens";

//If not logged in, user is directed to login screen for authentication.
const AuthStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default AuthStack;
