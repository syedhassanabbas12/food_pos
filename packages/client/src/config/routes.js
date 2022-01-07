import Login from '../components/login';
import ForgotPassword from '../components/forgotpassword';
import Dashboard from '../components/dashboard';

const Routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    requireAuthentication: false,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    requireAuthentication: true,
  },
  {
    name: 'Forgot Password',
    path: '/forgotpassword',
    component: ForgotPassword,
    requireAuthentication: false,
  },
];

export default Routes;
