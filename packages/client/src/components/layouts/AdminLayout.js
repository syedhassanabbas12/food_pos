import React, { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Layout } from "antd";

import Loader from "../common/loader";
import ROUTES from "../../constants/route-constants";

import "./style.scss";
import Routes from "../../config/routes";
import DefaultHeader from "./DefaultHeader";
import DefaultSidebar from "./DefaultSidebar";

const { Content } = Layout;

const AdminLayout = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const authenticatedRoutes = [
    ...Routes.filter((route) => route?.requireAuthentication),
  ];

  const loading = () => <Loader show={true} />;

  const toggleSideBar = () => {
    setSideBar((prev) => !prev);
  };

  const onSideBarClick = (route) => {
    props?.history?.push(route?.path);
  };

  return (
    <div className="app">
      <Layout>
        <DefaultHeader />
        <Layout>
          <DefaultSidebar
            sideBar={sideBar}
            onSideBarClick={onSideBarClick}
            toggleSideBar={toggleSideBar}
            authenticatedRoutes={authenticatedRoutes}
          />
          <Layout>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className={`app-body ${sideBar ? "open-sidebar" : ""}`}>
                <main className="main">
                  <Suspense fallback={loading()}>
                    {authenticatedRoutes && (
                      <Switch>
                        {authenticatedRoutes?.map((route, idx) => {
                          return route.component && route.isSideBar ? (
                            <Route
                              key={idx}
                              path={route.path}
                              exact={route.exact}
                              name={route.name}
                              render={(props) => (
                                <route.component
                                  {...props}
                                  breadCrumbs={route.breadCrumbs}
                                  title={route.name}
                                />
                              )}
                            />
                          ) : null;
                        })}
                        <Redirect from={ROUTES.ROOT} to={ROUTES.DASHBOARD} />
                      </Switch>
                    )}
                  </Suspense>
                </main>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
