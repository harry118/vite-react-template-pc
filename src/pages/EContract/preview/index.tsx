import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Divider,
  Typography,
  FloatButton,
  Pagination,
  Button,
  Space,
} from "antd";
import { exportPDF } from "@utils/index";
import { DownCircleFilled } from "@ant-design/icons";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "./index.less";
import ReactDOM from "react-dom/client";
import NiceModal from "@ebay/nice-modal-react";
import SignatureModal from "../components/signature-modal";
interface IUserProps {
  test?: string;
}
// A4 paper dimensions in mm
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const { Title, Text } = Typography;

const EContractPreview: React.FC<IUserProps> = () => {
  const contractContenRef = useRef(null);
  const hiddenContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // 签名canvas
  const [signCanvas, setSignCanvas] = useState<string>("");

  const handlePageChange = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };
  const renderPageContent = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return <Page1 key={pageNumber} />;
      case 2:
        return <Page2 key={pageNumber} />;
      case 3:
        return <Page3 key={pageNumber} />;
      // ... 其他页面的情况
      default:
        return <div key={pageNumber}>未知页面</div>;
    }
  };

  const handleDownload = async () => {
    // exportPDF("测试导出pdf", hiddenContainerRef?.current!);
    // await generatePDF();
    handleDownloadHtmlPdf();
  };
  // 导出pdf文件
  // const exportToPDF = () => {
  //   // 根据dpi放大，防止图片模糊
  //   const scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2;
  //   // 下载尺寸 a4 纸 比例
  //   let pdf = new jsPDF("p", "pt", "a4");
  //   // let width = contractContenRef?.current!.offsetWidth;
  //   // let height = contractContenRef?.current!.offsetHeight;
  //   // const doc = new jsPDF();
  //   for (let pageNumber = 1; pageNumber <= 25; pageNumber++) {
  //     // 切换到每一页并绘制到临时 canvas
  //     setCurrentPage(pageNumber);
  //     html2canvas(contractContenRef?.current!).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       const pdfWidth = pdf.internal.pageSize.getWidth();
  //       const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  //       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  //       if (pageNumber < 25) {
  //         pdf.addPage();
  //       }
  //     });
  //   }
  //   pdf.save("myDocument.pdf");
  // };

  const handleDownloadHtmlPdf = () => {
    // 获取隐藏容器的内容
    // const element = hiddenContainerRef.current;
    // 创建临时容器
    const tempContainer = document.createElement("div");
    // tempContainer.style.visibility = "hidden"; // 隐藏容器
    // tempContainer.style.position = "absolute"; // 将容器移出页面布局
    // tempContainer.style.transform = "translateY(100vh)"; // 将容器移出视口范围
    // tempContainer.style.opacity = "0"; // 设置透明度为0，不可见但仍然渲染
    // tempContainer.style.position = "fixed";
    tempContainer.style.top = "0";
    tempContainer.style.left = "100vw"; // 将容器移到页面右侧
    tempContainer.style.width = "100%"; // 宽度设为100%确保内容正常渲染
    // tempContainer.style.overflow = "hidden"; // 避免影响布局
    tempContainer.style.zIndex = "-9999"; // 确保容器在最底层
    document.body.appendChild(tempContainer);
    // 使用 ReactDOM.createRoot 渲染内容到临时容器
    const root = ReactDOM.createRoot(tempContainer);
    root.render(
      <div
        style={{
          backgroundColor: "#fff",
          width: `${A4_WIDTH_MM}mm`,
          // height: `${A4_HEIGHT_MM}mm`,
          minHeight: "100vh",
          height: `auto`,
          boxSizing: "border-box",
          padding: "10mm",
          margin: "auto",
          position: "relative",
        }}
      >
        <Page1 />
        <div className="html2pdf__page-break"></div>
        <Page2 />
        <div className="html2pdf__page-break"></div>
        <Page3 />

        {/* 添加更多页面内容 */}
      </div>
    );
    // 使用 requestAnimationFrame 确保渲染完成
    requestAnimationFrame(() => {
      html2pdf()
        .from(tempContainer)
        .set({
          margin: [4, 0, 4, 0],
          filename: "multiple-pages.pdf",
          image: { type: "jpeg", quality: 0.98 },
          pagebreak: {
            mode: ["legacy", "avoid-all", "css"],
          },
          html2canvas: { scale: 1, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .save()
        .finally(() => {
          // 清理临时容器
          document.body.removeChild(tempContainer);
        });
    });

  };
  const showSignModal = () => {
    NiceModal.show(SignatureModal);
  };
  return (
    <div className="preview-container">
      {/* Header */}
      <div className="preview-header">
        <Title level={4} style={{ color: "white", margin: 0 }}>
          LyloDrive e-Contract: LD_usertwo_test_LD-270824-43931_270824
        </Title>
      </div>

      {/* Main Content */}
      <div className="preview-main">
        <div className="preview-content" ref={contractContenRef}>
          {renderPageContent(currentPage)}
        </div>
      </div>

      {/* Footer */}
      <div className="preview-footer">
        <Space>Please sign on the page</Space>
        <Button type="primary" onClick={showSignModal}>
          Sign
        </Button>
      </div>

      <div className="floatBtn">
        <Button type="text" size="small" onClick={handleDownload}>
          Download
        </Button>
        <Pagination
          simple={{ readOnly: true }}
          defaultCurrent={1}
          total={25}
          onChange={handlePageChange}
          pageSize={1}
        />
      </div>
    </div>
  );
};
export default EContractPreview;
