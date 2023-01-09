import { SafeAreaView, TouchableOpacity, Text, View } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { getInboxMessages } from "../services/requests";
import { MessageList, ScreenHeader, Loading } from "../components";

const Inbox = () => {
  const { userToken } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getInboxMessages(userToken, setMessages, setIsLoading);
  }, []);

  return (
    <>
      <ScreenHeader title={"Inbox"} />
      {isLoading ? <Loading /> : <></>}
      <MessageList messages={messages} parent="Inbox" setIsLoading={setIsLoading}/>
    </>
  );
};

export default Inbox;
