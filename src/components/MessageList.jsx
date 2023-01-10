import { useCallback, useContext, useState, useEffect } from "react";
import { FlatList, RefreshControl, SafeAreaView } from "react-native";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { getInboxMessages, getSentMessages } from "../services/requests";

import Message from "./Message";

const MessageList = ({ parent }) => {
  const { userToken } = useContext(AuthContext);
  const { themes } = useTheme();

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //get messages called on initial load
  useEffect(() => {
    parent === "Inbox"
      ? getInboxMessages(userToken, setMessages, setIsLoading)
      : getSentMessages(userToken, setMessages, setIsLoading);
  }, []);

  //creates short syntax which is used to timeout refresh request below
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  //get messages is called again upon user refresh
  const onRefresh = useCallback(() => {
    setIsLoading(true);
    parent === "Inbox"
      ? getInboxMessages(userToken, setMessages, setIsLoading)
      : getSentMessages(userToken, setMessages, setIsLoading);
    wait(2000).then(() => setIsLoading(false));
  }, []);

  //maps over messages and creates a list that user can scroll through and user can refresh through pull down
  return (
    <SafeAreaView style={{ backgroundColor: themes.background, flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message data={item} parent={parent} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
            tintColor={"clear"}
          />
        }
      />
    </SafeAreaView>
  );
};

export default MessageList;
