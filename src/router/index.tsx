import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  type RouteObject,
  useRoutes
} from 'react-router-dom'

import Home from '@pages/Home'
import User from '@pages/Auth/User'
import Role from '@pages/Auth/Role'
import Login from '@pages/Login'
import MainLayout from '@layout/MainLayout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/auth/user', element: <User /> },
      { path: '/auth/role', element: <Role /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes
