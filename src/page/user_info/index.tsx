import PanelContainer from '@/components/PanelContainer';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { Cell, Progress } from 'zarm';
import UserInfoHeader from './components/header';
import Wrap from './_style';

const UserInfo = () => {
  return (
    <Wrap>
      <UserInfoHeader />
      <PanelContainer>
        <section className='bill_container'>
          <Cell hasArrow title='账单' />
          <div className='bill_wrap'>
            <div className='bill'>
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
            </div>
          </div>
        </section>
        <section className='bill_container'>
          <Cell hasArrow title='08月总预算' description='查看全部' />
          <div className='bill_wrap'>
            <div className='bill'>
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
                <div>
                  <span>剩余预算:</span>
                  <span>1000</span>
                </div>
                <div>
                  <span>本月预算:</span>
                  <span>1000</span>
                </div>
                <div>
                  <span>本月支出:</span>
                  <span>1000</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PanelContainer>
    </Wrap>
  );
};

export default UserInfo;
