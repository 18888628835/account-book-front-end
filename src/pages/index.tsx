import React, { useEffect, useRef, useContext } from 'react';
import { BrowserRouter as _Router, useLocation } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'zarm/dist/zarm.css';
import useUserInfo from '@/hooks/useUserInfo';
import { initStore } from '@/store/action';
import moment from 'moment';
import { Context } from '@/App';
import Routes from './router';
import useBillDetails from '@/hooks/useBillDetails';

const Index = () => {
  const location = useLocation();
  const { pathname } = location;
  const { dispatch } = useContext(Context);
  const { fetchUserInfo } = useUserInfo();
  const { fetchBillDetails, fetchYearBill } = useBillDetails();
  const ref = useRef(0);

  const initCore = async () => {
    //   获取用户信息
    const res = await fetchUserInfo();
    // 获取一个初始的年月日
    const initialDate = {
      month: moment().format('MM'),
      year: moment().format('YYYY'),
    };
    const otherParams = {
      addPageAppear: false,
    };
    const response = await fetchBillDetails(initialDate);
    const yearBill = await fetchYearBill(initialDate.year);
    const initialStore = {
      ...res.data,
      ...initialDate,
      ...otherParams,
      monthBill: response.data,
      yearBill: yearBill.data, //年度账单
    };
    dispatch(initStore(initialStore));
  };

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/login' && ref.current === 0) {
      initCore();
      ref.current += 1;
    }
  }, [location.pathname]);

  return <Routes />;
};

export default Index;
