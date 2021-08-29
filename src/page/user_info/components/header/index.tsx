import React from 'react';
import PanelContainer from '@/components/PanelContainer';
import { Avatar } from '@material-ui/core';

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
            {[
              { count: 3, type: '打卡次数' },
              { count: 3, type: '记账天数' },
              { count: 3, type: '记账总笔数' },
            ].map(({ count, type }) => (
              <div key={type}>
                <span>{count}</span>
                <span>{type}</span>
              </div>
            ))}
          </div>
        </header>
      </PanelContainer>
    </section>
  );
};

export default UserInfoHeader;
