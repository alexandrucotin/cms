import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section13 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 13 - Circolazione su strada">
      <Text style={styles.paragraph}>
        1. La circolazione dell'autoveicolo noleggiato è autorizzata in Italia
        ai fini della sicurezza del guidatore e della corretta manutenzione del
        veicolo in caso di superamento dei massimi parametri di percorrenza
        previsti riguardo l'eccedenza chilometrica, ci si riserva di agire anche
        per il danno maggiore.
      </Text>
      <Text style={styles.paragraph}>
        2. Il Cliente è responsabile personalmente delle infrazioni commesse
        alle normative del Codice della Strada ed al mancato pagamento di
        pedaggi autostradali e sarà tenuto al rimborso, per l'intero ammontare,
        delle relative sanzioni e spese più addebito di euro{" "}
        <Text style={styles.paragraphBold}>_____</Text> per la gestione
        amministrative delle pratiche.
      </Text>
    </ParagraphSection>
  );
};

export default Section13;
