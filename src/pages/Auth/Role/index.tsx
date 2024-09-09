import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { queryRoleList } from "./service";
import { useQuery } from "@tanstack/react-query";

interface IUserProps {
  test?: string;
}

interface DataType {
  id: string;
  name: string;
  code: string;
  status?: 0 | 1;
}

const columns: ColumnsType<DataType> = [
  {
    title: "用户id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "角色编码",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>{record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Role: React.FC<IUserProps> = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["queryRoleList"],
    queryFn: async () => await queryRoleList(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: false,
  });

  return (
    <div>
      <Table
        rowKey={"id"}
        columns={columns}
        loading={isLoading}
        dataSource={data?.data}
      />
    </div>
  );
};
export default Role;
