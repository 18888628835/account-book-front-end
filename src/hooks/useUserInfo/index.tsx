import React from 'react';
import httpApi from './service/server';

const useUserInfo = () => {
  const userInfo = httpApi.servers.fetchUserInfo(undefined, { manual: true });
  const _updateUserInfo = httpApi.servers.updateUserInfo(undefined, {
    manual: true,
  });
  const fetchUserInfo = async () => {
    const response = await userInfo.run();
    return response;
  };
  const updateUserInfo = async data => {
    const response = _updateUserInfo.run({
      data: data,
    });
    return response;
  };
  return {
    userInfo,
    updateUserInfo,
    fetchUserInfo,
  };
};

export default useUserInfo;
