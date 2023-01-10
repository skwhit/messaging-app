import React, { createContext, useEffect, useState, useContext } from "react";

//Dependencies
import AsyncStorage from "@react-native-async-storage/async-storage";

//Provides theme to the entire app
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Function used to toggle darkmode on user account page.
  const toggleDarkmode = () => {
    setDarkmode((previousState) => !previousState);
    !darkmode
      ? AsyncStorage.setItem("darkmode", "true")
      : AsyncStorage.removeItem("darkmode");
  };

  //Themes colors provided to app based on mode
  const themes = {
    background: !darkmode ? "#FFFFFF" : "#191919",
    text: !darkmode ? "#000000" : "#FFFFFF",
    border: !darkmode ? "#121212" : "#FFFFFF",
    placeholder: !darkmode ? "#grey" : "lightgrey",
    statusBar: !darkmode ? "dark" : "light",
  };

  //Funtion used to determine whether user settings are light or darkmode
  const getTheme = async () => {
    try {
      setIsLoading(true);
      let isDarkmode = await AsyncStorage.getItem("darkmode");
      isDarkmode.length ? setDarkmode(true) : setDarkmode(false);
      setIsLoading(false);
    } catch (err) {
      setDarkmode(false);
      setIsLoading(false);
    }
  };

  //calls getTheme on initial load which will automatically place the user in their desired mode.
  useEffect(() => {
    getTheme();
  }, []);

  //Provides all necesary themes and functions to children. I.e. the entire application.
  return (
    <ThemeContext.Provider
      value={{ themes, darkmode, setDarkmode, toggleDarkmode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

//Use theme function to created for ease of use of theme context.
export function useTheme() {
  return useContext(ThemeContext);
}
