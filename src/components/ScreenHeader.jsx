import { View, Text, Keyboard, Image, TouchableOpacity } from "react-native";

const ScreenHeader = ({ title }) => {
  return (
    <View
      onPress={Keyboard.dismiss}
      style={{
        alignItems: "center",
        backgroundColor: "white",
        paddingBottom: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
