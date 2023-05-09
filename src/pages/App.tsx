import React from 'react'
import {
  useRoutes
} from 'react-router-dom'
import {ConfigProvider} from 'antd'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

import routes from '@router/index'
import '@utils/index'
import './App.less'

interface IAppProps {
  test?: string
}

// Create a client
const queryClient = new QueryClient()
const App: React.FC<IAppProps> = () => {
  const element = useRoutes(routes)
  return (
    <ConfigProvider componentSize='middle'>
      <QueryClientProvider client={queryClient}>
        {element}
        {/*<ReactQueryDevtools initialIsOpen={false}/>*/}
      </QueryClientProvider>
    </ConfigProvider>
  )
}
export default App
