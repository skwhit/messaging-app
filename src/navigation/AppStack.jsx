import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Inbox, Compose, Sent, Details, Account } from "../screens";
import { NavIcon } from "../components";

//Initialize tab navigator
const Tab = createBottomTabNavigator();

//Navigation for the application using a tab navigator at bottom of screen.
const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inbox"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: Platform.OS === "android" ? 65 : 100,
          paddingHorizontal: 5,
          paddingTop: 5,
          backgroundColor: "rgba(34,36,40,1)",
          borderTopWidth: 0,
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
        initialParams={{ to: "" }}
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
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarButton: () => null,
          tabBarVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
