import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inbox, Compose, Sent } from "../screens";
import { Navbar } from "../components";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <Stack.Navigator initialRouteName="Compose">
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Sent" component={Sent} />
        <Stack.Screen name="Compose" component={Compose} />
      </Stack.Navigator>
      <Navbar />
    </>
  );
};

export default AppStack;
