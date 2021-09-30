import React from 'react';
import styled from 'styled-components';
import TopChart from './top_chart';
const Wrap = styled.div`
  background-color: #ede3db;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -2;
  flex-direction: column;
  position: relative;
  .top {
    font-size: 2rem;
    text-align: center;
    margin-top: 5.42vh;
  }
  .middle {
    width: 93.6vw;
    height: 68.23vh;
    background: #ffffff;
    border-radius: 11.73vw;
    position: absolute;
    bottom: 3.08vh;
    transform: translateX(-50%);
    left: 50%;
  }
  .bottom {
    background-color: #545967;
    width: 100%;
    height: 72.78vh;
    position: fixed;
    bottom: 0;
    z-index: -1;
    border-radius: 13.33vw 13.33vw 0 0;
  }
`;
const BillCharts = () => {
  return (
    <Wrap>
      <div className='top'>账单统计</div>
      <div className='middle'>
        <TopChart />
      </div>
      <div className='bottom'></div>
    </Wrap>
  );
};

export default BillCharts;
