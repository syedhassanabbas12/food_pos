import Login from '../components/login';
import ForgotPassword from '../components/forgotpassword';
import ResetPassword from '../components/resetPassword';
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
import EditProfile from '../components/editProfile';
import ListCustomers from '../components/listCustomers';
import ListExpenses from '../components/listExpenses';
import ListInventoryAdjustments from '../components/listInventoryAdjustments';
import ListInvoices from '../components/listInvoices';
import ListProducts from '../components/listProducts';
import ListUsers from '../components/listusers';
import ListVendors from '../components/listVendors';
import ListVendorBills from '../components/listVendorBills';
import SummaryReport from '../components/summaryReport';
import BaseLayout from '../components/layouts';
import ROUTES from '../constants/route-constants';
import ListBranches from '../components/listBranches';
import AddBranch from '../components/addBranch';
import AddDepartment from '../components/addDepartment';
import ListDepartments from '../components/listDepartments';
import ListDesignations from '../components/listDesignations';
import AddDesignation from '../components/addDesignation';
import AddInventoryTransfer from '../components/addInventoryTransfer';
import ListInventoryTransfers from '../components/listInventoryTransfers';
import AddUnit from '../components/addUnit';
import ListUnits from '../components/listUnits';

const Routes = [
  {
    name: 'Login',
    path: ROUTES.LOGIN,
    component: Login,
    requireAuthentication: false,
  },
  {
    name: 'Forgot Password',
    path: ROUTES.FORGOT_PASSWORD,
    component: ForgotPassword,
    requireAuthentication: false,
  },
  {
    name: 'Reset Password',
    path: ROUTES.RESET_PASSWORD,
    component: ResetPassword,
    requireAuthentication: false,
  },
  {
    name: 'Home',
    path: ROUTES.ROOT,
    component: BaseLayout,
    requireAuthentication: true,
  },
  {
    name: 'Dashboard',
    path: ROUTES.DASHBOARD,
    component: Dashboard,
    requireAuthentication: true,
  },
  {
    name: 'Add User',
    path: ROUTES.ADD_USER,
    component: AddUser,
    requireAuthentication: true,
  },
  {
    name: 'Add Customer',
    path: ROUTES.ADD_CUSTOMER,
    component: AddCustomer,
    requireAuthentication: true,
  },
  {
    name: 'Add Invoice',
    path: ROUTES.ADD_INVOICE,
    component: AddInvoice,
    requireAuthentication: true,
  },
  {
    name: 'Add Expense',
    path: ROUTES.ADD_EXPENSE,
    component: AddExpense,
    requireAuthentication: true,
  },
  {
    name: 'Add Inventory Adjustment',
    path: ROUTES.ADD_INVENTORY_ADJUSTMENT,
    component: AddInventoryAdjustment,
    requireAuthentication: true,
  },
  {
    name: 'Add Inventory Transfer',
    path: ROUTES.ADD_INVENTORY_TRANSFER,
    component: AddInventoryTransfer,
    requireAuthentication: true,
  },
  {
    name: 'Add Product',
    path: ROUTES.ADD_PRODUCT,
    component: AddProduct,
    requireAuthentication: true,
  },
  {
    name: 'Add Branch',
    path: ROUTES.ADD_BRANCH,
    component: AddBranch,
    requireAuthentication: true,
  },
  {
    name: 'Add Designation',
    path: ROUTES.ADD_DESIGNATION,
    component: AddDesignation,
    requireAuthentication: true,
  },
  {
    name: 'Add Department',
    path: ROUTES.ADD_DEPARTMENT,
    component: AddDepartment,
    requireAuthentication: true,
  },
  {
    name: 'Add Unit',
    path: ROUTES.ADD_UNIT,
    component: AddUnit,
    requireAuthentication: true,
  },
  {
    name: 'Add Vendor',
    path: ROUTES.ADD_VENDOR,
    component: AddVendor,
    requireAuthentication: true,
  },
  {
    name: 'Add Vendor Bill',
    path: ROUTES.ADD_VENDOR_BILL,
    component: AddVendorBill,
    requireAuthentication: true,
  },
  {
    name: 'Change Password',
    path: ROUTES.CHANGE_PASSWORD,
    component: ChangePasswrord,
    requireAuthentication: true,
  },
  {
    name: 'Edit Profile',
    path: ROUTES.EDIT_PROFILE,
    component: EditProfile,
    requireAuthentication: true,
  },
  {
    name: 'List Customers',
    path: ROUTES.LIST_CUSTOMERS,
    component: ListCustomers,
    requireAuthentication: true,
  },
  {
    name: 'List Vendors',
    path: ROUTES.LIST_VENDORS,
    component: ListVendors,
    requireAuthentication: true,
  },
  {
    name: 'List User',
    path: ROUTES.LIST_USER,
    component: ListUsers,
    requireAuthentication: true,
  },
  {
    name: 'List Products',
    path: ROUTES.LIST_PRODUCT,
    component: ListProducts,
    requireAuthentication: true,
  },
  {
    name: 'List Invoices',
    path: ROUTES.LIST_INVOICES,
    component: ListInvoices,
    requireAuthentication: true,
  },
  {
    name: 'List Branches',
    path: ROUTES.LIST_BRANCHES,
    component: ListBranches,
    requireAuthentication: true,
  },
  {
    name: 'List Designations',
    path: ROUTES.LIST_DESIGNATIONS,
    component: ListDesignations,
    requireAuthentication: true,
  },
  {
    name: 'List Departments',
    path: ROUTES.LIST_DEPARTMENTS,
    component: ListDepartments,
    requireAuthentication: true,
  },
  {
    name: 'List Units',
    path: ROUTES.LIST_UNITS,
    component: ListUnits,
    requireAuthentication: true,
  },
  {
    name: 'List Vendor Bills',
    path: ROUTES.LIST_VENDOR_BILLS,
    component: ListVendorBills,
    requireAuthentication: true,
  },
  {
    name: 'List Expenses',
    path: ROUTES.LIST_EXPENSES,
    component: ListExpenses,
    requireAuthentication: true,
  },
  {
    name: 'List Inventory Transfers',
    path: ROUTES.LIST_INVENTORY_TRANSFERS,
    component: ListInventoryTransfers,
    requireAuthentication: true,
  },
  {
    name: 'List Inventory Adjustments',
    path: ROUTES.LIST_INVENTORY_ADJUSTMENTS,
    component: ListInventoryAdjustments,
    requireAuthentication: true,
  },
  {
    name: 'Summary Report',
    path: ROUTES.SUMMARY_REPORT,
    component: SummaryReport,
    requireAuthentication: true,
  },
];

