import React from "react";
import { Document } from "@react-pdf/renderer";
import MyPages from "./MyPages"; // 引入你创建的每个页面

const MyDocument = () => (
  <Document>
    {MyPages.map((PageComponent, index) => (
      <PageComponent key={index} />
    ))}
  </Document>
);

export default MyDocument;
