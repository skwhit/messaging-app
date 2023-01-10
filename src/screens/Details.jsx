import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

import { getMessageDetail, deleteMessage } from "../services/requests";
import { formatTimestamp } from "../utils/functions";

import { SafeAreaWrapper, Loading } from "../components";

//Details component for displaying message detail when user clicks a message.
const Details = ({ route, navigation }) => {
  //takes in id params from inbox or sent messages
  const { id, parent } = route.params;
  const { userToken } = useContext(AuthContext);
  const { themes } = useTheme();

  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //Message detail will be requested on initial load and each time id changes.
  useEffect(() => {
    setIsLoading(true);
    getMessageDetail(userToken, id, setDetails, setIsLoading);
  }, [id]);

  const { body, receiver, sender, sent, title } = details;
  const inbox = parent == "Inbox" ? true : false;

  //Confirmation for when user presses delete button
  const handleDelete = () => {
    Alert.alert("Are you sure you want to delete this message?", "", [
      {
        text: "Yes",
        onPress: () => {
          //If user selects yes, message will be deleted from server.
          deleteMessage(userToken, id, navigation, parent);
        },
      },
      {
        text: "No",
      },
    ]);
  };

  //Displays message detail interface
  return (
    <SafeAreaWrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView style={{ backgroundColor: themes.background }}>
          <View style={styles.container}>
            <View
              style={[styles.headerContainer, { borderColor: themes.border }]}
            >
              <View style={styles.topHeader}>
                <Text style={[styles.text, { color: themes.text }]}>
                  {inbox ? `From: ${sender}` : `To: ${receiver}`}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={styles.closeButton}
                >
                  <Text
                    style={[styles.closeButtonText, { color: themes.text }]}
                  >
                    X
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={[styles.text, { color: themes.text }]}
              >{`Date: ${formatTimestamp(sent)}`}</Text>
              <Text
                style={[styles.text, { color: themes.text }]}
              >{`Subject: ${title}`}</Text>
            </View>
            <View style={styles.message}>
              <Text
                style={[styles.text, { color: themes.text }]}
              >{`${body}`}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Compose", {
                    to: inbox ? sender : receiver,
                  })
                }
                style={styles.replyButton}
              >
                <Text style={styles.buttonText}>
                  {inbox ? "Reply" : "Message Again"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                style={styles.deleteButton}
              >
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  closeButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerContainer: {
    borderBottomWidth: 1,
    width: "100%",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 23,
    marginBottom: 5,
  },
  message: {
    marginTop: 20,
    fontSize: 23,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 100,
  },
  replyButton: {
    backgroundColor: "#00B6F1",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: "#808080",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default Details;
