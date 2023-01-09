import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createMessage } from "../services/requests";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { ScreenHeader } from "../components";
import { sendIcon } from "../../assets";

const Compose = ({ route }) => {
  const { userToken } = useContext(AuthContext);
  const { to } = route.params;
  const [title, setTitle] = useState("");
  const [recipient, setRecipient] = useState(to.length ? to : "");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   createMessage(userToken);
  // }, []);

  return (
    <>
      <ScreenHeader title={"Compose"} />
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>To: </Text>
          <TextInput
            name="recipient"
            onChangeText={(text) => setRecipient(text)}
            value={recipient}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Subject: </Text>
          <TextInput
            name="title"
            onChangeText={(text) => setTitle(text)}
            value={title}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            name="body"
            multiline={true}
            onChangeText={(text) => setBody(text)}
            value={body}
            style={styles.messageInput}
            placeholder="Message"
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    maxHeight: "100%",
    paddingBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
  input: {
    fontSize: 20,
    paddingVertical: 9,
    width: "100%",
  },
  messageInput: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 9,
    padding: 8,
    borderTopWidth: 1,
  },
  sendButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 10,
    width: "20%",
    height: 60,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  sendImage: {
    width: "50%",
    height: 30,
    zIndex: 3,
  },
  sendText: {
    color: "white",
  },
});

export default Compose;
