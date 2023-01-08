import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { getSentMessages } from "../services/requests";
import { MessageList, ScreenHeader } from "../components";

const Sent = ({ name }) => {
  const { userToken } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getSentMessages(userToken, setMessages);
  }, []);

  return (
    <>
      <ScreenHeader title={"Sent"} />
      <MessageList messages={messages} parent="Sent" />
    </>
  );
};

export default Sent;
