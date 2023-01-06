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
      console.log(res);
      setMessages(res.data);
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
      console.log(res);
      setMessages(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

export function createMessage(token) {
  axios
    .post(
      `${BASE_URL}/messages/`,
      {
        title: "a.",
        body: "hello.",
        receiver: "spiderman.",
      },
      {
        headers: {
          Authorization: `Token ${token}`,
        }
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}
