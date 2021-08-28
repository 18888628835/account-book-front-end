import React, { useEffect, useState } from 'react';
import { Space } from 'antd';
import styled from 'styled-components';
import { Cell, Panel, SwipeAction, Button, Pull } from 'zarm';
import httpApi from './service/server';
import EditableRow from './components/editableRow';
import Header from './components/header';
import PanelContainer from '@/components/PanelContainer';
import moment from 'moment';

const Wrap = styled.section`
  .bill_details_container {
    overflow: scroll;
    /* 去除滚动条 */
    max-height: calc(100vh - 66px - 94px);
  }
  .za-panel__header {
    padding-top: 7px;
  }
  .za-cell:after {
    border: none;
  }
  .za-panel__body:after {
    border-bottom: none;
  }
`;

const initialDate = {
  month: moment().format('MM'),
  year: moment().format('YYYY'),
};
export type DateType = typeof initialDate;

const BillDetail = () => {
  const [date, setDate] = useState(initialDate);
  const onChangeDate = (date: DateType) => {
    setDate(date);
  };
  const userBills = httpApi.servers.getBillsByDate(
    {
      params: {
        month: `${date.year}-${date.month}`,
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
  }, [date]);

  return (
    <Wrap>
      <Header
        onChangeDate={onChangeDate}
        date={date}
        total={{
          totalIncome: userBills.data?.data.totalIncome,
          totalOutlay: userBills.data?.data.totalOutlay,
        }}
      />
      <div className='bill_details_container'>
        <PanelContainer>
          {userBills.data?.data?.list.map(
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
