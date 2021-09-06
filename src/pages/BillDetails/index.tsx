import React, { useEffect, useContext } from 'react';
import { Empty } from 'antd';
import httpApi from './service/server';
import Header from './components/header';
import PanelContainer from '@/components/PanelContainer';
import { Context } from '@/App';
import { updateStore } from '@/store/action';
import Wrap from './css';
import CellContent from './components/CellContent';
import useBillDetails from '@/hooks/useBillDetails';

const BillDetail = () => {
  const { store, dispatch } = useContext(Context);
  const { fetchBillDetails, updateBillDetails } = useBillDetails();

  const onChangeDate = async (date: Types.DateType) => {
    const result = await fetchBillDetails(date);
    dispatch(updateStore(date));
    dispatch(updateStore(result.data));
  };

  const loadUserBills = async () => {
    const result = await fetchBillDetails({
      month: store.month,
      year: store.year,
    });
    //把本月总收入跟总支出更新到仓库中
    dispatch(updateStore(result.data));
  };

  const onUpdateSubmit = async data => {
    const result = await updateBillDetails(data);
    return result;
  };

  const onDelete = async id => {
    const data = {
      id,
      deleteFlag: true,
    };
    const response = await onUpdateSubmit(data);
    if (response.success) loadUserBills();
  };

  return (
    <Wrap>
      <Header
        onChangeDate={onChangeDate}
        date={{ year: store.year, month: store.month }}
        total={{
          totalIncome: store?.totalIncome,
          totalOutlay: store?.totalOutlay,
        }}
      />
      <div className='bill_details_container'>
        <PanelContainer>
          {(store?.list || []).length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <CellContent
              data={store?.list}
              {...{ onDelete, onUpdateSubmit, loadUserBills }}
            />
          )}
        </PanelContainer>
      </div>
    </Wrap>
  );
};

export default BillDetail;
