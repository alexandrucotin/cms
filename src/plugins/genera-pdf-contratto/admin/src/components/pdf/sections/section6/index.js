import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section6 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 6 - Deposito cauzionale">
      <Text style={styles.paragraph}>
        1. L'utilizzatore lascerà un deposito cauzionale di euro
        <Text style={styles.paragraphBold}>_____</Text>
        che verrà restituita dal locatore nel caso in cui non vi siano danni
        evidenti al veicolo.
      </Text>

      <Text style={styles.paragraph}>
        2. Tale importo, nell'ipotesi di mancato pagamento del corrispettivo, di
        danni riscontrati al ritiro del veicolo di mancata riconsegna nel
        termine pattuito o di qualsiasi altra inosservanza dell'utilizzatore
        degli obblighi contrattualmente previsti, potrà essere incassato o
        escusso dal locatore e l'importo relativo potrà essere trattenuto in
        tutto od in parte a titolo di corrispettivo della locazione, ivi
        compreso l'addebito di eventuali interessi moratori e/o penalità
        correlate, ovvero di risarcimento danni, salvo conguaglio da effettuarsi
        all'atto della determinazione giudiziale o convenzionale.
      </Text>

      <Text style={styles.paragraph}>
        3. Tale deposito cauzionale, verificato il corretto adempimento a tutti
        gli obblighi contrattualmente previsti, incluso il totale pagamento del
        corrispettivo pattuito, sarà restituito ad avvenuto pagamento di tutto
        quanto dovuto per la locazione; l'utilizzatore autorizza espressamente
        sin da ora il locatore a trattenere dal deposito cauzionale, anche
        mediante addebito diretto su carta di credito in caso di rilascio della
        relativa autorizzazione, il corrispettivo addebitato all'utilizzatore
        contrattualmente pattuito ma risultante insoluto alla data di scadenza
        dello stesso, senza eccezioni di sorta.
      </Text>
      <Text style={styles.paragraph}>
        4. Nel caso in cui il deposito cauzionale non sia sufficientemente
        capiente per coprire l'intero debito insoluto dell'utilizzatore,
        l'utilizzatore resta solidamente ed espressamente debitore nei confronti
        del locatore per la parte eccedente rimasta insoluta, comprensiva di
        eventuali oneri accessori derivanti dall'insoluto. In nessun caso
        l'utilizzatore potrà procedere ad alcuna compensazione tra detto
        deposito cauzionale e quanto dovuto al locatore a titolo di
        corrispettivo e/o di altre somme allo stesso dovute, fatta salva
        l'espressa deroga del locatore.
      </Text>
    </ParagraphSection>
  );
};

export default Section6;
