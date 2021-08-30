import React from 'react';
import PanelContainer from '@/components/PanelContainer';
import { Avatar } from '@material-ui/core';

const UserInfoHeader = props => {
  const { userInfo, onClockIn } = props;
  return (
    <section className='user_info_header'>
      <PanelContainer>
        <header>
          <div className='avatar_wrap'>
            <div className='avatar_name'>
              <Avatar alt='我' src={`${userInfo?.avatar}`} />
              <div className='name'>{userInfo?.userName}</div>
            </div>
            {userInfo?.todayClockIn ? (
              <div>已打卡</div>
            ) : (
              <div className='da_ka' onClick={onClockIn}>
                打卡
              </div>
            )}
          </div>
          <div className='user_data'>
            {[
              { count: userInfo?.clockInTimes, type: '打卡次数' },
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
