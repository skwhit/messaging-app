import { SafeAreaView } from "react-native";
import { LoginScreen } from "../screens";

const AuthStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LoginScreen />
    </SafeAreaView>
  );
};

export default AuthStack;
