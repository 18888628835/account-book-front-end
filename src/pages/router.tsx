import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Layout from 'components/layout';
import BillDetail from '@/pages/BillDetails';
import UserInfo from '@/pages/UserInfo';
import BillAdd from '@/pages/AddBill';
import Login from '@/pages/Login';
import EditUserInfo from './EditUserInfo';
import BillCharts from './BillCharts';
import AnnualBill from './AnnualBill';

export const paths = {
  LOGIN: '/login',
  ADD_BILL: '/bill/add',
  EDIT_USER_INFO: '/user/editUserInfo',
  USER_INFO: '/user/userInfo',
  BILL_DETAILS: '/bill/details',
  BILL_CHARTS: '/bill/charts',
  ANNUAL_BILL: '/bill/annualBill',
  FULL_BUDGET: '/bill/fullBudget',
};

const Routes = () => {
  const {
    LOGIN,
    ADD_BILL,
    EDIT_USER_INFO,
    USER_INFO,
    BILL_DETAILS,
    BILL_CHARTS,
    ANNUAL_BILL,
    FULL_BUDGET,
  } = paths;

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to={LOGIN} />
      </Route>
      <Route path={LOGIN} exact component={Login} />
      <Route path={ADD_BILL} exact component={BillAdd} />
      <Route path={EDIT_USER_INFO} exact component={EditUserInfo} />
      <Route path={FULL_BUDGET} exact component={AnnualBill} />
      <Route path={ANNUAL_BILL} exact component={AnnualBill} />
      <Layout
        footConfig={[
          [BILL_DETAILS, 'icon-history', '明细'],
          [BILL_CHARTS, 'icon-chart-pie', '图表'],
          [USER_INFO, 'icon-user-filling', '我的'],
        ]}
      >
        <Route path={USER_INFO} exact component={UserInfo} />
        <Route path={BILL_DETAILS} exact component={BillDetail} />
        <Route path={BILL_CHARTS} exact component={BillCharts} />
      </Layout>
    </Switch>
  );
};

export default Routes;
