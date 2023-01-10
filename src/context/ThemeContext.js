import React, { createContext, useEffect, useState, useContext } from "react";

//Dependencies
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTheme();
  }, []);

  useEffect(() => {
    darkmode
      ? AsyncStorage.setItem("darkmode", "true")
      : AsyncStorage.removeItem("darkmode");
  }, [darkmode]);

  const themes = {
    background: !darkmode ? "#FFFFFF" : "#191919",
    text: !darkmode ? "#000000" : "#FFFFFF",
    border: !darkmode ? "#121212" : "#FFFFFF",
    placeholder: !darkmode ? "#grey" : "lightgrey",
    statusBar: !darkmode ? "dark" : "light",
  };

  const getTheme = () => {
    setIsLoading(true);
    let isDarkmode = AsyncStorage.getItem("darkmode");
    isDarkmode ? setDarkmode(true) : setDarkmode(false)
    setIsLoading(false);
    try {
      setIsLoading(true);
      let isDarkmode = AsyncStorage.getItem("darkmode");
      setDarkmode(isDarkmode);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <ThemeContext.Provider value={{ themes, darkmode, setDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
