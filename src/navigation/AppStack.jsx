import {
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inbox, Compose, Sent, Details } from "../screens";
import { Navbar } from "../components";

const Stack = createNativeStackNavigator();

const AppStack = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          gestureEnabled: false,
        }}
        initialRouteName="Inbox"
      >
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Sent" component={Sent} />
        <Stack.Screen name="Compose" component={Compose} />
        <Stack.Screen name="Details" component={Details} options={{gestureDirection: "vertical"}}/>
      </Stack.Navigator>
      <Navbar />
    </SafeAreaView>
  );
};

export default AppStack;
