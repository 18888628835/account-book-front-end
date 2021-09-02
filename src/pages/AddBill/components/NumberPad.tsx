import useDatePicker from '@/hooks/useDatePicker';
import moment from 'moment';
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { DatePicker } from 'zarm';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  .pad_wrap {
    display: flex;
  }
  .date_picker {
    text-align: center;
    line-height: 55px;
    min-width: 25%;
  }
  .pad {
    flex: 5;
    display: flex;
    font-size: 20px;
    line-height: 55px;
    margin-left: 16px;
  }
  .number {
    border-left: 1px solid var(--main-bd-color);
    button {
      float: left;
      outline: none;
      background-color: white;
      font-size: 18px;
      border: 1px solid var(--main-bd-color);
      border-left: none;
      border-bottom: none;
      width: 25%;
      height: 9.5vh;
      display: table;
    }
    .ok {
      height: 19vh;
      float: right;
    }
  }
`;
type P = {
  amount: string;
  onChange: (obj: any) => void;
  onOk: () => void;
  date: string;
};
const buttonList = [
  '1',
  '2',
  '3',
  '清空',
  '4',
  '5',
  '6',
  '删除',
  '7',
  '8',
  '9',
];
const NumberPad: FC<P> = props => {
  const { amount, onChange, onOk, date } = props;
  const onClick: (e: React.MouseEvent) => void = e => {
    const a = (e.target as HTMLButtonElement).innerText;
    const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const setAmount = (amount: string) => {
      if (amount.length > 16) {
        onChange({ amount: amount.slice(0, 16) });
      } else {
        onChange({ amount });
      }
    };
    if (amount === '0' && a !== 'ok') {
      setAmount(a);
    } else if (array.indexOf(a) >= 0) {
      setAmount(amount + a);
    }
    switch (a) {
      case '清空':
        setAmount('0');
        break;
      case '删除':
        setAmount(amount.slice(0, -1) || '0');
        break;
      case '.':
        if (amount.indexOf('.') === -1 || amount === '0') {
          setAmount(amount + '.');
        }
        break;
      case '0':
        if (amount !== '0') {
          setAmount(amount + '0');
        }
        break;
      case 'ok':
        onOk();
        break;
      default:
        break;
    }
  };
  const { toggleDatePickerVisible, datePickerVisible } = useDatePicker();

  return (
    <Wrap>
      <div className='pad_wrap'>
        <div className='pad'>{amount}</div>
        <div
          className='date_picker'
          onClick={() => {
            toggleDatePickerVisible();
          }}
        >
          {date}
          <DatePicker
            visible={datePickerVisible}
            mode='date'
            value={date}
            onCancel={() => {
              toggleDatePickerVisible();
            }}
            onOk={value => {
              onChange({ date: moment(value).format('YYYY-MM-DD') });
              toggleDatePickerVisible();
            }}
          />
        </div>
      </div>

      <div className='number' onClick={onClick}>
        {buttonList.map(v => {
          return <button key={v}>{v}</button>;
        })}
        <button className='ok'>ok</button>
        <button style={{ width: '50%' }}>0</button>
        <button>.</button>
      </div>
    </Wrap>
  );
};
export default NumberPad;
