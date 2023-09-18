import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section21 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 21 - Privacy">
      <Text style={styles.paragraph}>
        1. Il locatore dichiara che qualsiasi dato ottenuto dall'utilizzatore
        sarà utilizzato per le finalità di locazione di cui al presente
        contratto e che verranno trattati secondo i principi ed i precetti di
        cui al Regolamento UE 679/2016.
      </Text>
      <Text style={styles.paragraph}>
        2. Il locatore si impegna altresì al rigoroso rispetto dei principi e
        dei precetti della predetta legge con riferimento a qualunque altro dato
        personale, anche di terzi, raccolto, conservato, comunicato, diffuso o
        comunque trattato in adempimento o in conseguenza del presente
        contratto, garantendo in particolare la scrupolosa osservanza delle
        disposizioni concernenti la sicurezza, il consenso e le informazioni
        relative all'interessato.
      </Text>
    </ParagraphSection>
  );
};

export default Section21;
