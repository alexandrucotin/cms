import React from "react";
import { Text, View } from "@react-pdf/renderer";

const ParagraphSection = ({ title, children }) => {
  return (
    <View>
      <Text
        style={{
          margin: "16px 0",
          fontWeight: 700,
          fontFamily: "Open Sans",
          textAlign: "center",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

export default ParagraphSection;
