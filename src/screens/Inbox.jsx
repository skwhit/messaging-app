import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getInboxMessages } from '../services/requests';
import { MessageList, ScreenHeader } from '../components';

const Inbox = ({name}) => {

  const { userToken } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getInboxMessages(userToken, setMessages);
  }, []);

  return (
    <>
    <ScreenHeader title={"Inbox"}/>
    <MessageList messages={messages} parent="inbox"/>
    </>
  )
}

export default Inbox