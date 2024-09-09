import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
// import { queryRoleList } from "./service";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

interface IUserProps {
  test?: string;
}

interface DataType {
  id: string;
  name: string;
  createTime: string;
  status?: 0 | 1;
}

const EContractList: React.FC<IUserProps> = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["queryRoleList"],
    // queryFn: async () => await queryRoleList(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: false,
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "合同编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "合同名称",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={handlePreview}>预览合同</Button>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const tableData: DataType[] = [
    { id: "1", name: "合同", createTime: "2024-09-02", status: 0 },
  ];
  const handlePreview = () => {
    navigate("/contract/preview", { replace: false });
  };

  return (
    <div>
      <Table
        rowKey={"id"}
        columns={columns}
        loading={isLoading}
        dataSource={tableData}
      />
    </div>
  );
};
export default EContractList;
