import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getInboxMessages } from '../services/requests';
import { MessageList } from '../components';

const Inbox = () => {

  const { userToken } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getInboxMessages(userToken, setMessages);
  }, []);

  return (
    <>
    <MessageList messages={messages} parent="inbox"/>
    </>
  )
}

export default Inbox