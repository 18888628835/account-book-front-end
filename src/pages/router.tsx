import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Layout from 'components/layout';
import BillDetail from '@/pages/BillDetails';
import UserInfo from '@/pages/UserInfo';
import Login from '@/pages/Login';
import EditUserInfo from './EditUserInfo';
import BillCharts from './BillCharts';
import AnnualBill from './AnnualBill';
import Homepage from './Homepage/Homepage';

export const paths = {
  LOGIN: '/login',
  ADD_BILL: '/bill/add',
  EDIT_USER_INFO: '/user/editUserInfo',
  USER_INFO: '/user/userInfo',
  BILL_DETAILS: '/bill/details',
  BILL_CHARTS: '/bill/charts',
  ANNUAL_BILL: '/bill/annualBill',
  FULL_BUDGET: '/bill/fullBudget',
  HOMEPAGE: '/homepage',
};

const Routes = () => {
  const {
    LOGIN,
    EDIT_USER_INFO,
    USER_INFO,
    BILL_DETAILS,
    BILL_CHARTS,
    ANNUAL_BILL,
    FULL_BUDGET,
    HOMEPAGE,
  } = paths;

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to={LOGIN} />
      </Route>
      <Route path={LOGIN} exact component={Login} />
      <Route path={EDIT_USER_INFO} exact component={EditUserInfo} />
      <Route path={FULL_BUDGET} exact component={AnnualBill} />
      <Route path={ANNUAL_BILL} exact component={AnnualBill} />
      <Route path={BILL_DETAILS} exact component={BillDetail} />
      <Layout
        footConfig={[
          [HOMEPAGE, 'icon-history'],
          [BILL_CHARTS, 'icon-pie-chart'],
          [USER_INFO, 'icon-user'],
        ]}
      >
        <Route path={HOMEPAGE} exact component={Homepage} />
        <Route path={USER_INFO} exact component={UserInfo} />
        <Route path={BILL_CHARTS} exact component={BillCharts} />
      </Layout>
    </Switch>
  );
};

export default Routes;
