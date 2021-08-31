import React from 'react';
import httpApi from './service/server';

const useUserInfo = () => {
  const userInfo = httpApi.servers.fetchUserInfo();
  const updateUserInfo = httpApi.servers.updateUserInfo(undefined, {
    manual: true,
  });
  const reloadUserInfo = async () => {
    await userInfo.run();
  };
  return {
    userInfo: userInfo.data?.data || {},
    updateUserInfo,
    reloadUserInfo,
  };
};

export default useUserInfo;
