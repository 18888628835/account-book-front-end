import Svg from '@/components/svg/Svg';
import { Space } from 'antd';
import React from 'react';
import { Panel, SwipeAction, Button, Cell } from 'zarm';
import EditableRow from '../editableRow';

const CellContent = props => {
  const { data, onDelete, onUpdateSubmit, reload } = props;
  return (
    <div>
      {(data || []).map(({ time, income, outlay, data }, index) => {
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
            {data.map(({ amount, payType, remark, id, typeName }) => {
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
                      <div className='icon_remark_wrap'>
                        <Svg name={typeName} />
                        <EditableRow
                          text={remark}
                          onSubmit={remark => {
                            onUpdateSubmit({ id, remark });
                            reload();
                          }}
                        />
                      </div>
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
      })}
    </div>
  );
};

export default CellContent;
