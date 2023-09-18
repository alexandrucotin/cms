import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section3 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 3 - Stato del veicolo">
      <Text style={styles.paragraph}>
        1. Il presente contratto di noleggio sarà valido dal giorno{" "}
        <Text style={styles.paragraphBold}>_____</Text>, fino al giorno{" "}
        <Text style={styles.paragraphBold}>_____</Text>
      </Text>
    </ParagraphSection>
  );
};

export default Section3;
