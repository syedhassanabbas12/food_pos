import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../common/loader/index.js';

const loading = () => <Loader show={true} />;

// Containers
const AdminLayout = Loadable({
  loader: () => import('./AdminLayout.js'),
  loading,
});
const UserLayout = Loadable({
  loader: () => import('./UserLayout.js'),
  loading,
});

function BaseLayout(props) {
  let Layout = UserLayout;

  const isAdmin = true; // get user role info from Login API
  if (isAdmin) Layout = AdminLayout;

  return (
    <div className='app'>
      <Layout {...props} />
    </div>
  );
}

export default BaseLayout;
