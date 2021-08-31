import React from 'react';
import 'antd/dist/antd.css';
import 'zarm/dist/zarm.css';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import Router from './page/router';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className='App'>
        <Router />
      </div>
    </ConfigProvider>
  );
}

export default App;
