import React from 'react';
import {
  BrowserRouter as _Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Layout from 'components/layout';
import BillDetail from '@/pages/BillDetails';
import UserInfo from '@/pages/UserInfo';
import BillAdd from '@/pages/AddBill';
import Login from '@/pages/Login';
import EditUserInfo from './EditUserInfo';
import BillCharts from './BillCharts';

const Router = () => {
  return (
    <_Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        <Route path='/bill/add' exact component={BillAdd} />
        <Route path='/login' exact component={Login} />
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
    </_Router>
  );
};

export default Router;
