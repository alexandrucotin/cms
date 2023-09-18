import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section18 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 18 - Ammende e contravvenzioni">
      <Text style={styles.paragraph}>
        1. Sono a carico del locatore le ammende e le contravvenzioni per
        infrazioni al codice della strada del veicolo commesse durante il
        periodo del noleggio. L'utilizzatore si impegna a rimborsare alla
        Locatrice quanto da essa anticipato per il pagamento delle infrazioni di
        cui sopra, con esclusione di quanto dipendente dall'eventuale ritardato
        pagamento.
      </Text>
      <Text style={styles.paragraph}>
        2. In caso di fermo forzato del veicolo, dipendente da fatti imputabili
        all'utilizzatore o al conducente autorizzato, al locatore è riconosciuta
        una somma corrispondente alla tariffa minima giornaliera di noleggio,
        comunque non eccedente complessivamente il valore commerciale del mezzo.
      </Text>
    </ParagraphSection>
  );
};

export default Section18;
