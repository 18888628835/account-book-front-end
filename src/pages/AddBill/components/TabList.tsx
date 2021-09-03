import React from 'react';
import { Panel, Tabs } from 'zarm';
import classNames from 'classnames';
import Svg from '@/components/svg/Svg';
import { incomeList, outlayList } from '../store';

type TabListPops = {
  onTabsChange: (i: any) => void;
  typeName: string;
  onChange: (obj: any) => void;
};
const TabList: React.FC<TabListPops> = props => {
  const { onTabsChange, typeName, onChange } = props;
  const classes = _selectKey => {
    return classNames('icon_wrap', {
      select_icon: typeName === _selectKey,
    });
  };
  return (
    <Tabs swipeable onChange={onTabsChange}>
      <Panel title='支出'>
        <div className='content'>
          <div className='container'>
            {outlayList.map(({ typeName, tagName }) => (
              <div
                key={typeName}
                className={classes(typeName)}
                onClick={() => onChange({ typeName })}
              >
                <Svg {...{ name: typeName, tagName, key: typeName }} />
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <Panel title='收入'>
        <div className='content'>
          <div className='container'>
            {incomeList.map(({ typeName, tagName }) => (
              <div
                key={tagName}
                className={classes(typeName)}
                onClick={() => onChange({ typeName })}
              >
                <Svg {...{ name: typeName, tagName, key: typeName }} />
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </Tabs>
  );
};

export default TabList;
