import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Wrap from './css';
import httpApi from './service/server';
import Image from './components/image';
import LoginModal from './components/login_modal';
import BackgroundBubble from 'components/background_bubble';
import { Context } from '@/App';
import { paths } from '../router';
import { NoticeBar } from 'zarm';
const data = [
  '您好',
  '欢迎您',
  '这个',
  '项目',
  '叫',
  '呆呆',
  '记账本',
  'BY',
  '彦兮',
  '帆帆',
];
const defaultError = { error: false, helperText: '' };
const Login = () => {
  const history = useHistory();

  const [error, setsError] = useState(defaultError);
  const [flyState, setFlyState] = useState(false);
  const login = httpApi.servers.login(undefined, { manual: true });
  const validate = phone => {
    return new Promise((resolve, reject) => {
      if (!/^1\d{10}$/.test(phone) && phone !== 'test') {
        setsError({ error: true, helperText: '请输入11位手机号码' });
        reject(false);
        return;
      }
      setsError(defaultError);
      resolve(true);
    });
  };
  const loginSuccess = res => {
    localStorage.setItem('access_token', res.data.token);
    setFlyState(!flyState);
    const timer = setTimeout(() => {
      clearTimeout(timer);

      history.push(paths.BILL_DETAILS);
    }, 800);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const result = await validate(form.phone.value);
    if (result) {
      const res = await login.run({
        data: {
          phone: form.phone.value,
          password: form.password.value,
        },
      });
      httpApi.handleSuccess(res, res.msg, loginSuccess);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlyState(true);
      clearTimeout(timer);
    }, 500);
  }, []);

  return (
    <Wrap>
      <NoticeBar>
        请您使用手机浏览器预览。或者您可以通过F12开发者工具-手机模式预览
      </NoticeBar>
      <Image showData={flyState} />
      <LoginModal {...{ error, onSubmit }} />
      <BackgroundBubble data={data} />
    </Wrap>
  );
};

export default Login;
