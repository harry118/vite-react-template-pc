import React from "react";
import { useRoutes } from "react-router-dom";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale/zh_CN";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import routes from "@router/index";
import "@utils/index";
import "./App.less";
import * as process from "process";

interface IAppProps {
  test?: string;
}

// Create a client
const queryClient = new QueryClient();
const App: React.FC<IAppProps> = () => {
  const element = useRoutes(routes);
  return (
    <ConfigProvider
      componentSize="middle"
      locale={zh_CN}
      theme={{
        token: {
          // 基础圆角设为0
          borderRadius: 0,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        {element}
        {import.meta.env.VITE_NODE_ENV === "development" ? (
          <ReactQueryDevtools initialIsOpen={false} />
        ) : null}
      </QueryClientProvider>
    </ConfigProvider>
  );
};
export default App;
