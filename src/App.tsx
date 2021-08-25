import React from 'react';
import Login from '@/page/login';
import 'antd/dist/antd.css';
import 'zarm/dist/zarm.css';
import { ConfigProvider } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/layout';
import BillDetail from '@/page/bill_details';
import UserInfo from '@/page/user_info';
import BillAdd from '@/page/bill_add';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className='App'>
        <Router>
          <Switch>
            <Route path='/' exact component={Login}></Route>
            <Route path='/bill/add' exact component={BillAdd}></Route>
            <Route path='/login' component={Login}></Route>
            <Layout
              footConfig={[
                ['/bill/details', 'icon-history', '明细'],
                ['/bill/charts', 'icon-chart-pie', '图表'],
                ['/user/userInfo', 'icon-user-filling', '我的'],
              ]}
            >
              <Route path='/user/userInfo' exact component={UserInfo} />
              <Route path='/bill/details' exact component={BillDetail} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
