import React, { useReducer, createContext, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import 'zarm/dist/zarm.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import _Router from './pages/router';
import { reducer, globalStore } from './store/reducer';
import useUserInfo from './hooks/useUserInfo';
import { initState } from './store/action';
import moment from 'moment';

export const Context = createContext<any>(null);

function App() {
  const [store, dispatch] = useReducer(reducer, globalStore);

  const { fetchUserInfo } = useUserInfo();

  useEffect(() => {
    (async () => {
      const res = await fetchUserInfo();
      const initialDate = {
        month: moment().format('MM'),
        year: moment().format('YYYY'),
      };

      dispatch(
        initState({
          ...res.data,
          ...initialDate,
        })
      );
    })();
  }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <Context.Provider value={{ store, dispatch }}>
        <div className='App'>
          <_Router />
        </div>
      </Context.Provider>
    </ConfigProvider>
  );
}

export default App;
