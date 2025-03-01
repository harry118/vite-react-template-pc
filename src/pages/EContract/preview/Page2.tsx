import React from "react";

import {
  Divider,
  Typography,
  FloatButton,
  Descriptions,
  DescriptionsProps,
} from "antd";
import { exportPDF } from "@utils/index";
import { DownCircleFilled } from "@ant-design/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import NanumGothic from "@assets/NanumGothic-Regular.ttf";
import { useImage } from "../context";

const Page2: React.FC = () => {
  const { imageBase64, setImageBase64, text } = useImage();
  return (
    <div className="avoid-break">
      <p>page2</p>
      <img src={imageBase64 as any} />
    </div>
  );
};
export default Page2;
