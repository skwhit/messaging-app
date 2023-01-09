import { View, Text, Keyboard } from "react-native";

const ScreenHeader = ({ title }) => {
  return (
    <View
      onPress={Keyboard.dismiss}
      style={{
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingBottom: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
