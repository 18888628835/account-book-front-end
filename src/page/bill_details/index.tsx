import React from 'react';
import { Space } from 'antd';
import styled from 'styled-components';
import { Cell, Panel, SwipeAction, Button } from 'zarm';
import httpApi from './service/server';
import EditableRow from './components/editableRow';

const Wrap = styled.section`
  overflow: scroll;
  /* 去除滚动条 */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  max-height: calc(100vh - 66px);
`;

const BillDetail = () => {
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const userBills = httpApi.servers.getBillsByDate({
    params: {
      month: `${year}-${month}`,
    },
  });
  const reload = () => {
    userBills.run();
  };
  const updateBill = httpApi.servers.updateBill(undefined, { manual: true });
  const onUpdateSubmit = obj => {
    updateBill.run({
      data: {
        ...obj,
      },
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
  return (
    <Wrap>
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
    </Wrap>
  );
};

export default BillDetail;
