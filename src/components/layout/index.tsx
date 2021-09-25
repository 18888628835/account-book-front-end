import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Svg from '../svg/Svg';
import Wrap from './_style';

const Layout = props => {
  const { footConfig } = props;
  const [active, setActive] = useState('');

  const classes = tagName =>
    classNames('animate__animated', {
      animate__rubberBand: active === tagName,
    });
  return (
    <Wrap>
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
                  <div className={classes(name)}>
                    <Svg {...{ name }} />
                  </div>
                </NavLink>
              </div>
            );
          })}
          <div className='link_wrap'>
            <Svg {...{ name: 'icon-add' }} />
          </div>
        </div>
      </section>
    </Wrap>
  );
};

export default Layout;
