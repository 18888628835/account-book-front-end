import React, { useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import Remark from './components/Remark';
import NumberPad from './components/NumberPad';
import Wrap from './_style';
import TabList from './components/TabList';

const initialValue = {
  typeValue: 1,
  selectKey: -1,
  text: '',
  outPut: '0',
};
const AddPage = () => {
  const history = useHistory();
  const [formData, setFormData] = useState(initialValue);
  const onChange: (obj: any) => void = obj => {
    setFormData(formData => {
      return { ...formData, ...obj };
    });
  };

  const onCancel = () => {
    history.push('/bill/details');
  };
  const onTabsChange = i => {
    // 1收入 2支出
    onChange({ type: i + 1 });
  };

  const onOk = () => {
    const newState = {
      ...formData,
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    console.log(newState);

    setFormData(initialValue);
  };
  return (
    <Wrap>
      <div className='cancel' onClick={onCancel}>
        取消
      </div>
      <div className='tab_container'>
        <TabList
          {...{ onChange, onTabsChange, selectKey: formData.selectKey }}
        />
      </div>
      <div className='pad_container'>
        <Remark
          text={formData.text}
          onChange={text => {
            onChange({ text });
          }}
        />
        <NumberPad
          outPut={formData.outPut}
          onChange={(outPut: string) => {
            onChange({ outPut });
          }}
          onOk={onOk}
        />
      </div>
    </Wrap>
  );
};

export default AddPage;
