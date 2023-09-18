import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section14 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 14 - Esclusioni dal contratto di noleggio">
      <Text style={styles.paragraph}>
        1. Le parti pattuiscono che sono escluse dal noleggio: la fornitura di
        tutto il materiale accessorio diverso da quanto descritto nel punto 1.4,
        le riparazioni che dovessero risultare necessarie da un uso non corretto
        del veicolo e qualsiasi altro bene e/o oggetto non espressamente
        indicato nel presente contratto.
      </Text>
    </ParagraphSection>
  );
};

export default Section14;
