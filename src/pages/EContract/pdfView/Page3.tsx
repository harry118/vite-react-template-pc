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
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import Monocraft from "@assets/Monocraft.ttf";
// const { Title, Paragraph, Text, Link } = Typography;
// import "./index.less";

// 创建样式对象
const styles = StyleSheet.create({
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    margin: 5,
    padding: 5,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    textAlign: "left",
  },
  header: {
    backgroundColor: "#f1f1f1",
    fontWeight: "bold",
  },
});

const Page3: React.FC = () => {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text>Column 1</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Column 2</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Column 3</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text>Data 1</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Data 2</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Data 3</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text>Data 4</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Data 5</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>Data 6</Text>
        </View>
      </View>
    </View>
  );
};
export default Page3;
