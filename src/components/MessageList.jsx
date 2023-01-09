import { View, FlatList, RefreshControl } from "react-native";
import Message from "./Message";
import Loading from "./Loading";
import { useCallback } from "react";

const MessageList = ({messages, parent, isLoading, setMessages}) => {
   
  const onRefresh = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000)
  }, []);



  return (
    <View style={{backgroundColor: "white", paddingBottom: 40}}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message data={item} parent={parent}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{minHeight: "100%"}}
        refreshControl={(
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        )}
      />
    </View>
  );
};

export default MessageList;
