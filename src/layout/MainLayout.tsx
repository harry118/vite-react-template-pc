import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import SideBar from './SideBar'
import FooterBar from './FooterBar'
import HeaderBar from './HeaderBar'

import styles from './main-layout.module.less'

const { Content } = Layout
const MainLayout: React.FC = () => {
  return (
    <Layout hasSider className={styles.main}>
      <SideBar/>
      <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
        <HeaderBar/>
        <Content
          className={styles.main_content}
          style={{ margin: '24px 14px 0', overflow: 'initial' }}
        >
          <div style={{ textAlign: 'center' }}>
            <Outlet/>
          </div>
        </Content>
        <FooterBar/>
      </Layout>
    </Layout>
  )
}

export default MainLayout
