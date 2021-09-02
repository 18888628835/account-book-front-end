import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from 'components/layout';
import BillDetail from '@/pages/BillDetails';
import UserInfo from '@/pages/UserInfo';
import BillAdd from '@/pages/AddBill';
import Login from '@/pages/Login';
import EditUserInfo from './EditUserInfo';
import BillCharts from './BillCharts';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Route path='/login' exact component={Login} />
      <Route path='/bill/add' exact component={BillAdd} />
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
  );
};

export default Routes;
