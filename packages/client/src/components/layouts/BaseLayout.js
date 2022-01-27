import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from 'antd';

import Loader from '../common/custom-component/loader';
import ROUTES from '../../constants/route-constants';

import { Routes } from '../../config/routes';
import AppHeader from './../common/another-component/Header';
import Sider from './../common/another-component/Sider';
import AppFooter from './../common/another-component/Footer';

const { Content } = Layout;

const BaseLayout = () => {
  const authenticatedRoutes = [
    ...Routes.filter((route) => route?.requireAuthentication),
  ];

  return (
    <Layout className='main-layout-wrap' hasSider={true}>
      <Sider authenticatedRoutes={authenticatedRoutes} />
      <Layout style={{ backgroundColor: 'white', height: '100vh' }}>
        <AppHeader />

        <Content className='contentMain'>
          <Suspense fallback={<Loader />}>
            {authenticatedRoutes && (
              <Switch>
                {authenticatedRoutes?.map((route, idx) => {
                  return route.component && route.path !== ROUTES.ROOT ? (
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
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default BaseLayout;
