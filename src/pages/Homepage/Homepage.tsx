import { Context } from '@/App';
import { AlignRightOutlined } from '@ant-design/icons';
import { Avatar } from '@material-ui/core';
import React, { useContext } from 'react';
import Wrap from './_style';

const Homepage = () => {
  const { store } = useContext(Context);
  return (
    <Wrap>
      <header>
        <Avatar alt='me' src={store.avatar} />
        <AlignRightOutlined style={{ fontSize: '26px' }} />
      </header>
      <div className='year_budget'>
        <span>全年预算</span>
        <h2>￥{Number(store.budget) * 12}</h2>
      </div>
    </Wrap>
  );
};

export default Homepage;
