import React from 'react';
import { Panel, Tabs } from 'zarm';
import classNames from 'classnames';
import Svg from '@/components/svg/Svg';
import { incomeList, outlayList } from '../store';

type TabListPops = {
  onTabsChange: (i: any) => void;
  selectKey: number;
  onChange: (obj: any) => void;
};
const TabList: React.FC<TabListPops> = props => {
  const { onTabsChange, selectKey, onChange } = props;
  const classes = _selectKey => {
    return classNames('icon_wrap', {
      select_icon: selectKey === _selectKey,
    });
  };
  return (
    <Tabs swipeable onChange={onTabsChange}>
      <Panel title='支出'>
        <div className='content'>
          <div className='container'>
            {outlayList.map(({ name, tagName, id }) => (
              <div
                className={classes(id)}
                onClick={() => onChange({ selectKey: id })}
              >
                <Svg {...{ name, tagName, key: name }} />
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <Panel title='收入'>
        <div className='content'>
          <div className='container'>
            {incomeList.map(({ name, tagName, id }) => (
              <div
                className={classes(id)}
                onClick={() => onChange({ selectKey: id })}
              >
                <Svg {...{ name, tagName, key: name }} />
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </Tabs>
  );
};

export default TabList;
