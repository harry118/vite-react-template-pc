import React from 'react'
import { Button } from 'antd'
import { asBlob } from 'html-docx-js-typescript'
import { saveAs } from 'file-saver'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

const ExportDocx: React.FC<any> = (props) => {
  const handleExport = (): void => {
    asBlob(document.querySelectorAll('#testContent')[0].innerHTML).then(data => {
      saveAs(data, 'file.docx') // save as docx file
    })
  }
  const handleExportPdf = async (): Promise<void> => {
    const content = document.querySelectorAll('#testContent')[0] as HTMLElement

    // 创建一个 Canvas 元素并将内容绘制到 Canvas 上
    const canvas = await html2canvas(content)

    // 获取 Canvas 的图像数据
    const imageData = canvas.toDataURL('image/png')

    // 创建一个新的 jsPDF 实例，设置文档尺寸和方向
    const doc = new jsPDF('p', 'mm', 'a4')

    // 计算 Canvas 图像的宽度和高度，以确保适应 PDF 页面
    const width = doc.internal.pageSize.getWidth()
    const height = (canvas.height * width) / canvas.width

    // 将 Canvas 图像添加到 PDF 中
    doc.addImage(imageData, 'PNG', 0, 0, width, height)

    // 下载生成的 PDF 文件
    doc.save('合同.pdf')
  }

  return (
    <div>
      <div id={'testContent'}>
        <div style={{ alignItems: 'center', textAlign: 'center' }}>
          <h1>合同标题</h1>
        </div>
        <p>甲方：xxxxxx</p>
        <p>乙方：yyyyyy</p>
        <p style={{
          color: 'red',
          fontSize: '20px'
        }}>合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容合同内容</p>

      </div>
      <Button onClick={handleExport}>导出docx</Button>
      <Button onClick={handleExportPdf}>导出pdf</Button>
    </div>
  )
}

export default ExportDocx
