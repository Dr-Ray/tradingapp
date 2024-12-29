import { View, Text } from "react-native";
import React from "react";

const DividerLine = () => {
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <View
        style={[
          {
            backgroundColor: "#1B1B1B",
            height: 2,
            width: "93%"
          }
        ]}
      />
    </View>
  );
};

export default DividerLine;
