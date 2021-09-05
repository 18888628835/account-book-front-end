import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import App from './App';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
