import React from 'react'
import { Modal } from 'antd'

const AddModal: React.FC<{
  visible: boolean
  onOpen: () => void
  onClose: () => void
}> = ({ visible, onOpen, onClose }) => {
  const handleOk = () => {
    // 处理完逻辑之后
    onClose()
  }
  return (
    <Modal
      title="新增用户"
      open={visible}
      onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={onClose}
    >
      <p>新增用户</p>
    </Modal>
  )
}

export default AddModal
