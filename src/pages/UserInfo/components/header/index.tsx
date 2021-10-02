import React, { useContext } from 'react';
import PanelContainer from '@/components/PanelContainer';
import { CarryOutOutlined } from '@ant-design/icons';
import { Avatar } from '@material-ui/core';
import { Context } from '@/App';
import { useHistory } from 'react-router';
import { paths } from '@/pages/router';

const UserInfoHeader = props => {
  const { onClockIn } = props;
  const { store } = useContext(Context);
  const count = store?.yearBill?.list.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.data.length;
  }, 0);
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
                <CarryOutOutlined />
              </div>
            )}
          </div>
          <div className='user_data'>
            {[
              { count: store?.clockInTimes, type: '打卡次数' },
              { count: store.yearBill?.list?.length, type: '记账月数' },
              { count: count, type: '记账总笔数' },
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
