import React, { createElement } from 'react'
import { Layout, Menu } from 'antd'
import * as Icon from '@ant-design/icons'
import { createFromIconfontCN } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'

import styles from './sidebar.module.less'

export interface IMenuItems {
  code: string
  label: React.ReactNode
  path: string
  icon: string
  children?: IMenuItems[]
}
const IconFont = createFromIconfontCN({
  // scriptUrl: '//at.alicdn.com/t/font_1234567.js', // 替换为您的字体文件地址
})
const menus: IMenuItems[] = [
  {
    code: 'home',
    label: '首页',
    path: '/',
    icon: 'HomeOutlined'
  },
  {
    code: 'auth',
    label: '权限管理',
    path: '/auth',
    icon: 'LockOutlined',
    children: [
      {
        code: 'user',
        label: '用户管理',
        path: '/auth/user',
        icon: 'UsergroupDeleteOutlined'
      },
      {
        code: 'role',
        label: '角色管理',
        path: '/auth/role',
        icon: 'AuditOutlined'
      }
    ]
  }
]

const { Sider } = Layout
const renderMenuLabel = (menu: IMenuItems): React.ReactNode => {
  // 如果有children, 则直接显示label
  if (menu?.children != null && menu?.children.length > 0) {
    return menu.label
  }
  return <Link to={menu.path}>{menu.label}</Link>
}
const renderMenu = (menus: IMenuItems[]): MenuProps['items'] => {
  return menus.map((item) => {
    return {
      // 这里用path作为key，为了react-router的path能对应到Menu的key
      key: item.path,
      icon:
        item.icon != null ? createElement(IconFont, { type: item.icon }) : null,
      label: renderMenuLabel(item),
      children: item.children != null ? renderMenu(item.children) : null
    }
  })
}
const items: MenuProps['items'] = renderMenu(menus)
const SideBar: React.FC = () => {
  const location = useLocation()
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0
      }}
    >
      <div className={styles.logo} />
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['home']}
        selectedKeys={[location.pathname]}
        // openKeys={[location.pathname]}
        items={items}
      />
    </Sider>
  )
}

export default SideBar
