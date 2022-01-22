import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { removeItem } from "../../services/storage-service";
import APP_CONSTANTS from "../../constants/app-constants";

const { Header } = Layout;

const DefaultHeader = (props) => {
  const logout = () => {
    removeItem(APP_CONSTANTS.ACCESS_TOKEN);
    removeItem(APP_CONSTANTS.USER);
    location.reload();
  };

  const menu = (
    <Menu>
      <Menu.Item key="2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Profile Settings
        </a>
      </Menu.Item>
      <Menu.Item key="3" onClick={logout} danger>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Dropdown className="header-user" overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Admin User
          </a>
        </Dropdown>
      </Menu>
    </Header>
  );
};

export default DefaultHeader;
