import React, { useContext } from 'react';
import { Empty } from 'antd';
import Header from './components/header';
import PanelContainer from '@/components/PanelContainer';
import { Context } from '@/App';
import { updateStore } from '@/store/action';
import Wrap from './css';
import CellContent from './components/CellContent';
import useBillDetails from '@/hooks/useBillDetails/useBillDetails';

const BillDetail = () => {
  const { store, dispatch } = useContext(Context);
  const {
    fetchBillDetails,
    updateBillDetails,
    fetchYearBill,
    fetchStatistics,
  } = useBillDetails();

  const onChangeDate = async (date: Types.DateType) => {
    const result = await fetchBillDetails(date);
    dispatch(updateStore(date));
    dispatch(updateStore({ monthBill: result.data }));
  };

  const loadUserBills = async () => {
    const result = await fetchBillDetails({
      month: store.month,
      year: store.year,
    });
    const yearBill = await fetchYearBill(store.year);
    const statistics = await fetchStatistics();
    //把本月总收入跟总支出更新到仓库中
    dispatch(
      updateStore({
        monthBill: result.data,
        yearBill: yearBill.data,
        statistics: statistics.data,
      })
    );
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
          totalIncome: store?.monthBill?.totalIncome,
          totalOutlay: store?.monthBill?.totalOutlay,
        }}
      />
      <div className='bill_details_container'>
        <PanelContainer>
          {(store?.monthBill?.list || []).length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <CellContent
              data={store?.monthBill?.list}
              {...{ onDelete, onUpdateSubmit, loadUserBills }}
            />
          )}
        </PanelContainer>
      </div>
    </Wrap>
  );
};

export default BillDetail;
