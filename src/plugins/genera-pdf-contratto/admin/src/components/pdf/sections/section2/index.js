import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section2 = ({ styles }) => {
  return (
    <ParagraphSection title="Art. 2 - Stato del veicolo">
      <Text style={styles.paragraph}>
        1. Il veicolo deve essere consegnato all'utilizzatore in perfetto
        ordine. Il mezzo deve essere dotato di ruota di ricambio, normali
        attrezzi, triangolo, libretto di circolazione, contachilometri
        sigillato.
      </Text>

      <Text style={styles.paragraph}>
        2. L'utilizzatore e' responsabile della perdita o dello smarrimento dei
        documenti di circolazione. L'utilizzatore si obbliga a riconsegnare il
        veicolo nelle stesse condizioni in cui lo ha ricevuto, con l'intero
        equipaggiamento, salvaguardando l'efficienza del veicolo stesso, escluso
        il normale deperimento per il normale uso del mezzo.
      </Text>

      <Text style={styles.paragraph}>
        3. Il locatore si riserva di verificare lo stato dell'autoveicolo
        noleggiato al termine del contratto di noleggio, nel termine di giorni 5
        lavorativi dalla data della effettiva riconsegna. Entro tale termine il
        locatore qualora dovesse riscontrare danni o malfunzionamenti
        ascrivibili alla condotta colposa o dolosa dell'utilizzatore provvederà
        comunicarlo allo stesso per iscritto e ad addebitargli tutte le spese di
        competenza secondo i corenti tariffari.
      </Text>

      <Text style={styles.paragraph}>
        4. Nel caso in cui l'utilizzatore dovesse riscontrare danni e/o anomalie
        sull'autoveicolo noleggiato e non li denunziasse facendoli descrivere
        nello spazio dedicato al momento della consegna, l'autoveicolo stesso si
        intenderà accettato senza eccezioni e riserve.
      </Text>
    </ParagraphSection>
  );
};

export default Section2;
