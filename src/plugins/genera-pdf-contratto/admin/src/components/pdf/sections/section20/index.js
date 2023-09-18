import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section20 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 20 - Sublocazione">
      <Text style={styles.paragraph}>
        1. E' fatto espressamente divieto di sublocare il veicolo oggetto del
        presente contratto.
      </Text>
    </ParagraphSection>
  );
};

export default Section20;
