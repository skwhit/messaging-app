import React, { useContext } from "react";
import { SafeAreaView, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";


import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { Loading } from "../components";

import { NavigationContainer } from "@react-navigation/native";

//Used to navigate user to various parts of the application
const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);
  const { themes } = useTheme();

  //Will display loading icon when user is waiting to be authenticated.
  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Loading />
      </SafeAreaView>
    );
  }

  //Displays status bar and will either navigate user to login or the rest of the app.
  return (
    <>
      <StatusBar backgroundColor={themes.background} style={themes.statusBar}/>
      {/* Have to create a view and get status bar height to change background color in ios */}
      {Platform.OS === "ios" ? <View style={{ backgroundColor: themes.background, height: 50, zIndex: 2, }}></View>: <></>}
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  );
};

export default AppNav;
