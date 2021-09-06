import React, { useContext } from 'react';
import { Progress } from 'zarm';
import { useHistory } from 'react-router';
import { Context } from '@/App';
import UserInfoHeader from './components/header';
import Wrapper from './components/Wrapper';
import Wrap from './css';
import httpApi from './service/server';
import Svg from '@/components/svg/Svg';
import { updateStore } from '@/store/action';
import { paths } from '../router';

const calcPercent = (outLay: number, budget: number) => {
  if (!budget) {
    return 0;
  }
  // 超预算
  if (budget - outLay < 0) {
    return 0;
  }
  return Math.floor(((budget - outLay) / budget) * 100);
};

const UserInfo = () => {
  const clockIn = httpApi.servers.clockIn(undefined, { manual: true });
  const { dispatch, store } = useContext(Context);

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
      case 'editBudget':
        prompt('请输入预算');
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
      <div className='wrap_content'>
        <Wrapper title='账单' hasArrow onClick={toAnnualBillPage}>
          <div>{store.month}月</div>
          {[
            { type: '收入', money: store.totalIncome },
            { type: '支出', money: store.totalOutlay },
            {
              type: '结余',
              money: Number(store.budget || 0) - Number(store.totalOutlay || 0),
            },
          ].map(({ type, money }) => (
            <div key={type}>
              <div>{type}</div>
              <div>{money}</div>
            </div>
          ))}
        </Wrapper>
        <Wrapper
          title={`${store?.month}月总预算`}
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
              percent={calcPercent(
                Number(store.totalOutlay),
                Number(store.budget)
              )}
              strokeShape='round'
              strokeWidth={8}
              theme='danger'
              size='sm'
            />
          </div>
          <div className='wrap_text'>
            {[
              {
                title: '剩余预算:',
                number:
                  Number(store?.budget || 0) - Number(store?.totalOutlay || 0),
              },
              { title: '本月预算:', number: store?.budget || 0 },
              { title: '本月支出:', number: store?.totalOutlay },
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
            {
              id: 'editBudget',
              name: 'icon-bianji',
              tagName: '编辑预算',
            },
          ].map(({ id, name, tagName }) => (
            <div onClick={onClickHandle} id={id} key={id}>
              <Svg name={name} tagName={tagName} />
            </div>
          ))}
        </Wrapper>
      </div>
    </Wrap>
  );
};

export default UserInfo;
