import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section5 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 5 - Corrispettivo">
      <Text style={styles.paragraph}>
        1. Il veicolo s'intende noleggiato secondo le sotto indicate tariffe in
        vigore alla data di sottoscrizione del contratto. L'utilizzatore si
        impegna a versare al locatore, per tutto il periodo di locazione del
        veicolo l'importo di euro
        <Text style={styles.paragraphBold}>_____</Text>
      </Text>
      <Text style={styles.paragraph}>
        2. Per i beni accessori indicati al punto 1.4 del presente contratto il
        pagamento sarà di euro
        <Text style={styles.paragraphBold}>_____</Text>
      </Text>
      <Text style={styles.paragraph}>
        3. Il pagamento delle somme sopra dovute sarà dovuto mediante bonifico
        bancario, sul numero IBAN
        <Text style={styles.paragraphBold}>_____</Text> intestato a{" "}
        <Text style={styles.paragraphBold}>_____</Text>
      </Text>
    </ParagraphSection>
  );
};

export default Section5;
