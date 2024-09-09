// MyDocument.tsx
import React from "react";
import { Document, Font, Page, StyleSheet } from "@react-pdf/renderer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Monocraft from "@assets/Monocraft.ttf";
import NanumGothic from "@assets/NanumGothic-Regular.ttf";
// ... 其他页面的 import

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#fff",
  },
});
Font.register({
  family: "Monocraft",
  src: Monocraft,
});
Font.register({
  family: "NanumGothic",
  src: NanumGothic,
});

const MyDocument = () => (
  <Document>
    {/* 根据实际需要，添加更多的 <Page> 组件 */}
    <Page size="A4" style={styles.page}>
      <Page1 />
    </Page>
    <Page size="A4" style={styles.page}>
      <Page2 />
    </Page>
    {/* 添加更多页面组件 */}
  </Document>
);

export default MyDocument;
