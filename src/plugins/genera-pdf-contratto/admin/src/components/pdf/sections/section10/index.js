import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section10 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 10 - Chilometraggio">
      <Text style={styles.paragraph}>
        1. L'utilizzatore potrà utilizzare il veicolo senza nessun limite di
        kilometraggio, essendo questi illimitati.
      </Text>
    </ParagraphSection>
  );
};

export default Section10;
