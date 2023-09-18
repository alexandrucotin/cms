import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section23 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 23 - Disposizioni generali">
      <Text style={styles.paragraph}>
        1. Per quanto non espressamente previsto si rinvia alle norme degli
        artt. 1571 e seguenti del codice civile.
      </Text>
    </ParagraphSection>
  );
};

export default Section23;
