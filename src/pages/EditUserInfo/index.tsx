import PanelContainer from '@/components/PanelContainer';
import { Upload } from 'antd';
import useUserInfo from '@/hooks/useUserInfo';
import React, { useState, useContext } from 'react';
import { Icon, NavBar, Cell, ActionSheet, Modal, Button } from 'zarm';
import { Avatar, TextField } from '@material-ui/core';
import { Context } from '@/App';
import { updateState } from '@/store/action';

const genderParamsMap = {
  男: true,
  女: false,
};
const EditUserInfo = () => {
  const { store, dispatch } = useContext(Context);
  const { updateUserInfo } = useUserInfo();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedUserName, setEditedUserName] = useState('');

  const changeUserName = async newName => {
    await updateUserInfo({
      userName: newName,
    });
    dispatch(updateState({ userName: newName }));
  };
  const changeGender = (gender, genderParams) => {
    return async () => {
      if (gender !== genderParams) {
        await updateUserInfo({ gender: genderParams });
        dispatch(updateState({ gender: genderParams }));
      }
      onChangeActionSheetVisible();
    };
  };

  const onChangeModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  const onChangeActionSheetVisible = () => {
    setActionSheetVisible(!actionSheetVisible);
  };
  const BUTTONS = [
    {
      text: '男',
      onClick: changeGender(store.gender, genderParamsMap['男']),
    },
    {
      text: '女',
      onClick: changeGender(store.gender, genderParamsMap['女']),
    },
  ];

  const onChange = async info => {
    if (info.file.status === 'done') {
      const data = {
        avatar: info.file.response.data.url,
      };
      await updateUserInfo(data);
      dispatch(updateState(data));
    }
  };
  return (
    <div>
      <NavBar
        left={<Icon type='arrow-left' onClick={() => window.history.back()} />}
        title='个人信息'
      />
      <PanelContainer>
        <Cell
          title='头像'
          description={
            <div className='upload' style={{ height: '100%' }}>
              <Upload
                method='POST'
                name='file'
                action='/api/user/uploadFiles'
                showUploadList={false}
                onChange={onChange}
              >
                <Avatar src={store.avatar} alt='我' />
              </Upload>
            </div>
          }
        />
        <Cell title='ID' description={store.id} />
        <Cell
          hasArrow
          title='昵称'
          description={store.userName}
          onClick={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <Cell
          hasArrow
          onClick={onChangeActionSheetVisible}
          title='性别'
          description={<div>{store.gender ? '男' : '女'}</div>}
        />
        <Cell title='手机号' description={store.phone} />
        <ActionSheet
          spacing
          visible={actionSheetVisible}
          onMaskClick={onChangeActionSheetVisible}
          onCancel={onChangeActionSheetVisible}
          actions={BUTTONS}
        />
        <Modal
          title='修改昵称'
          closable
          onCancel={() => {
            onChangeModalVisible();
            setEditedUserName('');
          }}
          visible={modalVisible}
          footer={
            <Button
              block
              theme='primary'
              onClick={async () => {
                await changeUserName(editedUserName);

                onChangeModalVisible();
                setEditedUserName('');
              }}
            >
              确认
            </Button>
          }
        >
          <div>
            <TextField
              fullWidth
              value={editedUserName}
              onChange={e => {
                setEditedUserName(e.target.value);
              }}
              id='standard-basic'
              label='请输入昵称'
              autoComplete='off'
            />
          </div>
        </Modal>
      </PanelContainer>
    </div>
  );
};

export default EditUserInfo;
