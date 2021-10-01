import { Context } from '@/App';
import { AlignRightOutlined } from '@ant-design/icons';
import { Avatar } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Wrap from './_style';
import renderChart from './renderChart';

const getChartData = (data: Types.List[]) => {
  const newData: {
    date: string;
    outlay: number;
  }[] = [];
  for (let i = 0; i < data.length; i++) {
    //过滤六个月内的数据
    if (i < 6) {
      newData.push({
        date: data[i].time.split('-')[1],
        outlay: data[i].outlay,
      });
    }
  }
  return newData.reverse();
};

const Homepage = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (store.yearBill?.totalIncome) {
      const chartData = getChartData(store?.yearBill?.list || []);
      const myChart = renderChart('bar_charts', chartData);
      const resize = () => myChart?.resize();
      window.addEventListener('resize', resize);
      return () => {
        window.removeEventListener('resize', resize);
      };
    }
  }, [store.yearBill]);
  return (
    <Wrap>
      <header>
        <Avatar alt='me' src={store.avatar} />
        <AlignRightOutlined style={{ fontSize: '26px' }} />
      </header>
      <div className='year_budget'>
        <span>全年预算</span>
        <span>￥{Number(store.budget) * 12}</span>
      </div>
      <div className='bill_total_container'>
        <div className='remain_budget'>
          <div>剩余预算</div>
          <div>￥{Number(store.budget) * 12 - store.yearBill?.totalOutlay}</div>
        </div>
        <div className='bottom_box' />
        <div className='top_box'>
          <div className='top_box_content'>
            <div id='bar_charts'></div>
            <div className='income_outlay_container'>
              <div>
                <h4>支出</h4>
                <span>￥{store.yearBill?.totalOutlay}</span>
              </div>
              <div>
                <h4>收入</h4>
                <span>￥{store.yearBill?.totalIncome}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Homepage;
