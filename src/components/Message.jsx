import { View, Text } from "react-native";
import React from "react";

const Message = ({ data }) => {
  const { body, id, read, receiver, sender, sent, title } = data;

  return (
    <View>
      <View>
        <Text>{sender}</Text>
        <Text>{sent}</Text>
      </View>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default Message;
