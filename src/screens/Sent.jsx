import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { getSentMessages } from "../services/requests";
import { MessageList, ScreenHeader, Loading } from "../components";

const Sent = ({ name }) => {
  const { userToken } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSentMessages(userToken, setMessages, setIsLoading);
  }, []);

  return (
    <>
      <ScreenHeader title={"Sent"} />
      {isLoading ? <Loading /> : <></>}
      <MessageList messages={messages} parent="Sent" setIsLoading={setIsLoading}/>
    </>
  );
};

export default Sent;
