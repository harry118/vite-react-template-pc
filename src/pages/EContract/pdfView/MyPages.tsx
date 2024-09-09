import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const MyPages = Array.from({ length: 25 }, (_, i) => () => (
  <Page size="A4" key={i}>
    <View>
      <Text>Page {i + 1}</Text>
    </View>
  </Page>
));

export default MyPages;
