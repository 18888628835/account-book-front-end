import React, { useState, useContext } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import Remark from './components/Remark';
import NumberPad from './components/NumberPad';
import httApi from './service/server';
import Wrap from './css';
import TabList from './components/TabList';
import PanelContainer from '@/components/PanelContainer';
import { paths } from '../router';
import useBillDetails from '@/hooks/useBillDetails';
import { Store } from '@material-ui/icons';
import { Context } from '@/App';
import { updateStore } from '@/store/action';

const initialValue = {
  payType: 1, //1支出 2收入
  typeName: '', //icon 的 id
  remark: '', //备注
  amount: '0', //金额
  date: moment().format('YYYY-MM-DD'), //日期
};
type State = typeof initialValue;
const AddPage = () => {
  const history = useHistory();
  const { store, dispatch } = useContext(Context);
  const addBill = httApi.servers.addBill(undefined, { manual: true });
  const { fetchBillDetails } = useBillDetails();
  const [formData, setFormData] = useState<State>(initialValue);

  const onChange: (obj: any) => void = obj => {
    setFormData(formData => {
      return { ...formData, ...obj };
    });
  };

  const toBillDetails = () => {
    history.push(paths.BILL_DETAILS);
  };
  const onTabsChange = i => {
    // 1收入 2支出
    onChange({ payType: i + 1 });
  };
  const afterSuccess = response => {
    httApi.handleSuccess(response, '新增成功', res => {
      toBillDetails();
      setFormData(initialValue);
    });
  };
  const onOk = async () => {
    const newState = {
      ...formData,
    };
    const response = await addBill.run({
      data: { ...newState },
    });

    if (response.success) {
      // 获取最新 store 并更新
      const res = await fetchBillDetails({
        month: store.month,
        year: store.year,
      });
      dispatch(updateStore({ ...res.data }));
      httApi.handleSuccess(response, '新增成功', afterSuccess);
    }
  };
  return (
    <PanelContainer>
      <Wrap>
        <div className='cancel' onClick={toBillDetails}>
          取消
        </div>
        <div className='tab_container'>
          <TabList
            {...{ onChange, onTabsChange, typeName: formData.typeName }}
          />
        </div>
        <div className='pad_container'>
          <Remark
            remark={formData.remark}
            onChange={remark => {
              onChange({ remark });
            }}
          />
          <NumberPad
            date={formData.date}
            amount={formData.amount}
            onChange={onChange}
            onOk={onOk}
          />
        </div>
      </Wrap>
    </PanelContainer>
  );
};

export default AddPage;
