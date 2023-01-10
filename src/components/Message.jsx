import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "../context/ThemeContext";

import { formatTimestamp } from "../utils/functions";
import { formatMessage } from "../utils/functions";

//Message component used as a template for inbox message and sent message
const Message = ({ data, parent }) => {
  const { body, receiver, sender, sent, title } = data;

  const navigation = useNavigation();
  const { themes } = useTheme();

  //formats date in mm/dd/yyyy format
  const date = formatTimestamp(sent);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", { id: data.id, parent: parent })
      }
      style={[styles.container, { borderColor: themes.border }]}
    >
      <View style={styles.headerContainer}>
        <Text style={[styles.header, { color: themes.text }]}>
          {parent === "Inbox" ? `From: ${sender}` : `To: ${receiver}`}
        </Text>
        <Text style={{ color: themes.text }}>{date}</Text>
      </View>
      <Text style={[styles.text, { color: themes.text }]}>
        Subject: {title}
      </Text>
      <Text style={[styles.text, { color: themes.text }]}>
        {formatMessage(body)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopWidth: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 23,
    fontWeight: "bold",
  },
  text: {
    marginTop: 5,
    fontSize: 18,
  },
});

export default Message;
