import React, { createContext, useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";

//Dependencies
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);

  const themes = {
    background: !darkmode ? "#FFFFFF" : "#141414",
    text: !darkmode ? "#000000" : "#FFFFFF",
    border: !darkmode ? "#121212" : "#FFFFFF",
    placeholder: !darkmode ? "#C7C7CD" : "grey",
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
