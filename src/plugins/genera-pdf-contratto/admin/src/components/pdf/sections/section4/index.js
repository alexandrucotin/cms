import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section4 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 4 - Consegna del veicolo">
      <Text style={styles.paragraph}>
        1. Il veicolo verrà consegnato dal locatore all'utilizzatore presso la
        sede del locatore indicata in calce al presente contratto, e verranno
        messe a disposizione dell'utilizzatore nello stesso luogo.
      </Text>
      <Text style={styles.paragraph}>
        2. L'utilizzatore dichiara che il veicolo visionato prima della consegna
        non presenta graffi o lesioni alla carrozzeria e alle parti interne del
        veicolo oltre a quelli eventualmente segnalati con una specifica nota
        scritta nel corpo dello stesso contratto dal noleggiante.
      </Text>
      <Text style={styles.paragraph}>
        3. L'utilizzatore in caso di ritardo rispetto all'ora indicata nella
        prenotazione dovrà contattare il noleggiatore confermando il proprio
        arrivo in ritardo e sarà atteso per un massimo di{" "}
        <Text style={styles.paragraphBold}>_____</Text> di ritardo, dopo tale
        attesa potrebbe non trovare l'auto o attendere diversi minuti per il
        ritiro dell'auto.
      </Text>
    </ParagraphSection>
  );
};

export default Section4;
