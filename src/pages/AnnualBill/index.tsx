import PanelContainer from '@/components/PanelContainer';
import useDatePicker from '@/hooks/useDatePicker';
import moment from 'moment';
import React, { useState } from 'react';
import { Cell, DatePicker, NavBar } from 'zarm';
import Wrap from './css';
import httpApi from './service/server';

const AnnualBill = () => {
  const initialYear = new Date().getFullYear();
  const [year, setYear] = useState(initialYear);
  const userYearBills = httpApi.servers.getBillsByDate({
    params: {
      year: initialYear,
    },
  });

  const { toggleDatePickerVisible, datePickerVisible } = useDatePicker();
  return (
    <Wrap>
      <NavBar
        title='全年账单'
        right={<div onClick={() => history.back()}>X</div>}
        left={
          <div className='container'>
            <div onClick={() => toggleDatePickerVisible()}>
              <span className='month'>{year}年</span>
              <DatePicker
                onCancel={() => toggleDatePickerVisible()}
                onOk={value => {
                  const year = moment(value).format('YYYY');
                  userYearBills.run({
                    params: {
                      year,
                    },
                  });
                  setYear(Number(year));
                  toggleDatePickerVisible();
                }}
                visible={datePickerVisible}
                mode='year'
              />
              <span className='san' />
            </div>
          </div>
        }
      />
      <section className='title'>
        <div className='container'>
          <div>结余</div>
          <div>
            {Number(userYearBills.data?.data?.totalIncome) -
              Number(userYearBills.data?.data?.totalOutlay) || ''}
          </div>
        </div>
        <div className='container'>
          <div>收入</div>
          <div>{userYearBills.data?.data?.totalIncome}</div>
        </div>
        <div className='container'>
          <div>支出</div>
          <div>{userYearBills.data?.data?.totalOutlay}</div>
        </div>
      </section>
      <PanelContainer>
        <Cell
          className='title_cell_container'
          title='月份'
          description={
            <div className='cell_title_wrap'>
              <span>收入</span>
              <span>支出</span>
              <span>结余</span>
            </div>
          }
        />
        {userYearBills.data?.data?.list.map(({ income, outlay, time }) => {
          return (
            <Cell
              key={time}
              title={moment(time).format('MM月')}
              description={
                <div className='cell_title_wrap'>
                  <span>{income}</span>
                  <span>{outlay}</span>
                  <span>{Number(income) - Number(outlay)}</span>
                </div>
              }
            />
          );
        })}
      </PanelContainer>
    </Wrap>
  );
};

export default AnnualBill;
