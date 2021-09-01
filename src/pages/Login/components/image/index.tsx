import React from 'react';
import Transition from 'components/transition/Transition';
import fly from 'public/static/fly.png';

const index = props => {
  const { showData } = props;

  return (
    <div className='fly'>
      <Transition
        showData={showData}
        animation='TopIn-BottomOut'
        timeout={2000}
      >
        <img src={fly} alt='' />
      </Transition>
    </div>
  );
};

export default index;
