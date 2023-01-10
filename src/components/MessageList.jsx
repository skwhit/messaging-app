import { View, FlatList, RefreshControl, SafeAreaView } from "react-native";
import { useCallback, useContext, useState, useEffect } from "react";
import Message from "./Message";
import Loading from "./Loading";
import { AuthContext } from "../context/AuthContext";
import { getInboxMessages, getSentMessages } from "../services/requests";
import { useTheme } from "../context/ThemeContext";

const MessageList = ({ parent }) => {
  const { userToken } = useContext(AuthContext);
  const { themes } = useTheme();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    parent === "Inbox"
      ? getInboxMessages(userToken, setMessages, setIsLoading)
      : getSentMessages(userToken, setMessages, setIsLoading);
  }, []);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setIsLoading(true);
    parent === "Inbox"
      ? getInboxMessages(userToken, setMessages, setIsLoading)
      : getSentMessages(userToken, setMessages, setIsLoading);
    wait(2000).then(() => setIsLoading(false));
  }, []);

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
