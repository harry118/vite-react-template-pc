import React from "react";

import {
  Divider,
  Typography,
  FloatButton,
  DescriptionsProps,
  Descriptions,
  Table,
  Tag,
  Space,
  TableProps,
} from "antd";
import { exportPDF } from "@utils/index";
import { DownCircleFilled } from "@ant-design/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Monocraft from "@assets/Monocraft.ttf";
const { Title, Paragraph, Text, Link } = Typography;
import "./index.less";
import { useImage } from "../context";

const items: DescriptionsProps["items"] = [
  {
    key: "1",
    label: "UserName",
    children: "Zhou Maomao",
  },
  {
    key: "2",
    label: "Telephone",
    children: "1810000000",
  },
  {
    key: "3",
    label: "Live",
    children: "Hangzhou, Zhejiang",
  },
  {
    key: "4",
    label: "Remark",
    children: "empty",
  },
  {
    key: "5",
    label: "Address",
    children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
  },
];

const Page3: React.FC = () => {
  const { imageBase64, setImageBase64, text } = useImage();
  return (
    <div className="avoid-break">
      <p>page3</p>
      <img src={imageBase64 as any} />
    </div>
  );
};
export default Page3;
