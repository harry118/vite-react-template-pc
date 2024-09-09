import React, { useState } from "react";
import { Button, Card, Col, Form, Input, Row, Space, Table, theme } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import { useQuery } from "@tanstack/react-query";
// import {useRequest} from 'ahooks';
import { queryUserList } from "./service";
import AddModal from "@pages/Auth/User/AddModal";

interface IUserProps {
  test?: string;
}

interface DataType {
  id: string;
  name: string;
  avatar: string;
  isActive: boolean;
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
    title: "头像",
    dataIndex: "avatar",
    key: "age",
  },
  {
    title: "操作",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>删除</a>
      </Space>
    ),
  },
];

const User: React.FC<IUserProps> = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [queryParams, setParams] = useState({
    name: null,
  });
  // const {data, loading, error, run} = useRequest((queryParams) => queryUserList(queryParams), {
  //   manual: false
  // })
  const formData = form.getFieldsValue();
  // const {
  //   isLoading: loading,
  //   isError,
  //   data,
  //   refetch
  // } = useQuery(['queryUserList', queryParams], async () => await queryUserList(queryParams))

  const {
    data,
    refetch,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["queryUserList"],
    queryFn: async () => await queryUserList(queryParams),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled: false,
  });

  const onFinish = (values: any): void => {
    console.log("Received values of form: ", values);
    refetch(values)
      .then(() => {
        setParams({
          ...values,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    // run(values)
    // 过滤参数
  };
  return (
    <div>
      <Card className="mb-[14px]">
        <Form form={form} onFinish={onFinish}>
          <Row>
            <Col span={8}>
              <Form.Item name={"name"} label={"用户名"}>
                <Input placeholder="输入用户名" />
              </Form.Item>
            </Col>
          </Row>
          <div style={{ textAlign: "right" }}>
            <Space size="small">
              <Button type="primary" htmlType="submit" loading={loading}>
                查询
              </Button>
              <Button
                onClick={() => {
                  form.resetFields();
                }}
              >
                清空
              </Button>
              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                <DownOutlined rotate={expand ? 180 : 0} />
                {expand ? "收起" : "展开"}
              </a>
            </Space>
          </div>
        </Form>
      </Card>
      <Card>
        <div className="flex justify-end align-middle mb-[14px]">
          <Button
            type="primary"
            onClick={() => {
              setAddModalVisible(true);
            }}
          >
            新增
          </Button>
        </div>
        <Table
          rowKey={"id"}
          columns={columns}
          loading={loading}
          dataSource={data?.data}
        />
        <AddModal
          visible={addModalVisible}
          onClose={() => {
            setAddModalVisible(false);
          }}
          onOpen={() => {
            setAddModalVisible(true);
          }}
        />
      </Card>
    </div>
  );
};
export default User;
