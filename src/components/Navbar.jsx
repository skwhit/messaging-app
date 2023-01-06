import { View, Text, TouchableOpacity } from 'react-native'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          logout();
        }}
        style={{
          marginBottom: 80,
          backgroundColor: "blue",
          backgroundColor: "#000",
          width: "60%",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          borderRadius: 20,
        }}
      >
        <Text style={{color: 'white'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar