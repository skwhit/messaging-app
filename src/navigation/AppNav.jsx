import React, { useContext } from "react";
import { SafeAreaView, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";


import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { Loading } from "../components";

import { NavigationContainer } from "@react-navigation/native";

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  const { themes } = useTheme();

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loading />
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar backgroundColor={themes.background} style={themes.statusBar}/>
      {Platform.OS === "ios" ? <View style={{ backgroundColor: themes.background, height: 50, zIndex: 2, }}></View>: <></>}
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default AppNav;
