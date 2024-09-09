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

const Page2: React.FC = () => {
  return (
    <div className="avoid-break">
      <p>page2</p>
    </div>
  );
};
export default Page2;
