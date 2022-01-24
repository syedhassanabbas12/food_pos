import React from 'react';
import { Menu, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { SiderList } from '../../config/routes';
const { Sider } = Layout;

const SideBar = () => {
  return (
    <Sider breakpoint='lg' collapsedWidth='0' width='220'>
      <div className='logo' />
      <Menu theme='dark' defaultSelectedKeys={['0']} mode='inline'>
        {SiderList?.map((sider, idx) => {
          return (
            <Menu.Item key={sider.key}>
              <Link key={idx} to={sider.to}>
                <Icon type={sider.icon} />
                <span className={'nav-text'}>{sider.text}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;
