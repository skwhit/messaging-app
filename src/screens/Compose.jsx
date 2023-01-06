import { View, Text } from "react-native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { createMessage } from "../services/requests";

const Compose = () => {
  const { userToken } = useContext(AuthContext);

  useEffect(() => {
    createMessage(userToken);
  }, []);

  return (
    <View>
      <Text>Compose</Text>
    </View>
  );
};

export default Compose;
