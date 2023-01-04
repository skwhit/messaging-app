import React, { createContext, useEffect, useState } from "react";

//Dependency
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "https://messaging-test.bixly.com";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}`, {
        "username": username,
        "password": password
      })
      .then(res => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e);
      });
    //   fetch(`${BASE_URL}/api-token-auth/`, {
        //   "username": username,
        //   "password": password
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //   })
    // setUserToken("kdjkfj");
    // AsyncStorage.setItem("userToken", "kdjkfj");
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken("userToken");
      setIsLoading(false);
    } catch (err) {
      console.log("isLoggedIn error", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
