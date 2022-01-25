import React from 'react';
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants/app-constants';
const { ASSETS } = CONSTANTS;

const { Header } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

const AppHeader = () => {
  return (
    <Header>
      <Title level={2} className='app-title'>
        <Link to='/dashboard'>
          <img src={`./../../assets/${ASSETS.APP_LOGO}`} width={'35px'} />
        </Link>
      </Title>
      <Menu
        onClick={() => {
          console.log('Menu Click');
        }}
        theme='Light'
        mode='horizontal'
        style={{ lineHeight: '62px' }}
      >
        <SubMenu
          title={
            <span className='submenu-title-wrapper'>
              <Icon type={'setting'} />
              <strong className='xs-hidden' style={{ fontWeight: 'normal' }}>
                fahadlatif@folio3.com
              </strong>
            </span>
          }
        >
          <Menu.Item key='edit-profile'>
            <Link to='/editprofile'>
              <Icon type='edit' />
              <span className='nav-text'>Edit Profile</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='chage-password'>
            <Link to='/changepassword'>
              <Icon type='lock' />
              <span className='nav-text'>Change Password</span>
            </Link>
          </Menu.Item>
          <Menu.Item
            key='logout'
            onClick={() => {
              console.log('Pasc chnge');
            }}
          >
            <Icon type='logout' />
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default AppHeader;
