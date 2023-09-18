import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section15 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 15 - Responsabilita'">
      <Text style={styles.paragraph}>
        1. L'utilizzatore assume piena ed esclusiva responsabilità civile,
        penale ed amministrativa per tutte le conseguenze derivanti dalla
        detenzione e dall'impiego del veicolo dal momento della consegna e sino
        alla sua restituzione, assumendo in tale periodo la veste di custode
        dello stesso.
      </Text>
      <Text style={styles.paragraph}>
        2. L'utilizzatore si impegna a comunicare al locatore immediatamente
        qualsiasi malfunzionamento, rottura o furto relativo del veicolo
        attraverso l'invio di una comunicazione scritta e/o della copia
        dell'eventuale denuncia di furto inoltrata alla compagnia assicurativa,
        come indicato nell'articolo successivo.
      </Text>
      <Text style={styles.paragraph}>
        3. Nel caso di sostituzione totale o parziale dei beni oggetto di
        noleggio conseguente a sinistri o malfunzionamenti, il locatore
        provvederà direttamente al loro riacquisto e/o ripristino e sostituzione
        fermo restando che rimarranno comunque a carico dell'utilizzatore tutte
        le spese.
      </Text>
      <Text style={styles.paragraph}>
        4. L'utilizzatore sarà responsabile di qualsiasi danno subito dal
        veicolo durante il noleggio, salve le ipotesi di caso fortuito e forza
        maggiore.
      </Text>
    </ParagraphSection>
  );
};

export default Section15;
