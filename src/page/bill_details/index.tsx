import React from 'react';
import styled from 'styled-components';
import { Cell, Panel, SwipeAction, Button } from 'zarm';
const Wrap = styled.section`
  overflow: scroll;
  max-height: calc(100vh - 66px);
`;
const BillDetail = () => {
  return (
    <Wrap>
      <Panel title='04-15' more={<span>更多</span>}>
        <SwipeAction
          right={[
            <Button
              size='lg'
              shape='rect'
              theme='danger'
              onClick={() => console.log('右按钮2')}
            >
              删除
            </Button>,
          ]}
        >
          <Cell
            style={{ border: 'none !important' }}
            title='标题文字'
            description='描述文字'
          />
        </SwipeAction>
        <SwipeAction
          right={[
            <Button
              size='lg'
              shape='rect'
              theme='danger'
              onClick={() => console.log('右按钮2')}
            >
              删除
            </Button>,
          ]}
        >
          <Cell
            style={{ border: 'none !important' }}
            title='标题文字'
            description='描述文字'
          />
        </SwipeAction>
        <SwipeAction
          right={[
            <Button
              size='lg'
              shape='rect'
              theme='danger'
              onClick={() => console.log('右按钮2')}
            >
              删除
            </Button>,
          ]}
        >
          <Cell
            style={{ border: 'none !important' }}
            title='标题文字'
            description='描述文字'
          />
        </SwipeAction>
      </Panel>
    </Wrap>
  );
};

export default BillDetail;
