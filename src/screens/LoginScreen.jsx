import { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";
import { SafeAreaWrapper } from "../components";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const { themes } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaWrapper>
      <View style={[styles.container, { backgroundColor: themes.background }]}>
        <View style={styles.login}>
          <View style={styles.itemContainer}>
            <Text style={[styles.title, { color: themes.text }]}>Welcome</Text>
            <Text style={[styles.text, { color: themes.text }]}>
              Please login below
            </Text>
          </View>
          <View style={styles.itemContainer}>
            <Text style={[styles.text, { color: themes.text }]}>Username</Text>
            <TextInput
              name="username"
              onChangeText={(text) => setUsername(text)}
              value={username}
              style={[
                styles.input,
                { borderColor: themes.border, color: themes.text },
              ]}
            />
          </View>
          <View style={styles.itemContainer}>
            <Text style={[styles.text, { color: themes.text }]}>Password</Text>
            <TextInput
              name="password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              style={[
                styles.input,
                { borderColor: themes.border, color: themes.text },
              ]}
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
