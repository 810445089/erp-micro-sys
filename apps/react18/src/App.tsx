
import Router from './router'

// import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, Layout } from 'antd'

import './App.css'

function App(props: any) {

  return (
    <BrowserRouter>
      <ConfigProvider componentSize={props.assemblySize} locale={props.zhCN}>
        <Layout>
          <Router />
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
