import React from 'react';
import styled from 'styled-components';
import TopChart from './top_chart';
const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .top {
    flex: 1;
    height: 200px;
  }
`;
const BillCharts = () => {
  return (
    <Wrap>
      <div className='top'>
        <TopChart />
      </div>
      <div className='middle'></div>
      <div className='bottom'></div>
    </Wrap>
  );
};

export default BillCharts;
