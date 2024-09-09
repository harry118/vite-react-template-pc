import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button, Pagination, Space, Typography } from "antd";
import PDFDocument from "./PDFDocument";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import SignatureModal from "../components/signature-modal";

import "./../preview/index.less";
import NiceModal from "@ebay/nice-modal-react";

const { Title } = Typography;

const EContractPreview = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  // 根据当前页码渲染内容
  const renderPageContent = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return <Page1 />;
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      default:
        return <div>未知页面</div>;
    }
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
        <div className="preview-content">{renderPageContent(currentPage)}</div>
      </div>

      {/* Footer */}
      <div className="preview-footer">
        <Space>Please sign on the page</Space>
        <Button type="primary" onClick={showSignModal}>
          Sign
        </Button>
      </div>

      <div className="floatBtn">
        {/* 下载按钮，使用react-pdf导出PDF */}
        <PDFDownloadLink document={<PDFDocument />} fileName="e-contract.pdf">
          {({ loading }) =>
            loading ? (
              "Generating PDF..."
            ) : (
              <Button type="text">Download</Button>
            )
          }
        </PDFDownloadLink>

        {/* 分页控件 */}
        <Pagination
          simple
          current={currentPage}
          total={25}
          onChange={handlePageChange}
          pageSize={1}
        />
      </div>
    </div>
  );
};

export default EContractPreview;
