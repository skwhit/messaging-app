import { View, Image } from 'react-native'
import React from 'react';
import { loadingGif } from '../../assets';

const Loading = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: "center", backgroundColor: 'white', padding: 10}}>
      <Image style={{height: 60, width: 60}} source={loadingGif}></Image>
    </View>
  )
}

export default Loading