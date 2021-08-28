import React from 'react';
import PanelContainer from '@/components/PanelContainer';
import { Avatar } from '@material-ui/core';
import Wrap from '../../_style';

const UserInfoHeader = () => {
  return (
    <section className='user_info_header'>
      <PanelContainer>
        <header>
          <div className='avatar_wrap'>
            <div className='avatar_name'>
              <Avatar alt='我的帅气头像' src='' />
              <div className='name'>name</div>
            </div>
            <div className='da_ka'>打卡</div>
          </div>
          <div className='user_data'>
            <div>
              <span>3</span>
              <span>记账天数</span>
            </div>
            <div>
              <span>3</span>
              <span>记账天数</span>
            </div>
            <div>
              <span>1</span>
              <span>记账总笔数</span>
            </div>
          </div>
        </header>
      </PanelContainer>
    </section>
  );
};

export default UserInfoHeader;
