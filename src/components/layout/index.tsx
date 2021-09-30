import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Svg from '../svg/Svg';
import Wrap from './_style';
import AddBill from '@/pages/AddBill';
import { Context } from '@/App';
import { updateStore } from '@/store/action';
import { backgroundSoundPlay, SoundType } from '@/utils/backgroundSoundPlay';

const Layout = props => {
  const { footConfig } = props;
  const { store, dispatch } = useContext(Context);
  const [active, setActive] = useState('');
  const addPageAppear = () => {
    backgroundSoundPlay(SoundType.POP);
    dispatch(updateStore({ addPageAppear: true }));
  };
  const classes = tagName =>
    classNames('animate__animated', {
      animate__rubberBand: active === tagName,
    });
  const onSoundClick = () => backgroundSoundPlay(SoundType.DU);

  return (
    <Wrap>
      <main className='main'>{props.children}</main>
      <section
        className='foot_container'
        style={{ backgroundColor: '#EDE3DB' }}
      >
        <div className='link_list'>
          {footConfig.map(([path, name]) => {
            return (
              <div
                key={path + name}
                className='link_wrap'
                onClick={() => setActive(name)}
              >
                <NavLink key={path} exact to={path} activeClassName='select'>
                  <div className={classes(name)} onClick={onSoundClick}>
                    <Svg {...{ name }} />
                  </div>
                </NavLink>
              </div>
            );
          })}
          <div className='link_wrap' onClick={addPageAppear}>
            <Svg {...{ name: 'icon-add' }} />
          </div>
        </div>
        <AddBill className={store.addPageAppear ? 'appear' : ''} />
      </section>
    </Wrap>
  );
};

export default Layout;
