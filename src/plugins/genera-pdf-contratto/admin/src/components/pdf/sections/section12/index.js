import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section12 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 12 - Uso del veicolo">
      <Text style={styles.paragraph}>
        1. L'utilizzatore dichiara che il veicolo consegnato è idoneo all'uso
        convenuto. Il veicolo non potra' essere condotto:
      </Text>
      <Text style={styles.paragraph}>
        a) sotto l'influsso di alcool, droghe o altra legittima o illegittima
        sostanza che menomi la capacita' o capacita' di reagire del conducente,
      </Text>
      <Text style={styles.paragraph}>
        b) da persona sprovvista di patente o con validita' scaduta o comunque
        diversa da quella indicata nell'articolo 1 del presente contratto.
      </Text>
      <Text style={styles.paragraph}>
        c) fuori strada o su strade inadatte;
      </Text>
      <Text style={styles.paragraph}>
        d) per Il trasporto illegale di merci (contrabbando, stupefacenti ecc);
      </Text>
      <Text style={styles.paragraph}>
        e) per fini commerciali dietro corrispettivo;
      </Text>
      <Text style={styles.paragraph}>
        f) per partecipare a gare sportive corse o altre manifestazioni;
      </Text>
      <Text style={styles.paragraph}>
        g) recarsi all'estero salva preventiva autorizzazione scritta del
        locatore.
      </Text>
    </ParagraphSection>
  );
};

export default Section12;
