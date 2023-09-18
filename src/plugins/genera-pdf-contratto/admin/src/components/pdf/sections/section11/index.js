import React from "react";
import { Text } from "@react-pdf/renderer";
import ParagraphSection from "../../../atoms/paragraph-section";

const Section11 = ({ contract, styles }) => {
  return (
    <ParagraphSection title="Art. 11 - Assicurazione">
      <Text style={styles.paragraph}>
        1. L'assicurazione del veicolo comprende la responsabilità civile verso
        terzi (RCA), così come l'assicurazione obbligatoria per collisione e
        furto come previsto dalle leggi italiane.
      </Text>
      <Text style={styles.paragraph}>
        2. Tale assicurazione avrà una franchigia di euro{" "}
        <Text style={styles.paragraphBold}>_____</Text>
        Nel caso in cui l'utilizzatore contrattasse un'assicurazione completa,
        questa non verrà considerata.
      </Text>
    </ParagraphSection>
  );
};

export default Section11;
