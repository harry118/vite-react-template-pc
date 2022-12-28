import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  RouteObject,
  useRoutes,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from '@pages/Home';
import User from '@pages/Auth/User';
import Role from '@pages/Auth/Role';
import Login from '@pages/Login';
import MainLayout from '@layout/MainLayout';
import routes from '@router/index';

import '@utils/index';
import './App.less';

interface IAppProps {
  test?: string;
}
// Create a client
const queryClient = new QueryClient();
const App: React.FC<IAppProps> = () => {
  const element = useRoutes(routes);
  return (
    <ConfigProvider componentSize='small'>
      <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
    </ConfigProvider>
  );
};
export default App;
