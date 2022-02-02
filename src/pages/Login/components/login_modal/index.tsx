/*
 * @Author: 邱彦兮
 * @Date: 2021-10-04 22:44:42
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-02-02 19:18:10
 * @FilePath: /account-book-front-end/src/pages/Login/components/login_modal/index.tsx
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const index = props => {
  const { onSubmit, error } = props;
  return (
    <section>
      <h2 className='title'>WELCOME</h2>
      <section className='login_container'>
        <form className='form_container' onSubmit={onSubmit}>
          <div className='input_wrap'>
            <TextField
              required
              autoComplete='off'
              name='phone'
              error={error.error}
              label='Phone'
              defaultValue='test'
              helperText={error.helperText}
            />
          </div>
          <div className='input_wrap'>
            <TextField
              required
              name='password'
              label='Password'
              type='password'
              defaultValue='123456'
            />
          </div>
          <div className='button'>
            <Button
              size='large'
              variant='outlined'
              endIcon={<SendIcon />}
              type='submit'
            >
              登陆/注册
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default index;
