import PanelContainer from '@/components/PanelContainer';
import { Upload } from 'antd';
import useUserInfo from '@/hooks/use_userInfo';
import React, { useState } from 'react';
import { Icon, NavBar, Cell, ActionSheet, Modal, Button } from 'zarm';
import { Avatar, TextField } from '@material-ui/core';

const genderParamsMap = {
  男: true,
  女: false,
};
const EditUserInfo = () => {
  const { userInfo, updateUserInfo, reloadUserInfo } = useUserInfo();
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedUserName, setEditedUserName] = useState('');

  const changeUserName = async newName => {
    await updateUserInfo.run({
      data: {
        userName: newName,
      },
    });
  };
  const changeGender = (gender, genderParams) => {
    return async () => {
      if (gender !== genderParams) {
        await updateUserInfo.run({ data: { gender: genderParams } });
        await reloadUserInfo();
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
      onClick: changeGender(userInfo.gender, genderParamsMap['男']),
    },
    {
      text: '女',
      onClick: changeGender(userInfo.gender, genderParamsMap['女']),
    },
  ];

  const onChange = async info => {
    if (info.file.status === 'done') {
      const data = {
        avatar: info.file.response.data.url,
      };
      await updateUserInfo.run({
        data,
      });
      await reloadUserInfo();
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
                <Avatar src={userInfo.avatar} alt='我' />
              </Upload>
            </div>
          }
        />
        <Cell title='ID' description={userInfo.id} />
        <Cell
          hasArrow
          title='昵称'
          description={userInfo.userName}
          onClick={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <Cell
          hasArrow
          onClick={onChangeActionSheetVisible}
          title='性别'
          description={<div>{userInfo.gender ? '男' : '女'}</div>}
        />
        <Cell title='手机号' description={userInfo.phone} />
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
                await reloadUserInfo();
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
