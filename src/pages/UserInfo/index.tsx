import React, { useContext, useEffect } from 'react';
import { Progress } from 'zarm';
import { useHistory } from 'react-router';
import { Context } from '@/App';
import UserInfoHeader from './components/header';
import Wrapper from './components/Wrapper';
import Wrap from './css';
import httpApi from './service/server';
import PanelContainer from '@/components/PanelContainer';
import Svg from '@/components/svg/Svg';
import { updateStore } from '@/store/action';
import { paths } from '../router';

const UserInfo = () => {
  const clockIn = httpApi.servers.clockIn(undefined, { manual: true });
  const { dispatch } = useContext(Context);

  const history = useHistory();

  const onClockIn = async () => {
    const data = { date: Date.now() };
    const res = await clockIn.run({
      data,
    });
    if (res.success) {
      const payload = {
        todayClockIn: true,
        clockInTimes: res.data.clockInTimes.length,
      };
      dispatch(updateStore(payload));
    }
  };
  const onClickHandle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    switch (e.currentTarget.id) {
      case 'editInfo':
        history.push(paths.EDIT_USER_INFO);
        break;

      default:
        break;
    }
  };
  const toAnnualBillPage = () => {
    history.push(paths.ANNUAL_BILL);
  };
  const toFullBudgetPage = () => {
    history.push(paths.FULL_BUDGET);
  };
  return (
    <Wrap>
      <UserInfoHeader onClockIn={onClockIn} />
      <PanelContainer>
        <Wrapper title='账单' hasArrow onClick={toAnnualBillPage}>
          <div>8月</div>
          {[
            { type: '收入', money: 997 },
            { type: '支出', money: 997 },
            { type: '结余', money: 997 },
          ].map(({ type, money }) => (
            <div key={type}>
              <div>{type}</div>
              <div>{money}</div>
            </div>
          ))}
        </Wrapper>
        <Wrapper
          title='08月总预算'
          hasArrow
          description='查看全部'
          onClick={toFullBudgetPage}
        >
          <div className='circle_wrap'>
            <Progress
              text={percent => (
                <div className='progress_text'>
                  <span>剩余</span>
                  <span>{percent}%</span>
                </div>
              )}
              shape='circle'
              percent={90}
              strokeShape='round'
              strokeWidth={8}
              theme='danger'
              size='sm'
            />
          </div>
          <div className='wrap_text'>
            {[
              { title: '剩余预算:', number: 1000 },
              { title: '本月预算:', number: 1000 },
              { title: '本月支出:', number: 1000 },
            ].map(({ title, number }) => (
              <div key={title}>
                <span>{title}</span>
                <span>{number}</span>
              </div>
            ))}
          </div>
        </Wrapper>
        <Wrapper title='常用功能'>
          {[
            {
              id: 'editInfo',
              name: 'icon-shezhi',
              tagName: '修改信息',
            },
          ].map(({ id, name, tagName }) => (
            <div onClick={onClickHandle} id={id} key='id'>
              <Svg name={name} tagName={tagName} />
            </div>
          ))}
        </Wrapper>
      </PanelContainer>
    </Wrap>
  );
};

export default UserInfo;
