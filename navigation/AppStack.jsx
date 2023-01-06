import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Messages from "../components/Messages/Messages";

const AppStack = () => {
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
      }}
    >
    <Messages/>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={{
          marginBottom: 80,
          backgroundColor: "blue",
          backgroundColor: "#000",
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          borderRadius: 20,
        }}
      >
        <Text style={{color: 'white'}}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppStack;
