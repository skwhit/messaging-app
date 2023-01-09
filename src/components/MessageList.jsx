import { View, FlatList, RefreshControl } from "react-native";
import Message from "./Message";
import Loading from "./Loading";

const MessageList = ({messages, parent, setIsLoading}) => {
   

  return (
    <View style={{backgroundColor: "white", paddingBottom: 40}}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message data={item} parent={parent}/>}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{minHeight: "100%"}}
        // refreshControl={
        //   <RefreshControl refreshing={<Loading/>} onRefresh={setIsLoading(true)} />
        // }
      />
    </View>
  );
};

export default MessageList;
