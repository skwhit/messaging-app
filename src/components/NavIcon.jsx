import React from "react";
import { Image } from "react-native";

import { inboxIcon, sentIcon, composeIcon, accountIcon } from "../../assets";

const NavIcon = ({ type }) => {
  let icon;
  switch (type) {
    case "Inbox":
      icon = inboxIcon;
      break;
    case "Sent":
      icon = sentIcon;
      break;
    case "Compose":
      icon = composeIcon;
      break;
    case "Account":
      icon = accountIcon;
      break;
  }

  return (
    <Image
      style={{ width: 40, height: 40, resizeMode: "stretch" }}
      source={icon}
    ></Image>
  );
};

export default NavIcon;
