import useDatePicker from '@/hooks/useDatePicker';
import moment from 'moment';
import React from 'react';
import { DatePicker, NavBar, Icon } from 'zarm';
import Wrap from './_style';
type HeaderProps = {
  date: Types.DateType;
  onChangeDate: (date: Types.DateType) => void;
  total: { totalIncome: number; totalOutlay: number };
};
const Header: React.FC<HeaderProps> = props => {
  const { date, onChangeDate, total } = props;
  const { toggleDatePickerVisible, datePickerVisible } = useDatePicker();
  return (
    <Wrap>
      <NavBar
        title='月账单'
        className='nav_bar'
        left={<Icon type='arrow-left' onClick={() => window.history.back()} />}
      />
      <section className='title'>
        <div className='container'>
          <div>{date.year}</div>
          <div onClick={() => toggleDatePickerVisible()}>
            <span className='month'>{date.month}月</span>
            <DatePicker
              onOk={value => {
                const year = moment(value).format('YYYY');
                const month = moment(value).format('MM');
                onChangeDate({
                  month,
                  year,
                });
                toggleDatePickerVisible();
              }}
              mode='month'
              visible={datePickerVisible}
              onCancel={() => toggleDatePickerVisible()}
            />
            <span className='san'></span>
          </div>
        </div>
        <div className='container'>
          <div>收入</div>
          <div>{total?.totalIncome}</div>
        </div>
        <div className='container'>
          <div>支出</div>
          <div>{total?.totalOutlay}</div>
        </div>
      </section>
    </Wrap>
  );
};

export default Header;
