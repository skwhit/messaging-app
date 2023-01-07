import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getSentMessages } from '../services/requests';
import { MessageList } from '../components';

const Sent = () => {
  
    const { userToken } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
      getSentMessages(userToken, setMessages);
    }, []);
  
    return (
      <SafeAreaView
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
      <MessageList messages={messages} parent="sent"/>
      </SafeAreaView>
    )
}

export default Sent