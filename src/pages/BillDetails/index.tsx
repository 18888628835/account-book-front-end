import React, { useEffect, useContext } from 'react';
import { Empty } from 'antd';
import httpApi from './service/server';
import Header from './components/header';
import PanelContainer from '@/components/PanelContainer';
import { Context } from '@/App';
import { updateStore } from '@/store/action';
import Wrap from './css';
import CellContent from './components/CellContent';

const BillDetail = () => {
  const { store, dispatch } = useContext(Context);

  const onChangeDate = (date: Types.DateType) => {
    dispatch(updateStore(date));
  };

  const userBills = httpApi.servers.getBillsByDate(
    {
      params: {
        month: `${store.year}-${store.month}`,
      },
    },
    { manual: true }
  );

  const updateBill = httpApi.servers.updateBill(undefined, { manual: true });

  const loadUserBills = async () => {
    const result = await userBills.run();
    //把本月总收入跟总支出更新到仓库中
    dispatch(
      updateStore({
        totalIncome: result.data?.totalIncome,
        totalOutlay: result.data?.totalOutlay,
      })
    );
  };
  const onUpdateSubmit = data => {
    updateBill.run({
      data,
    });
  };

  const onDelete = async id => {
    const data = {
      id,
      deleteFlag: true,
    };
    const response = await updateBill.run({
      data,
    });
    if (response.success) loadUserBills();
  };

  useEffect(() => {
    if (store.year && store.month) loadUserBills();
  }, [store.year, store.month]);
  return (
    <Wrap>
      <Header
        onChangeDate={onChangeDate}
        date={{ year: store.year, month: store.month }}
        total={{
          totalIncome: userBills.data?.data?.totalIncome,
          totalOutlay: userBills.data?.data?.totalOutlay,
        }}
      />
      <div className='bill_details_container'>
        <PanelContainer>
          {userBills.data?.data?.list.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <CellContent
              data={userBills.data?.data?.list}
              {...{ onDelete, onUpdateSubmit, loadUserBills }}
            />
          )}
        </PanelContainer>
      </div>
    </Wrap>
  );
};

export default BillDetail;
