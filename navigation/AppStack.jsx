import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AppStack = () => {
  const { logout } = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => {
        logout();
      }}
      style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default AppStack;
