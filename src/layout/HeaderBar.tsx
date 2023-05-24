import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import avatar from '@assets/avatar.png'
import styles from './header-bar.module.less'

const HeaderBar: React.FC = () => {
  const navigate = useNavigate()
  const logout = (): void => {
    Cookies.remove('token')
    navigate('/login', { replace: true })
  }
  const items: MenuProps['items'] = [
    {
      label: <a onClick={logout}>退出登录</a>,
      key: '0'
    },
    {
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          我的主页
        </a>
      ),
      key: '1'
    }
  ]

  return (
    <div className={styles.main_header}>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => {
          e.preventDefault()
        }}>
          <Space>
            <Avatar src={avatar}/>
            <DownOutlined/>
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}
export default HeaderBar
