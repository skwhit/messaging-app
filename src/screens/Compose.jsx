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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createMessage } from "../services/requests";
import { ScreenHeader, SafeAreaWrapper } from "../components";
import { sendIcon } from "../../assets";

const Compose = ({ route }) => {
  const { userToken } = useContext(AuthContext);
  const { to } = route.params;
  const [title, setTitle] = useState("");
  const [recipient, setRecipient] = useState(to);
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      {/* <ScrollView style={styles.container}> */}
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
      <ScrollView>
        <TextInput
          name="body"
          multiline={true}
          onChangeText={(text) => setBody(text)}
          value={body}
          style={styles.messageInput}
          placeholder="Message"
        />
      </ScrollView>
      <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
        <Text style={styles.sendText}>Send</Text>
        <Image style={styles.sendImage} source={sendIcon} />
      </TouchableOpacity>
      {/* </ScrollView> */}
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
