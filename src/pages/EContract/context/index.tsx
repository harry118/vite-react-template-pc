// 文件: src/ImageContext.tsx

import React, { createContext, useState, useContext, ReactNode } from "react";

// 定义Context的类型
interface ImageContextType {
  imageBase64: string | null; // 存储base64图片
  setImageBase64: (base64: string) => void; // 设置base64图片的方法
  text: string;
  setText: (text: string) => void;
}

// 创建上下文，初始值为空
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// 创建一个Provider组件
export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [imageBase64, setImageBase64] = useState<string | null>(null); // 初始状态为null
  const [text, setText] = useState<string>("");

  return (
    <ImageContext.Provider
      value={{ imageBase64, setImageBase64, text, setText }}
    >
      {children}
    </ImageContext.Provider>
  );
};

// 自定义hook，用来方便地使用图片上下文
export const useImage = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used within an ImageProvider");
  }
  return context;
};
