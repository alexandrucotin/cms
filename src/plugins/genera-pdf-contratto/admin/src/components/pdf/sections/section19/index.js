import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section19 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 19 – Recesso e risoluzione del contratto">
      <Text style={styles.paragraph}>
        1. E' concessa all'utilizzatore la facoltà di recedere dal contratto in
        qualsiasi momento, per qualsiasi ragione e/o causa, mediante la
        restituzione del veicolo. L'utilizzatore è comunque obbligato al
        pagamento del prezzo pattuito per tutta la durata del contratto.
      </Text>
      <Text style={styles.paragraph}>
        2. L'inadempimento anche di una sola delle obbligazioni derivanti dal
        presente contratto comporterà la risoluzione di diritto del contratto e
        darà diritto al locatore di pretendere l'immediata restituzione del
        veicolo con spese a carico dell'utilizzatore.
      </Text>
      <Text style={styles.paragraph}>
        3. L'utilizzatore avrà diritto al rimborso da parte del locatore nel
        caso in cui il veicolo non sia in un buon stato manutentivo o che non
        possa essere utilizzato per l'uso per cui vengono presi in locazione,
        per cause a lui non imputabili.
      </Text>
    </ParagraphSection>
  );
};

export default Section19;
