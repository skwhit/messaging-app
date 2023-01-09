import { View, ActivityIndicator } from "react-native";
import React from "react";

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
