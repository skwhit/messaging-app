import axios from "axios";
import { BASE_URL } from "./config";

export function getInboxMessages(token, setMessages, setIsLoading) {
  axios
    .get(`${BASE_URL}/messages/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setMessages(res.data.reverse());
      setIsLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setIsLoading(false);
    });
}

export function getSentMessages(token, setMessages, setIsLoading) {
  axios
    .get(`${BASE_URL}/messages/sent/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setMessages(res.data.reverse());
      setIsLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setIsLoading(false);
    });
}

export function createMessage(token, title, body, receiver) {
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
      console.log(res);
      alert("Message has been sent.");
    })
    .catch((e) => {
      console.log(e);
      alert("Recipient not found. Please try again.");
    });
}

export function getMessageDetail(token, id, setDetails, setIsLoading) {
  axios
    .get(`${BASE_URL}/messages/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setDetails(res.data);
      setIsLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setIsLoading(false);
    });
}

export function deleteMessage(token, id, navigation, parent) {
  axios
    .delete(`${BASE_URL}/messages/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      alert("Message has been deleted.");
      navigation.reset({ index: 0, routes: [{ name: parent }] });
    })
    .catch((e) => {
      console.log(e);
      alert(
        `Something went wrong when attempting to delete your message. Error Message: ${e}`
      );
    });
}
