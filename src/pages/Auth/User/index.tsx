import React, {useEffect, useState} from 'react'
import {Button, Col, Form, Input, Row, Space, Table, Tag, theme} from 'antd'
import {DownOutlined} from "@ant-design/icons";
import type {ColumnsType} from 'antd/es/table'
import {useQuery} from '@tanstack/react-query'
import {useRequest} from 'ahooks';


import {queryUserList} from './service'


interface IUserProps {
  test?: string
}

interface DataType {
  id: string
  name: string
  avatar: string
  isActive: boolean
}

const columns: ColumnsType<DataType> = [
  {
    title: '用户id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'age'
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>删除</a>
      </Space>
    )
  }
]

const User: React.FC<IUserProps> = () => {
  const {token} = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const [queryParams, setParams] = useState({
    name: null
  })
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const {data, loading, error, run} = useRequest((queryParams) => queryUserList(queryParams), {
    manual: false
  })
  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    run(values)
    // 过滤参数
    setParams({
      ...values
    })
  };
  return (
    <div>
      <Form form={form} style={formStyle} onFinish={onFinish}>
        <Row>
          <Col span={8}>
            <Form.Item
              name={'name'}
              label={'用户名'}
            >
              <Input placeholder="输入用户名"/>
            </Form.Item>
          </Col>
        </Row>

        <div style={{textAlign: 'right'}}>
          <Space size="small">
            <Button type="primary" htmlType="submit">
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
              style={{fontSize: 12}}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              <DownOutlined rotate={expand ? 180 : 0}/> Collapse
            </a>
          </Space>
        </div>
      </Form>
      <Table
        rowKey={'id'}
        columns={columns}
        loading={loading}
        dataSource={data?.data}
      />
    </div>
  )
}
export default User
