import { View, Text, Keyboard } from "react-native";
import { useTheme } from "../context/ThemeContext";

const ScreenHeader = ({ title }) => {

 const { themes } = useTheme();

  return (
    <View
      onPress={Keyboard.dismiss}
      style={{
        alignItems: "center",
        backgroundColor: themes.background,
        paddingBottom: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: themes.text }}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;
