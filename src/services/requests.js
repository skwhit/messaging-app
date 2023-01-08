import axios from "axios";
import { BASE_URL } from "./config";

export function getInboxMessages(token, setMessages) {
  axios
    .get(`${BASE_URL}/messages/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setMessages(res.data.reverse());
    })
    .catch((e) => {
      console.log(e);
    });
}

export function getSentMessages(token, setMessages) {
  axios
    .get(`${BASE_URL}/messages/sent/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setMessages(res.data.reverse());
    })
    .catch((e) => {
      console.log(e);
    });
}

export function createMessage(token, title, body, receiver  ) {
  axios
    .post(
      `${BASE_URL}/messages/`,
      {
        "title": title, "body": body, "receiver": receiver
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      alert("Recipient not found. Please input another.")
    });
}

export function getMessageDetail(token, id, setDetails) {
  axios
    .get(`${BASE_URL}/messages/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      setDetails(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

export function deleteMessage(token, id) {
  axios
    .delete(`${BASE_URL}/messages/${id}/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}