import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section16 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 16 - Furto">
      <Text style={styles.paragraph}>
        1. Il veicolo è assicurato contro il furto.
      </Text>
      <Text style={styles.paragraph}>
        2. In caso di furto il Cliente dovrà un importo di euro{" "}
        <Text style={styles.paragraphBold}>_____</Text> al locatore.
      </Text>
      <Text style={styles.paragraph}>
        3. In ogni caso l'utilizzatore, dal momento della conoscenza del fatto,
        dovrà fare tempestiva denuncia alle autorità competenti ed entro 24 ore
        dalla denuncia si impegna a fornirne copia al locatore, unitamente a
        tutte le chiavi dell'autoveicolo ricevute.
      </Text>
    </ParagraphSection>
  );
};

export default Section16;
