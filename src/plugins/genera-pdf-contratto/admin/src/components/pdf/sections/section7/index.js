import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section7 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 7 - Restituzione del veicolo ed estensione oraria">
      <Text style={styles.paragraph}>
        1. La restituzione del veicolo avverrà all'ora convenuta tra le parti e
        meglio indicata nell'art. 3 del presente contratto.
      </Text>

      <Text style={styles.paragraph}>
        2. Qualora l'utilizzatore desideri modificare i termini della
        restituzione egli dovrà' ottenere il preventivo consenso del locatore
        facendone formale richiesta entro 24 ore prima della data e ora della
        prevista restituzione del veicolo.
      </Text>

      <Text style={styles.paragraph}>
        3. Al termine della noleggio è prevista una tolleranza di 60 minuti
        oltre la quale si addebita un giorno extra al fine di poter compensare
        la mancata restituzione del veicolo come da contratto, la mancata
        disponibilità a noleggiare nuovamente il veicolo non riconsegnato.
      </Text>
    </ParagraphSection>
  );
};

export default Section7;
