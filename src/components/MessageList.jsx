import { View, Text, FlatList } from "react-native";
import Message from "./Message";

const MessageList = ({messages, parent}) => {
   

  return (
    <View style={{backgroundColor: "white", paddingBottom: 40}}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message data={item} parent={parent}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{minHeight: "100%"}}
      />
    </View>
  );
};

export default MessageList;
