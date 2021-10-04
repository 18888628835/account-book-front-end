import PanelContainer from '@/components/PanelContainer';
import { Upload } from 'antd';
import useUserInfo from '@/hooks/useUserInfo/useUserInfo';
import React, { useState, useContext } from 'react';
import { NavBar, Cell, ActionSheet, Modal, Button } from 'zarm';
import { Avatar, TextField } from '@material-ui/core';
import { Context } from '@/App';
import { updateStore } from '@/store/action';
import useModal from '@/hooks/useModal/useModal';
import { LeftOutlined } from '@ant-design/icons';

const genderParamsMap = {
  男: true,
  女: false,
};

const EditUserInfo = () => {
  const { store, dispatch } = useContext(Context);
  const { updateUserInfo } = useUserInfo();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const { modalVisible, toggleModalVisible } = useModal();
  const [editedUserName, setEditedUserName] = useState('');

  const changeUserName = async newName => {
    await updateUserInfo({
      userName: newName,
    });
    dispatch(updateStore({ userName: newName }));
  };

  const changeGender = (gender, genderParams) => {
    return async () => {
      if (gender !== genderParams) {
        await updateUserInfo({ gender: genderParams });
        dispatch(updateStore({ gender: genderParams }));
      }
      onChangeActionSheetVisible();
    };
  };

  const onChangeModalVisible = () => {
    toggleModalVisible();
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
      dispatch(updateStore(data));
    }
  };
  return (
    <div>
      <NavBar
        left={<LeftOutlined onClick={() => window.history.back()} />}
        title='个人信息'
      ></NavBar>
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
                <Avatar src={store.avatar} alt='我'></Avatar>
              </Upload>
            </div>
          }
        />
        <Cell title='ID' description={store.id}></Cell>
        <Cell
          hasArrow
          title='昵称'
          description={store.userName}
          onClick={onChangeModalVisible}
        ></Cell>
        <Cell
          hasArrow
          onClick={onChangeActionSheetVisible}
          title='性别'
          description={<div>{store.gender ? '男' : '女'}</div>}
        ></Cell>
        <Cell title='手机号' description={store.phone}></Cell>
        <ActionSheet
          spacing
          visible={actionSheetVisible}
          onMaskClick={onChangeActionSheetVisible}
          onCancel={onChangeActionSheetVisible}
          actions={BUTTONS}
        ></ActionSheet>
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
            ></TextField>
          </div>
        </Modal>
      </PanelContainer>
    </div>
  );
};

export default EditUserInfo;
