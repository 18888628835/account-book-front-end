import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import { reducer, globalStore } from './store/reducer';
import Index from './pages';
import { ActionKind } from './store/action';

export const Context = createContext<{
  store: Types.RootObject;
  dispatch: any;
}>(
  {} as {
    store: Types.RootObject;
    dispatch: any;
  }
);

function App() {
  const [store, dispatch] = useReducer<
    React.Reducer<Types.RootObject, ActionKind>
  >(reducer, globalStore);

  return (
    <ConfigProvider locale={zhCN}>
      <Context.Provider value={{ store, dispatch }}>
        <Router>
          <div className='App'>
            <Index />
          </div>
        </Router>
      </Context.Provider>
    </ConfigProvider>
  );
}

export default App;
