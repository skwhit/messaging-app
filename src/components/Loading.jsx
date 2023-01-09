import { View, Image, ActivityIndicator } from 'react-native'
import React from 'react';

const Loading = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: "center", backgroundColor: 'white', padding: 10}}>
      <ActivityIndicator
          size={"large"}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
    </View>
  )
}

export default Loading