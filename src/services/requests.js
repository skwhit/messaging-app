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
          // "Content-Type": "application/json",
          // Accept: "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
      alert("User not found. Please input a new user")
    });
}

// export function createMessage(token) {
//   fetch(
//       `${BASE_URL}/messages/`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Token ${token}`,
//           "Content-Type": "application/json; charset=UTF-8",
//           Accept: "application/json",
//         },
//         body: {
//           title: "test", body: "hello", receiver: "tomk"
//         }
//     }
//     )
//     .then((res)=>res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

