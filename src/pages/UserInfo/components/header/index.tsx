import React, { useContext } from 'react';
import PanelContainer from '@/components/PanelContainer';
import { Avatar } from '@material-ui/core';
import { Context } from '@/App';
import { useHistory } from 'react-router';
import { paths } from '@/pages/router';

const UserInfoHeader = props => {
  const { onClockIn } = props;
  const { store } = useContext(Context);
  const history = useHistory();
  const toEditUserInfoPage = () => history.push(paths.EDIT_USER_INFO);
  return (
    <section className='user_info_header'>
      <PanelContainer>
        <header>
          <div className='avatar_wrap'>
            <div className='avatar_name' onClick={toEditUserInfoPage}>
              <Avatar alt='我' src={`${store?.avatar}`} />
              <div className='name'>{store?.userName}</div>
            </div>
            {store?.todayClockIn ? (
              <div>已打卡</div>
            ) : (
              <div className='da_ka' onClick={onClockIn}>
                打卡
              </div>
            )}
          </div>
          <div className='user_data'>
            {[
              { count: store?.clockInTimes, type: '打卡次数' },
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
