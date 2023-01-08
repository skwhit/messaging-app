import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Inbox, Compose, Sent } from "../screens";
import { Navbar } from "../components";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Inbox"
          
        >
          <Stack.Screen style={{backgroundColor: 'white'}} name="Inbox" component={Inbox} />
          <Stack.Screen name="Sent" component={Sent} />
          <Stack.Screen style={{backgroundColor: 'white'}} name="Compose" component={Compose} />
        </Stack.Navigator>
        {/* <TouchableOpacity style={{ width: 50, height: 50, position: "absolute", top: 42, right: 0, bottom: 0, left: 10, zIndex: 1 }}>
        <Image source={hamburger} style={{ width: 50, height: 50 }} />
      </TouchableOpacity> */}
      <Navbar />
    </SafeAreaView>
  );
};

export default AppStack;
