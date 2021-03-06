import React, { useState, useContext } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import Remark from './components/Remark';
import NumberPad from './components/NumberPad';
import httApi from './service/server';
import Wrap from './css';
import TabList from './components/TabList';
import useBillDetails from '@/hooks/useBillDetails/useBillDetails';
import { Context } from '@/App';
import { updateStore } from '@/store/action';
import { backgroundSoundPlay, SoundType } from '@/utils/backgroundSoundPlay';

const initialValue = {
  payType: 1, //1支出 2收入
  typeName: '', //icon 的 id
  remark: '', //备注
  amount: '0', //金额
  date: moment().format('YYYY-MM-DD'), //日期
};
type State = typeof initialValue;
type AddPageProps = React.HTMLAttributes<HTMLDivElement>;

const AddPage: React.FC<AddPageProps> = props => {
  const history = useHistory();
  const { store, dispatch } = useContext(Context);
  const addBill = httApi.servers.addBill(undefined, { manual: true });
  const { fetchBillDetails, fetchYearBill, fetchStatistics } = useBillDetails();

  const [formData, setFormData] = useState<State>(initialValue);

  const onChange: (obj: any) => void = obj => {
    setFormData(formData => {
      return { ...formData, ...obj };
    });
  };

  const onTabsChange = i => {
    // 1收入 2支出
    onChange({ payType: i + 1 });
  };
  const afterSuccess = response => {
    setFormData(initialValue);
    dispatch(updateStore({ addPageAppear: false }));
    history.push('/bill/details');
  };
  const onCloseAddPage = () => {
    backgroundSoundPlay(SoundType.POP);
    dispatch(updateStore({ addPageAppear: false }));
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
      const yearBill = await fetchYearBill(store.year);
      const statistics = await fetchStatistics();
      backgroundSoundPlay(SoundType.SUCCESS);
      dispatch(
        updateStore({
          monthBill: res.data,
          yearBill: yearBill.data,
          statistics: statistics.data,
        })
      );
      httApi.handleSuccess(response, '新增成功', afterSuccess);
    }
  };
  return (
    <Wrap className={props.className}>
      <div className='cancel' onClick={onCloseAddPage}>
        取消
      </div>
      <div className='tab_container'>
        <TabList {...{ onChange, onTabsChange, typeName: formData.typeName }} />
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
  );
};

export default AddPage;
