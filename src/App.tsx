import React, { useReducer, createContext } from 'react';
import 'antd/dist/antd.css';
import 'zarm/dist/zarm.css';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import Router from './pages/router';
import { reducer, globalStore } from './store/reducer';

export const Context = createContext<any>(null);

function App() {
  const [store, dispatch] = useReducer(reducer, globalStore);

  return (
    <ConfigProvider locale={zhCN}>
      <Context.Provider value={{ store, dispatch }}>
        <div className='App'>
          <Router />
        </div>
      </Context.Provider>
    </ConfigProvider>
  );
}

export default App;
