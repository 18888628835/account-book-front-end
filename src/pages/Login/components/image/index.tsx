/*
 * @Author: 邱彦兮
 * @Date: 2021-10-04 22:44:42
 * @LastEditors: 邱彦兮
 * @LastEditTime: 2022-02-02 19:01:06
 * @FilePath: /account-book-front-end/src/pages/Login/components/image/index.tsx
 */
import React from 'react';
import Transition from 'components/transition/Transition';
import fly from 'public/static/fly.png';

const index = props => {
  const { showData } = props;

  return (
    <div className='fly'>
      <Transition
        showData={showData}
        animation='BottomIn-TopOut'
        timeout={2000}
      >
        <img src={fly} alt='' />
      </Transition>
    </div>
  );
};

export default index;
