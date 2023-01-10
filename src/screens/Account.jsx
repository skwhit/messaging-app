import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";

import { useTheme } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

import { SafeAreaWrapper } from "../components";
import { accountIcon } from "../../assets";

//user account screen where user can change settings and/or signout
const Account = () => {
  const { themes, darkmode, toggleDarkmode } = useTheme();
  const { logout } = useContext(AuthContext);

  return (
    <SafeAreaWrapper>
      <View style={[styles.container, { backgroundColor: themes.background }]}>
        <View>
          <View
            style={[styles.profileContainer, { borderColor: themes.border }]}
          >
            <Image style={styles.profileImg} source={accountIcon} />
            <Text style={[styles.profileText, { color: themes.text }]}>
              Your Account
            </Text>
          </View>
          <View style={styles.settingsContainer}>
            <View style={styles.itemContainer}>
              <Text style={[styles.text, { color: themes.text }]}>
                Dark Mode
              </Text>
              {/* Switch will toggle darkmode on and off for entire app */}
              <Switch
                trackColor={{ false: "#767577", true: "lightgrey" }}
                thumbColor={darkmode ? "white" : "lightgrey"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleDarkmode}
                value={darkmode}
              />
            </View>
            <View style={styles.itemContainer}></View>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.signout}>
            <Text onPress={() => logout()} style={styles.signoutText}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "space-between" },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
  },
  profileText: {
    fontSize: 30,
    paddingLeft: 20,
  },
  settingsContainer: {
    paddingTop: 20,
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginRight: 10,
  },
  signout: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 50,
    padding: 10,
    alignSelf: "flex-end",
    justifySelf: "flex-end",
    margin: 20,
    marginBottom: 40,
  },
  signoutText: {
    color: "white",
    fontSize: 16,
  },
});

export default Account;
