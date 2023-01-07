import { View, Text, FlatList } from "react-native";
import Message from "./Message";

const MessageList = ({messages}) => {
  

  return (
    <View style={{borderWidth: 3, width: "95%"}} >
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message data={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MessageList;
