import { View, Text } from 'react-native'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { getInboxMessages } from '../../utils/messages'

const Messages = () => {
const { userToken } = useContext(AuthContext);

useEffect(() => {
  getInboxMessages(userToken)  
}, [])

  return (
    <View>
      <Text>Messages</Text>
    </View>
  )
}

export default Messages