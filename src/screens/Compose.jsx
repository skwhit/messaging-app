import { View, Text, TextInput, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { createMessage } from "../services/requests";

const Compose = () => {
  const { userToken } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [recipient, setRecipient] = useState('');
  const [body, setBody] = useState('')

  useEffect(() => {
    createMessage(userToken);
  }, []);

  

  return (
    <View>
      <TextInput
            name="recipient"
            onChangeText={(text) => setRecipient(text)}
            value={recipient}
            style={styles.input}
            placeholder="To:"
          />
      <TextInput
            name="title"
            onChangeText={(text) => setTitle(text)}
            value={title}
            style={styles.input}
            placeholder="Subject:"
          />
      <TextInput
            name="body"
            onChangeText={(text) => setBody(text)}
            value={body}
            style={styles.input}
            placeholder="Message"
          />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    width: "100%",
    height: 50,
    marginTop: 10,
    textAlign: "center",
    fontSize: "20",
    borderRadius: "5",
  },
});


export default Compose;
