import React, { useState } from 'react';
import { Menu, Layout, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { SiderList } from './../../../../config/routes';
import APP_CONSTANTS from '../../../../constants/app-constants';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  const [isCollpase, setIsCollapsed] = useState(false);
  const toggleSider = () => {
    if (window.innerWidth <= APP_CONSTANTS.MOBILE_WIDTH)
      setIsCollapsed((val) => !val);
  };

  return (
    <Sider
      onCollapse={toggleSider}
      collapsed={isCollpase}
      defaultCollapsed={isCollpase}
      breakpoint='lg'
      collapsedWidth='0'
      width='220'
      style={{
        height: '100vh',
        left: 0,
      }}
    >
      <div className='logo' />
      <Menu theme='dark' defaultSelectedKeys={['0']} mode='inline'>
        {SiderList?.map((sider, idx) => {
          if (sider?.subMenus) {
            return (
              <SubMenu
                key={sider.key}
                title={
                  <>
                    <Icon type={sider.icon} />
                    <span className={'nav-text'}>{sider.text}</span>
                  </>
                }
              >
                {sider.subMenus.map((subMenu, subIdx) => {
                  return (
                    <Menu.Item key={subMenu.key}>
                      <Link key={subIdx} to={subMenu.to} onClick={toggleSider}>
                        <Icon type={subMenu.icon} />
                        <span className={'nav-text'}>{subMenu.text}</span>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={sider.key}>
                <Link key={idx} to={sider.to} onClick={toggleSider}>
                  <Icon type={sider.icon} />
                  <span className={'nav-text'}>{sider.text}</span>
                </Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;
