import React from "react";
import { Menu, Layout } from "antd";
import { PieChartOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const DefaultSidebar = (props) => {
  const { sideBar, toggleSideBar, onSideBarClick, authenticatedRoutes } = props;

  return (
    <Sider
      className="sidebar"
      collapsible
      collapsed={!sideBar}
      onCollapse={toggleSideBar}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {authenticatedRoutes?.map((route, idx) => {
          return route?.isSideBar ? (
            <Menu.Item
              onClick={() => onSideBarClick(route)}
              key={idx}
              icon={<PieChartOutlined />}
            >
              {route?.name}
            </Menu.Item>
          ) : null;
        })}
      </Menu>
    </Sider>
  );
};

export default DefaultSidebar;
