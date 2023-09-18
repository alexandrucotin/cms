import React from "react";
import { Text, View } from "@react-pdf/renderer";

const LabelText = ({ label, text }) => {
  return (
    <View>
      <Text style={{ fontSize: 10, color: "gray" }}>{label}</Text>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 600,
          fontFamily: "Open Sans",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default LabelText;
