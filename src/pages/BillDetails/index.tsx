import React, { useEffect, useState, useContext } from 'react';
import { Space } from 'antd';
import styled from 'styled-components';
import { Cell, Panel, SwipeAction, Button, Pull } from 'zarm';
import httpApi from './service/server';
import EditableRow from './components/editableRow';
import Header from './components/header';
import PanelContainer from '@/components/PanelContainer';
import { Context } from '@/App';
import { updateState } from '@/store/action';

const Wrap = styled.section`
  .bill_details_container {
    overflow: scroll;
    /* 去除滚动条 */
    max-height: calc(100vh - 5.37rem - 7.64rem);
  }
  .za-panel__header {
    padding: 0.57rem 1.3rem 0.57rem 1.3rem;
    font-size: 1.14rem;
  }
  .za-cell:after {
    border: none;
    font-size: 1.22rem;
  }
  .za-cell__title {
    padding: 1.22rem 0;
    font-size: 1.22rem;
  }
  .za-panel__body:after {
    border-bottom: none;
  }
`;

const BillDetail = () => {
  const { store, dispatch } = useContext(Context);

  const onChangeDate = (date: Types.DateType) => {
    dispatch(updateState(date));
  };
  const userBills = httpApi.servers.getBillsByDate(
    {
      params: {
        month: `${store.year}-${store.month}`,
      },
    },
    { manual: true }
  );

  const reload = () => {
    userBills.run();
  };
  const updateBill = httpApi.servers.updateBill(undefined, { manual: true });
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
    if (response.success) reload();
  };

  useEffect(() => {
    reload();
  }, [store.year, store.month]);
  return (
    <Wrap>
      <Header
        onChangeDate={onChangeDate}
        date={{ year: store.year, month: store.month }}
        total={{
          totalIncome: store.billDetails?.totalIncome,
          totalOutlay: store.billDetails?.totalOutlay,
        }}
      />
      <div className='bill_details_container'>
        <PanelContainer>
          {(userBills.data?.data?.list || []).map(
            ({ time, income, outlay, data }, index) => {
              return (
                <Panel
                  key={index + time}
                  title={time}
                  more={
                    <Space>
                      <span>支出:{outlay}</span>
                      <span>收入:{income}</span>
                    </Space>
                  }
                >
                  {data.map(({ amount, payType, remark, id }) => {
                    return (
                      <SwipeAction
                        key={id}
                        right={[
                          <Button
                            {...{
                              key: 'delete',
                              size: 'lg',
                              shape: 'rect',
                              theme: 'danger',
                              onClick: () => onDelete(id),
                            }}
                          >
                            删除
                          </Button>,
                        ]}
                      >
                        <Cell
                          title={
                            <EditableRow
                              text={remark}
                              onSubmit={remark => {
                                onUpdateSubmit({ id, remark });
                                reload();
                              }}
                            />
                          }
                          description={
                            <EditableRow
                              text={amount}
                              payType={payType}
                              onSubmit={amount => {
                                onUpdateSubmit({ id, amount });
                                reload();
                              }}
                            />
                          }
                        />
                      </SwipeAction>
                    );
                  })}
                </Panel>
              );
            }
          )}
        </PanelContainer>
      </div>
    </Wrap>
  );
};

export default BillDetail;
