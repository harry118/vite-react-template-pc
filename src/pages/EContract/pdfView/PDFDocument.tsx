import React from "react";
import { Document, Page } from "@react-pdf/renderer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const PDFDocument = () => (
  <Document>
    <Page size="A4">
      <Page1 />
    </Page>
    <Page size="A4">
      <Page2 />
    </Page>
    <Page size="A4">
      <Page3 />
    </Page>
    {/* 你可以继续添加其他页面 */}
  </Document>
);

export default PDFDocument;
