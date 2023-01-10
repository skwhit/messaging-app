import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "../services/config";

//Dependencies
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

//Auth context and provider used to authenticate user at login and initial load.
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  //login function used to exchange login credentials for user token from the API
  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api-token-auth/`, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setUserToken(res.data.token);
        AsyncStorage.setItem("userToken", res.data.token);
      })
      .catch((e) => {
        console.log(e);
        alert("Username or password is invalid. Please try again.");
      });
    setIsLoading(false);
  };

  //Logout function used to remove user token from state and async storage
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  //isLoggedIn function used to determine if user was already logged in. Will skip login screen if so.
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (err) {
      console.log("isLoggedIn error", err);
      setIsLoading(false);
    }
  };

  //Calls isLoggedIn upon initial load
  useEffect(() => {
    isLoggedIn();
  }, []);

  //Provides authentication functions and user token to all children. I.e. the whole application
  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
