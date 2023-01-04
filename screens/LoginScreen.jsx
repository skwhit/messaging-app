import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.login}>
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text}>Please login below</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Username</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity onPress={() => login("test", "test123!")} style={styles.button}>
            <Text style={{color: '#fff'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    // borderWidth: 3,
    alignItems: "center",
    // justifyContent: "center",
  },
  login: {
    height: "50%",
    width: "90%",
    // borderWidth: 3,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 60
  },
  title: {
    fontSize: "30",
  },
  text: {
    color: "#000",
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
    textAlign: 'center',
    fontSize: '20',
    borderRadius: "5"
  },
  button: {
    backgroundColor: "#000",
    width: "60%",
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20
  },
});

export default LoginScreen;
