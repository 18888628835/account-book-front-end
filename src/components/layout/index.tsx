import React, { useState } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import Svg from '../svg/Svg';
import Wrap from './_style';
import { paths } from '@/pages/router';

const Layout = props => {
  const { footConfig } = props;
  const [active, setActive] = useState('');
  const history = useHistory();

  const goAddPage = () => {
    history.push(paths.ADD_BILL);
  };
  const classes = tagName =>
    classNames('animate__animated', {
      animate__rubberBand: active === tagName,
    });
  return (
    <Wrap>
      <main className='main'>{props.children}</main>
      <section className='link_list'>
        <div className='add' onClick={goAddPage}>
          <EditOutlined />
        </div>
        {footConfig.map(([path, name, tagName]) => {
          return (
            <div
              key={path + name}
              className='link_wrap'
              onClick={() => setActive(tagName)}
            >
              <NavLink key={path} exact to={path} activeClassName='select'>
                <div className={classes(tagName)}>
                  <Svg {...{ name, tagName }} />
                </div>
              </NavLink>
            </div>
          );
        })}
      </section>
    </Wrap>
  );
};

export default Layout;
