import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaWrapper } from "../components";

import { AuthContext } from "../context/AuthContext";

//Login screen to authenticate user through username and password
const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Displays a welcome message with user input fields
  return (
    <>
      <SafeAreaWrapper>
        <View
          style={styles.container}
        >
          <View style={styles.login}>
            <View style={styles.itemContainer}>
              <Text style={styles.title}>
                Welcome
              </Text>
              <Text style={styles.text}>
                Please login below
              </Text>
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>
                Username
              </Text>
              <TextInput
                name="username"
                onChangeText={(text) => setUsername(text)}
                value={username}
                style={
                  styles.input
                }
              />
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>
                Password
              </Text>
              <TextInput
                name="password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                style={
                  styles.input}
              />
            </View>
            <TouchableOpacity
              onPress={() => login(username, password)}
              style={styles.button}
            >
              <Text style={{ color: "#FFFFFF" }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaWrapper>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 800,
    width: "100%",
    alignItems: "center",
    height: "100%",
  },
  login: {
    height: Platform.OS === "android" ? "65%" : "50%",
    width: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    fontSize: 30,
  },
  itemContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderWidth: 3,
    width: "100%",
    height: 50,
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "grey",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
  },
});

export default LoginScreen;
