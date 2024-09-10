import React from "react";

import {
  Divider,
  Typography,
  FloatButton,
  DescriptionsProps,
  Descriptions,
} from "antd";
import { exportPDF } from "@utils/index";
import { DownCircleFilled } from "@ant-design/icons";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
// import { View, Text, StyleSheet } from "@react-pdf/renderer";
import logo from "@assets/avatar.png";
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
// const { imageBase64, setImageBase64 } = useImage();
// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontFamily: 'Monocraft',
//   },
//   text: {
//     marginBottom: 12,
//     fontSize: 12,
//   },
// });
const Page1: React.FC = () => {
  const { imageBase64, setImageBase64, text } = useImage();
  return (
    <div>
      page1page1page1page1page1 page1page1page1page1page1
      page1page1page1page1page1 page1page1page1page1page1
      page1page1page1page1page1 page1page1page1page1page1
      {text}
      <img src={imageBase64 as any} />
    </div>
  );
  // return (
  //   <div className="page">
  //     <div>
  //       <div style={{ textAlign: "center" }}>
  //         <img
  //           src={logo}
  //           alt="logo"
  //           // style={{ height: "50px", objectFit: "contain" }}
  //         />
  //       </div>

  //       <Title level={4} style={{ textAlign: "center", fontWeight: "bold" }}>
  //         SHORT TERM VEHICLE RENTAL AGREEMENT (LD-270824-43931)
  //       </Title>

  //       <Text>
  //         This Short-Term Vehicle Rental Agreement is entered into between
  //         <b> SPARK DIGITAL PTE LTD </b> ("Company") and <b>usertwo test</b>
  //         QW784 (“Hirer”) on <b>09 Sep 2024 10:00 - 11:00</b> (“Start Date”) to{" "}
  //         <b>12 Sep 2024 10:00 - 11:00</b> (“End Date”) and outlines the
  //         respective rights and obligations of the Parties relating to the usage
  //         of the Authorised Vehicle.
  //       </Text>
  //       <Text>Parties hereby agree as follows:</Text>

  //       <Title level={5}>1. HIRER INFORMATION</Title>
  //       <div>
  //         <Text>
  //           Hirer Full Name: <b>usertwo test</b>
  //         </Text>
  //         <br />
  //         <Text>
  //           Hirer NRIC/FIN/Passport: <b>QW784</b>
  //         </Text>
  //         <br />
  //         <Text>
  //           Hirer Residential Address: <b>bxnfjf, 546782</b>
  //         </Text>
  //         <br />
  //         <Text>
  //           Hirer Contact No.: <b>+6588093286</b>
  //         </Text>
  //       </div>

  //       <Title level={5}>2. COMPANY INFORMATION</Title>
  //       <div>
  //         <Text>
  //           Company Name: <b>Spark Digital Pte Ltd</b>
  //         </Text>
  //         <br />
  //         <Text>
  //           Company UEN: <b>202139478H</b>
  //         </Text>
  //         <br />
  //         <Text>
  //           Company Address: <b>300 Sin Ming Road, Singapore 575626</b>
  //         </Text>
  //       </div>

  //       <Title level={5}>3. VEHICLE INFORMATION</Title>
  //       <div>
  //         <Text>
  //           Vehicle Number: <b>SNP9063J</b> (hereinafter referred to as
  //           “Authorised Vehicle”).
  //         </Text>
  //         <br />
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //       </div>
  //       <div>
  //         <Text>
  //           Vehicle Number: <b>SNP9063J</b> (hereinafter referred to as
  //           “Authorised Vehicle”).
  //         </Text>
  //         <br />
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //       </div>
  //       <div>
  //         <Text>
  //           Vehicle Number: <b>SNP9063J</b> (hereinafter referred to as
  //           “Authorised Vehicle”).
  //         </Text>
  //         <br />
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis</b>
  //         </Text>
  //         <Text>
  //           Vehicle Make & Model: <b>Toyota Corolla Altis111</b>
  //         </Text>
  //         <div>
  //           <Text>
  //             Company Name: <b>Spark Digital Pte Ltd</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company UEN: <b>202139478H</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company Address: <b>300 Sin Ming Road, Singapore 575626</b>
  //           </Text>
  //         </div>
  //         <div>
  //           <Text>
  //             Company Name: <b>Spark Digital Pte Ltd</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company UEN: <b>202139478H</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company Address: <b>300 Sin Ming Road, Singapore 575626</b>
  //           </Text>
  //         </div>
  //         <div>
  //           <Text>
  //             Company Name: <b>Spark Digital Pte Ltd</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company UEN: <b>202139478H</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company Address: <b>300 Sin Ming Road, Singapore 575626</b>
  //           </Text>
  //         </div>
  //         <div>
  //           <Text>
  //             Company Name: <b>Spark Digital Pte Ltd</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company UEN: <b>202139478H</b>
  //           </Text>
  //           <br />
  //           <Text>
  //             Company Address: <b>300 Sin Ming Road, Singapore 999999</b>
  //           </Text>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default Page1;
