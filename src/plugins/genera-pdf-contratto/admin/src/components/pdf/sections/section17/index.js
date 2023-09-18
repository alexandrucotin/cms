import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section17 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 17 - Danni a cose o animali">
      <Text style={styles.paragraph}>
        1. Il locatore non sarà ritenuto responsabile per perdita o danni alle
        cose trasportate, abbandonate o dimenticate sul veicolo, sia durante che
        dopo il noleggio.
      </Text>
    </ParagraphSection>
  );
};

export default Section17;
