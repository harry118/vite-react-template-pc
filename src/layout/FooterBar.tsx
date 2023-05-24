import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout
const FooterBar: React.FC = () => {
  return (
    <Footer className='border-black p-3' style={{ textAlign: 'center' }}>
      typescript-react-template ©2023 Created by 君铉
    </Footer>
  )
}

export default FooterBar
