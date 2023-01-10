import React from "react";
import { View, ActivityIndicator } from "react-native";

//loading activity indicator that will display when app is getting, posting, or deleting data.
const Loading = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        padding: 10,
      }}
    >
      <ActivityIndicator
        size={"large"}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default Loading;
