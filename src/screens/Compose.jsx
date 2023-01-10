import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { createMessage } from "../services/requests";

import { ScreenHeader, SafeAreaWrapper } from "../components";
import { sendIcon } from "../../assets";

const Compose = ({ route }) => {
  const { to } = route.params;
  const { userToken } = useContext(AuthContext);
  const { themes } = useTheme();

  const [title, setTitle] = useState("");
  const [recipient, setRecipient] = useState(to);
  const [body, setBody] = useState("");

  useEffect(() => {
    setRecipient(route.params.to);
  }, [route]);

  const handleSend = () => {
    recipient === ""
      ? alert("Please input a recipient.")
      : title === ""
      ? alert("Please input a subject.")
      : body === ""
      ? alert("Please input a message.")
      : Alert.alert("Are you sure you want to send this message?", "", [
          {
            text: "Yes",
            onPress: () => {
              createMessage(userToken, title, body, recipient);
            },
          },
          {
            text: "No",
          },
        ]);
  };

  return (
    <SafeAreaWrapper>
      <ScreenHeader title={"Compose"} />
      <View style={[styles.container, { backgroundColor: themes.background }]}>
        <View style={[styles.inputContainer, { borderColor: themes.border }]}>
          <Text style={[styles.text, { color: themes.text }]}>To: </Text>
          <TextInput
            name="recipient"
            onChangeText={(text) => setRecipient(text)}
            value={recipient}
            style={styles.input}
          />
        </View>
        <View style={[styles.inputContainer, { borderColor: themes.border }]}>
          <Text style={[styles.text, { color: themes.text }]}>Subject: </Text>
          <TextInput
            name="title"
            onChangeText={(text) => setTitle(text)}
            value={title}
            style={styles.input}
          />
        </View>
        <ScrollView>
          <TextInput
            name="body"
            multiline={true}
            onChangeText={(text) => setBody(text)}
            value={body}
            style={[styles.messageInput, { borderColor: themes.border }]}
            placeholder="Message"
            placeholderTextColor={themes.placeholder}
          />
        </ScrollView>
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={[styles.sendText, { color: themes.text }]}>Send</Text>
          <Image style={styles.sendImage} source={sendIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 8,
    borderTopWidth: 1,
    maxHeight: 300,
  },
  sendButton: {
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 60,
    borderRadius: 10,
  },
  sendImage: {
    width: 25,
    height: 25,
    zIndex: 3,
  },
  sendText: {
    fontSize: 17,
    marginRight: 2,
  },
});

export default Compose;
