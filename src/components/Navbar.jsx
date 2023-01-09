import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { inboxIcon, sentIcon, composeIcon, signoutIcon } from "../../assets";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Inbox");
        }}
        style={styles.linkContainer}
      >
        <Image style={styles.navIcon} source={inboxIcon} />
        <Text style={styles.text}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Sent");
        }}
        style={styles.linkContainer}
      >
        <Image style={styles.navIcon} source={sentIcon} />
        <Text style={styles.text}>Sent</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Compose", {to: ""});
        }}
        style={styles.linkContainer}
      >
        <Image style={styles.navIcon} source={composeIcon} />
        <Text style={styles.text}>Compose</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={styles.linkContainer}
      >
        <Image style={styles.navIcon} source={signoutIcon} />
        <Text style={styles.text}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flexDirection: "row",
    // position: "fixed",
    backgroundColor: "black"
  },
  linkContainer: {
    width: "25%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5
  },
  text: {
    color: "#FFFFFF"
  },
  navIcon: {width: "40%", height: 40, resizeMode: "stretch"},
});

export default Navbar;
