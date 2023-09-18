import React from "react";
import { Text, View } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section1 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 1 - Oggetto del contratto">
      <Text style={styles.paragraph}>
        1. Il locatore, noleggia all'utilizzatore, che accetta, il veicolo cosi
        indicato:
      </Text>

      <View style={{ marginBottom: 8 }}>
        <Text style={{ fontSize: 14, marginBottom: 4 }}>
          <Text style={styles.paragraphBold}>Modello: </Text>{" "}
          {contract.macchina.anagrafica.brand}{" "}
          {contract.macchina.anagrafica.modello}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 4 }}>
          <Text style={styles.paragraphBold}>Targa: </Text>{" "}
          {contract.macchina.anagrafica.targa}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 4 }}>
          <Text style={styles.paragraphBold}>Combustibile: </Text>{" "}
          {contract.macchina.anagrafica.targa}
        </Text>
        <Text style={{ fontSize: 14, marginBottom: 4 }}>
          <Text style={styles.paragraphBold}>Numero KM: </Text>{" "}
          {contract.macchina.anagrafica.targa}
        </Text>
      </View>

      <Text style={styles.paragraph}>
        2. Il veicolo sopraindicato potra' essere messo su strada e guidato
        solamente dal Sig/Sig.ra{" "}
        <Text style={styles.paragraphBold}>
          {contract.cliente.nome} {contract.cliente.cognome}
        </Text>
        nato a
        <Text style={styles.paragraphBold}>{contract.cliente.nato_a}</Text>, il
        <Text style={styles.paragraphBold}>
          {contract.cliente.data_nascita}
        </Text>
        , codice fiscale
        <Text style={styles.paragraphBold}>
          {contract.cliente.data_nascita}
        </Text>
      </Text>

      <Text style={styles.paragraph}>
        3. Nel caso in cui il veicolo venisse guidato da una persona diversa dal
        conducente indicato al punto precedente si dovra' obbligatoriamente
        informare il locatore.
      </Text>
      <Text style={styles.paragraph}>
        4. Verranno inoltre dati in noleggio all'utilizzatore i seguenti beni
        accessori: ______
      </Text>
    </ParagraphSection>
  );
};

export default Section1;
