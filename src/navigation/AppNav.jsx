import React, { useContext } from "react";
import { View, SafeAreaView } from "react-native";
import { AuthContext } from "../context/AuthContext";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

//Need to install depencies for the following imports
import { NavigationContainer } from "@react-navigation/native";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <ActivityIndicator
          size={"large"}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        /> */}
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
      {/* <View style={{ backgroundColor: "black", width: "100%", height: 35 }}></View> */}
    </NavigationContainer>
  );
};

export default AppNav;
