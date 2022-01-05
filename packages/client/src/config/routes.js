import Login from "../components/login";
import Dashboard from "../components/dashboard";

const Routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
    requireAuthentication: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    requireAuthentication: true,
  },
];

export default Routes;
