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
import { ImageProvider } from "../context";

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
import { useImage } from "../context";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";
interface IUserProps {
  test?: string;
}
// A4 paper dimensions in mm
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const { Title, Text } = Typography;

const EContractPreview: React.FC<IUserProps> = () => {
  const contractContentRef = useRef(null);
  const hiddenContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const { imageBase64, setImageBase64 } = useImage();
  // 签名canvas
  const [signCanvas, setSignCanvas] = useState<string>("");

  const handlePageChange = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };
  // 跳转到指定页面的锚点
  const scrollToPage = (pageId: string) => {
    const pageElement = document.getElementById(pageId);
    if (pageElement) {
      pageElement.scrollIntoView({
        behavior: "smooth", // 滚动时的动画效果
        block: "start", // 对齐到页面顶部
      });
    }
  };
  // const renderPageContent = (pageNumber: number) => {
  //   switch (pageNumber) {
  //     case 1:
  //       return <Page1 key={pageNumber}  />;
  //     case 2:
  //       return <Page2 key={pageNumber} />;
  //     case 3:
  //       return <Page3 key={pageNumber} />;
  //     // ... 其他页面的情况
  //     default:
  //       return <div key={pageNumber}>未知页面</div>;
  //   }
  // };
  const renderPageContent = (pageNumber: number) => {
    // return (
    //   <>
    //     {Array.from({ length: 25 }, (_, index) => index + 1).map((page) => (
    //       <>
    //         <div key={page} className="page-container" id={`page${page}`}>
    //           <div>{`page${page}`}</div>
    //         </div>
    //         {/* <div className="html2pdf__page-break"></div> */}
    //       </>
    //     ))}
    //   </>
    // );

    return (
      <>
        <div id="page1" className="page-container">
          <Page1 />
        </div>
        <div id="page2" className="page-container">
          <Page2 />
        </div>
        <div id="page3" className="page-container">
          <Page3 />
        </div>
        <div id="page4" className="page-container">
          <Page4 />
        </div>
        <div id="page5" className="page-container">
          <Page5 />
        </div>
        <div id="page6" className="page-container">
          <Page6 />
        </div>
        <div id="page7" className="page-container">
          <Page7 />
        </div>
      </>
    );
  };

  const handleDownload = async () => {
    // exportPDF("测试导出pdf", hiddenContainerRef?.current!);
    // await generatePDF();
    // handleDownloadHtmlPdf();
    // handleDownloadPdfDom();
    generatePDF();
  };
  // 导出pdf文件
  // const exportToPDF = () => {
  //   // 根据dpi放大，防止图片模糊
  //   const scale = window.devicePixelRatio > 1 ? window.devicePixelRatio : 2;
  //   // 下载尺寸 a4 纸 比例
  //   let pdf = new jsPDF("p", "pt", "a4");
  //   // let width = contractContentRef?.current!.offsetWidth;
  //   // let height = contractContentRef?.current!.offsetHeight;
  //   // const doc = new jsPDF();
  //   for (let pageNumber = 1; pageNumber <= 25; pageNumber++) {
  //     // 切换到每一页并绘制到临时 canvas
  //     setCurrentPage(pageNumber);
  //     html2canvas(contractContentRef?.current!).then((canvas) => {
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

  const waitForImagesToLoad = (container: any) => {
    const images = container.getElementsByTagName("img");
    const promises = [];

    for (let img of images) {
      if (!img.complete) {
        promises.push(
          new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          })
        );
      }
    }
    return Promise.all(promises);
  };
  const generatePDF = async () => {
    // 创建一个新的jsPDF实例
    const opt = {
      margin: [0, 0, 0, 0], // 控制PDF页面的margin
      filename: "multiple-pages.pdf", // PDF文件名
      image: { type: "jpeg", quality: 0.98 }, // 图片格式和质量
      html2canvas: { scale: 1, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }, // PDF配置
      pagebreak: { mode: ["avoid-all", "css"] }, // 防止内容分页时分隔
    };
    const pages = document.getElementsByClassName("page-container");
    let doc = html2pdf().from(pages[0]).set(opt).toPdf();
    for (let j = 1; j < 7; j++) {
      doc = doc
        .get("pdf")
        .then((pdf: any) => {
          pdf.addPage();
        })
        .from(pages[j])
        .toContainer()
        .toCanvas()
        .toPdf();
    }
    doc.save();
  };
  const handleDownloadPdfDom = () => {
    // html2pdf()
    //   .from(contractContentRef.current)
    //   .set({
    //     margin: [0, 0, 0, 0],
    //     filename: "multiple-pages.pdf",
    //     image: { type: "jpeg", quality: 0.98 },
    //     pagebreak: {
    //       mode: ["legacy", "avoid-all", "css"],
    //       // after: '.page-container',  // 在每个页面前创建断点
    //     },
    //     html2canvas: { scale: 1, useCORS: true },
    //     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    //   })
    //   .save();
  };

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
      <ImageProvider>
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
      </ImageProvider>
    );
    // 使用 requestAnimationFrame 确保渲染完成
    requestAnimationFrame(() => {
      waitForImagesToLoad(tempContainer)
        .then(() => {
          return html2pdf()
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
            .save();
        })
        .catch((error) => {
          console.error("Error loading images:", error);
        })
        .finally(() => {
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
        <div className="preview-content" ref={contractContentRef}>
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
          onChange={(page) => scrollToPage(`page${page}`)}
          // onChange={handlePageChange}
          pageSize={1}
        />
      </div>
    </div>
  );
};
export default EContractPreview;
