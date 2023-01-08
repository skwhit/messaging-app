import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { formatTimestamp } from "../utils/functions";
import { formatMessage } from "../utils/functions";
import { useNavigation } from "@react-navigation/native";

const Message = ({ data, parent }) => {
  const { body, id, read, receiver, sender, sent, title } = data;
  const navigation = useNavigation();

  const date = formatTimestamp(sent);

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details")} style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          {parent === "inbox" ? `From: ${sender}` : `To: ${receiver}`}
        </Text>
        <Text>{date}</Text>
      </View>
      <Text style={styles.text}>Subject: {title}</Text>
      <Text style={styles.text}>{formatMessage(body)}</Text>
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
  }
});

export default Message;
