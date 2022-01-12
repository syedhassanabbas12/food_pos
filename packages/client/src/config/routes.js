import Login from '../components/login';
import ForgotPassword from '../components/forgotpassword';
import Dashboard from '../components/dashboard';
import AddUser from '../components/adduser';
import AddCustomer from '../components/addCustomer';
import AddExpense from '../components/addExpense';
import AddInvoice from '../components/addInvoice';
import AddInventoryAdjustment from '../components/addInventoryAdjustment';
import AddProduct from '../components/addProduct';
import AddVendor from '../components/addVendor';
import AddVendorBill from '../components/addVendorBill';
import ChangePasswrord from '../components/changePassword';
import ListCustomers from '../components/listCustomers';
import ListExpenses from '../components/listExpenses';
import ListInventoryAdjustments from '../components/listInventoryAdjustments';
import ListInvoices from '../components/listInvoices';
import ListProducts from '../components/listProducts';
import ListUsers from '../components/listusers';
import ListVendors from '../components/listVendors';
import ListVendorBills from '../components/listVendorBills';
import SummaryReport from '../components/summaryReport';

const Routes = [
  {
    name: 'Login',
    path: '/login',
    component: Login,
    requireAuthentication: false,
  },
  {
    name: 'Forgot Password',
    path: '/forgotpassword',
    component: ForgotPassword,
    requireAuthentication: false,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: Dashboard,
    requireAuthentication: true,
  },
  {
    name: 'Add User',
    path: '/adduser',
    component: AddUser,
    requireAuthentication: true,
  },
  {
    name: 'List Customer',
    path: '/listcustomer',
    component: AddCustomer,
    requireAuthentication: true,
  },
  {
    name: 'Add Invoice',
    path: '/addinvoice',
    component: AddInvoice,
    requireAuthentication: true,
  },
  {
    name: 'Add Expense',
    path: '/addexpense',
    component: AddExpense,
    requireAuthentication: true,
  },
  {
    name: 'Add Inventory Adjustment',
    path: '/addinventoryadjustment',
    component: AddInventoryAdjustment,
    requireAuthentication: true,
  },
  {
    name: 'Add Product',
    path: '/addproduct',
    component: AddProduct,
    requireAuthentication: true,
  },
  {
    name: 'Add Vendor',
    path: '/addvendor',
    component: AddVendor,
    requireAuthentication: true,
  },
  {
    name: 'Add Vendor Bill',
    path: '/addvendorbill',
    component: AddVendorBill,
    requireAuthentication: true,
  },
  {
    name: 'Change Password',
    path: '/changepassword',
    component: ChangePasswrord,
    requireAuthentication: true,
  },
  {
    name: 'List Customers',
    path: '/listcustomers',
    component: ListCustomers,
    requireAuthentication: true,
  },
  {
    name: 'List Expenses',
    path: '/listexpenses',
    component: ListExpenses,
    requireAuthentication: true,
  },
  {
    name: 'List Inventory Adjustments',
    path: '/listinventoryadjustments',
    component: ListInventoryAdjustments,
    requireAuthentication: true,
  },
  {
    name: 'List Invoices',
    path: '/listinvoices',
    component: ListInvoices,
    requireAuthentication: true,
  },
  {
    name: 'List Products',
    path: '/listproducts',
    component: ListProducts,
    requireAuthentication: true,
  },
  {
    name: 'List User',
    path: '/listuser',
    component: ListUsers,
    requireAuthentication: true,
  },
  {
    name: 'List Vendor Bills',
    path: '/listvendorbills',
    component: ListVendorBills,
    requireAuthentication: true,
  },
  {
    name: 'List Vendors',
    path: '/listvendors',
    component: ListVendors,
    requireAuthentication: true,
  },
  {
    name: 'Summary Report',
    path: '/summaryreport',
    component: SummaryReport,
    requireAuthentication: true,
  },
];

export default Routes;
