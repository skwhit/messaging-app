import axios from "axios";
import { BASE_URL } from "./config";

//Gets an array of received messages from the server
export function getInboxMessages(token, setMessages, setIsLoading) {
  axios
    .get(`${BASE_URL}/messages/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      //reverses the messages so most current will be first. Data is then stored in state
      setMessages(res.data.reverse());
      setIsLoading(false);
    })
    .catch((e) => {
      setIsLoading(false);
    });
}

//Gets an array of sent messages from the server
export function getSentMessages(token, setMessages, setIsLoading) {
  axios
    .get(`${BASE_URL}/messages/sent/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      //reverses the messages so most current will be first. Data is then stored in state
      setMessages(res.data.reverse());
      setIsLoading(false);
    })
    .catch((e) => {
      setIsLoading(false);
    });
}

//Posts a message to the server and navigates user to sent screen
export function createMessage(token, title, body, receiver, navigation) {
  axios
    .post(
      `${BASE_URL}/messages/`,
      {
        title: title,
        body: body,
        receiver: receiver,
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => {
      //confirmation on success
      alert("Message has been sent.");
      navigation.navigate("Sent");
    })
    .catch((e) => {
      //User is notified if request is rejected due to invalid user
      alert("Recipient not found. Please try again.");
    });
}

//Request to get message detail using a specified id.
export function getMessageDetail(token, id, setDetails, setIsLoading) {
  axios
    .get(`${BASE_URL}/messages/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      //Message detail stored in state for display
      setDetails(res.data);
      setIsLoading(false);
    })
    .catch((e) => {
      setIsLoading(false);
    });
}

//Request to delete a message using a specified id
export function deleteMessage(token, id, navigation, parent) {
  axios
    .delete(`${BASE_URL}/messages/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      //confirmation message letting user know their message has been deleted
      alert("Message has been deleted.");
      //navigates user back to the page they came from
      navigation.reset({ index: 0, routes: [{ name: parent }] });
    })
    .catch((e) => {
      //Notifies user if message is unable to be deleted.
      alert(
        `Something went wrong when attempting to delete your message. Error Message: ${e}`
      );
    });
}
