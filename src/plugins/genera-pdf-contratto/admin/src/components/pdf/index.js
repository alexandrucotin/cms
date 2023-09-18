import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import LabelText from "../atoms/label-value";

import OpenSansItalic from "../../../assets/fonts/OpenSans-Italic.ttf";
import OpenSansLight from "../../../assets/fonts/OpenSans-Light.ttf";
import OpenSansRegular from "../../../assets/fonts/OpenSans-Regular.ttf";
import OpenSansMedium from "../../../assets/fonts/OpenSans-Medium.ttf";
import OpenSansSemibold from "../../../assets/fonts/OpenSans-SemiBold.ttf";
import OpenSansBold from "../../../assets/fonts/OpenSans-Bold.ttf";

import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Section5 from "./sections/section5";
import Section6 from "./sections/section6";
import Section7 from "./sections/section7";
import Section8 from "./sections/section8";
import Section9 from "./sections/section9";
import Section10 from "./sections/section10";
import Section11 from "./sections/section11";
import Section12 from "./sections/section12";
import Section13 from "./sections/section13";
import Section14 from "./sections/section14";
import Section15 from "./sections/section15";
import Section16 from "./sections/section16";
import Section17 from "./sections/section17";
import Section18 from "./sections/section18";
import Section19 from "./sections/section19";
import Section20 from "./sections/section20";
import Section21 from "./sections/section21";
import Section22 from "./sections/section22";
import Section23 from "./sections/section23";
import PresaVisione from "./presa-visione";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: OpenSansItalic,
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      src: OpenSansLight,
      fontWeight: 300,
    },
    {
      src: OpenSansRegular,
      fontWeight: 400,
    },
    {
      src: OpenSansMedium,
      fontWeight: 500,
    },
    {
      src: OpenSansSemibold,
      fontWeight: 600,
    },
    {
      src: OpenSansBold,
      fontWeight: 700,
    },
  ],
});
// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  paragraphBold: {
    fontFamily: "Open Sans",
    fontWeight: 700,
    fontSize: 12,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },

  image: {
    height: 40,
    width: 84,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

// Create Document Component
const MyDocument = ({ contract }) => {
  console.log("CONTRACT DOC: ", contract);

  const buildImageLink = (link) => {
    const baseUrl = "http://localhost:1337";
    return `${baseUrl}${link}`;
  };

  return (
    <Document>
      <Page style={styles.body}>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <View
            style={{
              textAlign: "right",
              flex: "1 ",
            }}
          >
            <Image
              style={styles.image}
              src={buildImageLink(contract.logo_contratto.url)}
            />
          </View>
          <View
            style={{
              textAlign: "right",
              flex: "1 ",
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Open Sans",
                fontWeight: 700,
                marginBottom: 8,
              }}
            >
              Imperial Rent S.R.L.
            </Text>
            <Text style={{ fontSize: 12 }}>P.Iva 04798970234</Text>
            <Text style={{ fontSize: 12 }}>Via Viale dell' Industria, 24</Text>
            <Text style={{ fontSize: 12 }}>+39 351 615 1117</Text>
          </View>
        </View>
        <Text style={styles.title}>Contratto di noleggio</Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <View
            style={{
              border: "1px solid black",
              marginBottom: 12,
              padding: 8,
              flex: 1,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              Anagrafica cliente
            </Text>

            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              {/* COLONNA SINISTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText label="Nome" text={contract.cliente.nome} />
                <LabelText label="Nato a" text={contract.cliente.nato_a} />
                <LabelText
                  label="Residente in"
                  text={contract.cliente.indirizzo.comune}
                />
                <LabelText
                  label="Provincia"
                  text={contract.cliente.indirizzo.provincia}
                />
              </View>

              {/* COLONNA DESTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText label="Cognome" text={contract.cliente.cognome} />
                <LabelText
                  label="Nato il"
                  text={contract.cliente.data_nascita}
                />
                <LabelText
                  label="Via"
                  text={contract.cliente.indirizzo.strada}
                />
              </View>
            </View>
          </View>

          {/* DOCUMENTI CLIENTE */}
          <View
            style={{
              border: "1px solid black",
              marginBottom: 12,
              padding: 8,
              flex: 1,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              Documenti cliente
            </Text>
            {contract.cliente.documenti.map((doc, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 24,
                  borderBottom: "1px solid lightgrey",
                  paddingBottom: 6,
                  marginBottom: 6,
                }}
              >
                {/* COLONNA SINISTRA */}
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <LabelText
                    label="Tipologia documento"
                    text={doc.tipologia_documento}
                  />
                  <LabelText label="Data emissione" text={doc.data_emissione} />
                  <LabelText label="Rilasciato da" text={doc.rilasciato_da} />
                </View>

                {/* COLONNA DESTRA */}
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <LabelText label="Numero" text={doc.numero} />
                  <LabelText label="Data scadenza" text={doc.data_scadenza} />
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <View
            style={{
              border: "1px solid black",
              marginBottom: 12,
              padding: 8,
              flex: 1,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              Automobile
            </Text>

            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              {/* COLONNA SINISTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText
                  label="Brand"
                  text={contract.macchina.anagrafica.brand}
                />
                <LabelText
                  label="Combustibile"
                  text={contract.macchina.anagrafica.modello}
                />
              </View>

              {/* COLONNA DESTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText
                  label="Modello"
                  text={contract.macchina.anagrafica.modello}
                />
                <LabelText
                  label="Targa"
                  text={contract.macchina.anagrafica.targa}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              border: "1px solid black",
              marginBottom: 12,
              padding: 8,
              flex: 1,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              Dettaglio noleggio
            </Text>

            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              {/* COLONNA SINISTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText
                  label="Inizio data noleggio"
                  text={contract.macchina.anagrafica.brand}
                />
                <LabelText
                  label="Posto ritiro"
                  text={contract.macchina.anagrafica.modello}
                />
                <LabelText
                  label="Km al ritiro"
                  text={contract.macchina.anagrafica.modello}
                />
              </View>

              {/* COLONNA DESTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText
                  label="Fine data noleggio"
                  text={contract.macchina.anagrafica.modello}
                />
                <LabelText
                  label="Posto consegna"
                  text={contract.macchina.anagrafica.targa}
                />

                <LabelText
                  label="Km stimati alla consegna"
                  text={contract.macchina.anagrafica.modello}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <View
            style={{
              border: "1px solid black",
              marginBottom: 12,
              padding: 8,
              flex: 1,
            }}
          >
            <Text
              style={{
                marginBottom: 8,
                fontSize: 14,
                textDecoration: "underline",
              }}
            >
              Costi e Assicurazione
            </Text>

            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              {/* COLONNA SINISTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText
                  label="Prezzo giornaliero"
                  text={contract.macchina.anagrafica.brand}
                />
                <LabelText
                  label="Deposito cauzionale"
                  text={contract.macchina.anagrafica.modello}
                />
                <LabelText
                  label="Assicurazione"
                  text={contract.macchina.anagrafica.modello}
                />
              </View>

              {/* COLONNA DESTRA */}
              <View
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <LabelText
                  label="Prezzo totale"
                  text={contract.macchina.anagrafica.modello}
                />
                <LabelText
                  label="Franchigia"
                  text={contract.macchina.anagrafica.modello}
                />
                <LabelText
                  label="Costo assicurazione"
                  text={contract.macchina.anagrafica.targa}
                />
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.paragraph}>
          La societa' <Text style={styles.paragraphBold}>Imperial Rent</Text>,
          con sede presso{" "}
          <Text style={styles.paragraphBold}>Viale dell' Industria, 24</Text>,
          registrata presso il registro delle imprese di{" "}
          <Text style={styles.paragraphBold}>____</Text>, partita IVA, codice
          fiscale e numero registro imprese:{" "}
          <Text style={styles.paragraphBold}>_____</Text>, in persona del legale
          rappresentante Signor{" "}
          <Text style={styles.paragraphBold}>Andrea Imperatrice</Text> nato a{" "}
          <Text style={styles.paragraphBold}>_____</Text> il{" "}
          <Text style={styles.paragraphBold}>23/02/1990</Text>, codice fiscale{" "}
          <Text style={styles.paragraphBold}>_______</Text>. (in seguito
          denominato "<Text style={styles.paragraphBold}>Locatore</Text>
          ")
        </Text>

        <Text style={{ textAlign: "center", margin: "12px 0", fontSize: 12 }}>
          e
        </Text>

        <Text style={styles.paragraph}>
          Sig/Sig.ra{" "}
          <Text style={styles.paragraphBold}>
            {contract.cliente.nome} {contract.cliente.cognome}
          </Text>
          nato a
          <Text style={styles.paragraphBold}>{contract.cliente.nato_a}</Text>,
          il
          <Text style={styles.paragraphBold}>
            {contract.cliente.data_nascita}
          </Text>
          , codice fiscale
          <Text style={styles.paragraphBold}>
            {contract.cliente.data_nascita}
          </Text>
          , e residente presso
          <Text style={styles.paragraphBold}>
            {contract.cliente.indirizzo.strada},{" "}
            {contract.cliente.indirizzo.comune},{" "}
            {contract.cliente.indirizzo.provincia},{" "}
            {contract.cliente.indirizzo.cap}, {contract.cliente.indirizzo.paese}
          </Text>
          (in seguito denominato "
          <Text style={styles.paragraphBold}>Utilizzatore</Text>
          ")
        </Text>

        <Section1 contract={contract} styles={styles} />
        <Section2 styles={styles} />
        <Section3 contract={contract} styles={styles} />
        <Section4 contract={contract} styles={styles} />
        <Section5 contract={contract} styles={styles} />
        <Section6 contract={contract} styles={styles} />
        <Section7 contract={contract} styles={styles} />
        <Section8 contract={contract} styles={styles} />
        <Section9 contract={contract} styles={styles} />
        <Section10 contract={contract} styles={styles} />
        <Section11 contract={contract} styles={styles} />
        <Section12 contract={contract} styles={styles} />
        <Section13 contract={contract} styles={styles} />
        <Section14 contract={contract} styles={styles} />
        <Section15 contract={contract} styles={styles} />
        <Section16 contract={contract} styles={styles} />
        <Section17 contract={contract} styles={styles} />
        <Section18 contract={contract} styles={styles} />
        <Section19 contract={contract} styles={styles} />
        <Section20 contract={contract} styles={styles} />
        <Section21 contract={contract} styles={styles} />
        <Section22 contract={contract} styles={styles} />
        <Section23 contract={contract} styles={styles} />
        <PresaVisione contract={contract} styles={styles} />

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default MyDocument;
