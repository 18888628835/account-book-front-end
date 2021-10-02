import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
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
  const location = useLocation();
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
    <Wrap
      {...{
        backgroundColor:
          location.pathname === '/homepage'
            ? '#EDE3DB'
            : location.pathname === '/bill/charts'
            ? '#545967'
            : 'var(--vice-bg-color)',
      }}
    >
      <main className='main'>{props.children}</main>
      <section className='foot_container'>
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
