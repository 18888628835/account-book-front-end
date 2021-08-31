import React from 'react';
import { BrowserRouter as GlobalRouter, Switch, Route } from 'react-router-dom';
import Layout from 'components/layout';
import BillDetail from '@/page/bill_details';
import UserInfo from '@/page/user_info';
import BillAdd from '@/page/bill_add';
import Login from '@/page/login';
import EditUserInfo from './edit_user_info';
import BillCharts from './bill_charts';

const Router = () => {
  return (
    <GlobalRouter>
      <Switch>
        <Route path='/' exact component={Login}></Route>
        <Route path='/bill/add' exact component={BillAdd}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/user/editUserInfo' exact component={EditUserInfo} />
        <Layout
          footConfig={[
            ['/bill/details', 'icon-history', '明细'],
            ['/bill/charts', 'icon-chart-pie', '图表'],
            ['/user/userInfo', 'icon-user-filling', '我的'],
          ]}
        >
          <Route path='/user/userInfo' exact component={UserInfo} />
          <Route path='/bill/details' exact component={BillDetail} />
          <Route path='/bill/charts' exact component={BillCharts} />
        </Layout>
      </Switch>
    </GlobalRouter>
  );
};

export default Router;
