import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section22 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 22 - Foro competente">
      <Text style={styles.paragraph}>
        1. Per qualsiasi controversia derivante dal presente contratto le parti
        convengono che sarà competente il Foro delle città dell'Utilizzatore che
        sia qualificabile come consumatori ai sensi dell'art. 3, co. 1, lett.
        a), del Decreto Legislativo 6 settembre 2005, n. 206 (c.d. Codice del
        Consumo); nel qual caso, sarà competente il foro della località di
        residenza o di domicilio elettivo dello stesso. Il contratto di noleggio
        è regolato dal diritto e dalla legge italiana, pertanto, per qualsiasi
        controversia ad esso relativa, vengono applicati esclusivamente il
        diritto e la legge italiana davanti a qualsiasi Foro ed Autorità.
      </Text>
    </ParagraphSection>
  );
};

export default Section22;
