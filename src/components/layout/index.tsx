import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';
import Svg from '../svg/Svg';
import Wrap from './_style';

const Layout = props => {
  const { footConfig } = props;
  const history = useHistory();

  const goAddPage = () => {
    history.push('/bill/add');
  };
  return (
    <Wrap>
      <main className='main'>{props.children}</main>
      <section className='link_list'>
        <div className='add' onClick={goAddPage}>
          <EditOutlined />
        </div>
        {footConfig.map(([path, name, tagName]) => {
          return (
            <div key={path + name} className='link_wrap'>
              <NavLink key={path} exact to={path} activeClassName='select'>
                <Svg {...{ name, tagName }} />
              </NavLink>
            </div>
          );
        })}
      </section>
    </Wrap>
  );
};

export default Layout;