const SiderList = [
  {
    key: 'dashboard',
    text: 'Dashboard',
    to: ROUTES.DASHBOARD,
    icon: 'dashboard',
  },
  {
    key: 'list-customers',
    text: 'Customers',
    to: ROUTES.LIST_CUSTOMERS,
    icon: 'user',
  },
  {
    key: 'list-vendors',
    text: 'Vendors',
    to: ROUTES.LIST_VENDORS,
    icon: 'man',
  },
  {
    key: 'list-users',
    text: 'Users',
    to: ROUTES.LIST_USER,
    icon: 'smile-o',
  },
  {
    key: 'list-products',
    text: 'Products',
    to: ROUTES.LIST_PRODUCT,
    icon: 'tag',
  },
  {
    key: 'list-invoices',
    text: 'Invoices',
    to: ROUTES.LIST_INVOICES,
    icon: 'solution',
  },
  {
    key: 'list-vendor-bills',
    text: 'Bills',
    to: ROUTES.LIST_VENDOR_BILLS,
    icon: 'database',
  },
  {
    key: 'list-expenses',
    text: 'Expenses',
    to: ROUTES.LIST_EXPENSES,
    icon: 'exception',
  },
  {
    key: 'adjust-inventoty',
    text: 'Adjust Inventory',
    to: ROUTES.LIST_INVENTORY_ADJUSTMENTS,
    icon: 'calculator',
  },
  {
    key: 'inventoty-transfer',
    text: 'Transfer Inventory',
    to: ROUTES.LIST_INVENTORY_TRANSFERS,
    icon: 'shopping-cart',
  },
  {
    key: 'list-branches',
    text: 'Branches',
    to: ROUTES.LIST_BRANCHES,
    icon: 'project',
  },
  {
    key: 'list-departments',
    text: 'Departments',
    to: ROUTES.LIST_DEPARTMENTS,
    icon: 'key',
  },
  {
    key: 'list-designations',
    text: 'Designations',
    to: ROUTES.LIST_DESIGNATIONS,
    icon: 'appstore',
  },
  {
    key: 'list-units',
    text: 'Units',
    to: ROUTES.LIST_UNITS,
    icon: 'number',
  },
  {
    key: 'summary-report',
    text: 'Summary Report',
    to: ROUTES.SUMMARY_REPORT,
    icon: 'bar-chart',
  },
];

export { Routes, SiderList };
