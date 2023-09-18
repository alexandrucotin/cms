import React from "react";
import { Text, View } from "@react-pdf/renderer";
const PresaVisione = ({ contract, styles }) => {
  return (
    <View style={{ margin: "24px 0" }}>
      <Text style={styles.paragraph}>
        Verona il {new Date().toLocaleDateString()}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 12,
          marginBottom: 48,
        }}
      >
        <Text style={styles.paragraphBold}>Il locatore</Text>
        <Text style={styles.paragraphBold}>Utilizzatore</Text>
      </View>
      <Text style={styles.paragraph}>
        Ai sensi dell'art. 1341 e 1342 del codice civile l'utilizzatore
        espressamente dichiara di aver letto, compreso ed accettare le clausole
        "Oggetto del contratto", "Stato del veicolo", "Durata del contratto",
        "Consegna del veicolo", "Restituzione del veicolo ed estensione oraria",
        Obblighi del locatore", "Obblighi dell'utilizzatore", "Uso del veicolo",
        "Circolazione su strada", "Esclusione dal contratto di noleggio",
        "Corrispettivo", "Deposito cauzionale", "Responsabilità", "Furto",
        "Danni a cose o animali", "Ammende e contravvenzioni", "Recesso e
        risoluzione del contratto", "Sublocazione", "Foro competente"
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 12,
          marginBottom: 48,
        }}
      >
        <Text style={styles.paragraphBold}>Il locatore</Text>
        <Text style={styles.paragraphBold}>Utilizzatore</Text>
      </View>
    </View>
  );
};

export default PresaVisione;
