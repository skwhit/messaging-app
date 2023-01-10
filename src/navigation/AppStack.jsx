import {
  SafeAreaView,
  Image,
  Platform,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Inbox, Compose, Sent, Details, Account } from "../screens";
import { NavIcon } from "../components";
import { inboxIcon, sentIcon, composeIcon, signoutIcon } from "../../assets";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <>
    {/* <SafeAreaView style={styles.AndroidSafeArea}> */}
      <Tab.Navigator
        initialRouteName="Inbox"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: Platform.OS === "android" ? 65 : 100,
            paddingHorizontal: 5,
            paddingTop: 5,
            backgroundColor: "rgba(34,36,40,1)",
            borderTopWidth: 0
          },
        })}
      >
        <Tab.Screen
          name="Inbox"
          options={{
            tabBarIcon: () => <NavIcon type={"Inbox"} />,
          }}
          component={Inbox}
        />
        <Tab.Screen
          name="Sent"
          component={Sent}
          options={{
            tabBarIcon: () => <NavIcon type={"Sent"} />,
          }}
        />
        <Tab.Screen
          name="Compose"
          component={Compose}
          options={{
            tabBarIcon: () => <NavIcon type={"Compose"} />,
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: () => <NavIcon type={"Account"} />,
          }}
        />
        {/* <Tab.Screen name="Details" component={Details} options={{gestureDirection: "vertical"}}/> */}
      </Tab.Navigator>
      {/* <Navbar /> */}
    {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default AppStack;
