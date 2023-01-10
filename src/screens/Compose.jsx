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
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { createMessage } from "../services/requests";

import { ScreenHeader, SafeAreaWrapper } from "../components";
import { sendIcon } from "../../assets";

//Compose screen for sending out a message
const Compose = ({ route }) => {
  const { to } = route.params;
  const { userToken } = useContext(AuthContext);
  const { themes } = useTheme();
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [recipient, setRecipient] = useState(to);
  const [body, setBody] = useState("");

  //To: recipient is set to route parameters on initial load and when route is changed.
  useEffect(() => {
    setRecipient(route.params.to);
  }, [route]);

  //Function to handle edge cases and confirmation when user hits send message button.
  const handleSend = () => {
    //User alerted if they leave recipient, subject, or message blank.
    recipient === ""
      ? alert("Please input a recipient.")
      : title === ""
      ? alert("Please input a subject.")
      : body === ""
      ? alert("Please input a message.")
      //If fields are filled in. User is asked to confirm message to be sent
      : Alert.alert("Are you sure you want to send this message?", "", [
          {
            text: "Yes",
            onPress: () => {
              createMessage(userToken, title, body, recipient, navigation);
            },
          },
          {
            text: "No",
          },
        ]);
  };

  //Displays input fields and send message button
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
            style={[styles.input, {color: themes.text}]}
          />
        </View>
        <View style={[styles.inputContainer, { borderColor: themes.border }]}>
          <Text style={[styles.text, { color: themes.text }]}>Subject: </Text>
          <TextInput
            name="title"
            onChangeText={(text) => setTitle(text)}
            value={title}
            style={[styles.input, {color: themes.text}]}
          />
        </View>
        <ScrollView>
          <TextInput
            name="body"
            multiline={true}
            onChangeText={(text) => setBody(text)}
            value={body}
            style={[styles.messageInput, { borderColor: themes.border, color: themes.text }]}
            placeholder="Message"
            placeholderTextColor={themes.placeholder}
          />
        
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={[styles.sendText, { color: themes.text }]}>Send</Text>
          <Image style={styles.sendImage} source={sendIcon} />
        </TouchableOpacity>
        </ScrollView>
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
