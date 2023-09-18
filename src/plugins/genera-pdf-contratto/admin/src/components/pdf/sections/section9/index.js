import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section9 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 9 - DA VEDERE ANCORA">
      <Text style={styles.paragraph}>
        1. Il locatore si obbliga a consegnare il veicolo in perfetta efficenza
        per l'utilizzo preposto e in perfetto stato manutentivo.
      </Text>

      <Text style={styles.paragraph}>
        2. Il locatore si obbliga altresì a garantire il pacifico godimento del
        bene da parte dell'utilizzatore per la durata contrattuale.
      </Text>
    </ParagraphSection>
  );
};

export default Section9;
