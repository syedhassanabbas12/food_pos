import Login from "../components/login";
import ForgotPassword from "../components/forgotpassword";
import Dashboard from "../components/dashboard";
import AddUser from "../components/adduser";
import AddCustomer from "../components/addCustomer";
import AddExpense from "../components/addExpense";
import AddInvoice from "../components/addInvoice";
import AddInventoryAdjustment from "../components/addInventoryAdjustment";
import AddProduct from "../components/addProduct";
import AddVendor from "../components/addVendor";
import AddVendorBill from "../components/addVendorBill";
import ChangePasswrord from "../components/changePassword";
import ListCustomers from "../components/listCustomers";
import ListExpenses from "../components/listExpenses";
import ListInventoryAdjustments from "../components/listInventoryAdjustments";
import ListInvoices from "../components/listInvoices";
import ListProducts from "../components/listProducts";
import ListUsers from "../components/listusers";
import ListVendors from "../components/listVendors";
import ListVendorBills from "../components/listVendorBills";
import SummaryReport from "../components/summaryReport";
import BaseLayout from "../components/layouts";
import ROUTES from "../constants/route-constants";

const Routes = [
  {
    name: "Login",
    path: ROUTES.LOGIN,
    component: Login,
    requireAuthentication: false,
    isSideBar: false,
  },
  {
    name: "Forgot Password",
    path: ROUTES.FORGOT_PASSWORD,
    component: ForgotPassword,
    requireAuthentication: false,
    isSideBar: false,
  },
  {
    name: "Home",
    path: ROUTES.ROOT,
    component: BaseLayout,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Dashboard",
    path: ROUTES.DASHBOARD,
    component: Dashboard,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "Add User",
    path: ROUTES.ADD_USER,
    component: AddUser,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "List Customer",
    path: ROUTES.LIST_CUSTOMER,
    component: AddCustomer,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "Add Invoice",
    path: ROUTES.ADD_INVOICE,
    component: AddInvoice,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Add Expense",
    path: ROUTES.ADD_EXPENSE,
    component: AddExpense,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Add Inventory Adjustment",
    path: ROUTES.ADD_INVENTORY_ADJUSTMENT,
    component: AddInventoryAdjustment,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Add Product",
    path: ROUTES.ADD_PRODUCT,
    component: AddProduct,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Add Vendor",
    path: ROUTES.ADD_VENDOR,
    component: AddVendor,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Add Vendor Bill",
    path: ROUTES.ADD_VENDOR_BILL,
    component: AddVendorBill,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "Change Password",
    path: ROUTES.CHANGE_PASSWORD,
    component: ChangePasswrord,
    requireAuthentication: true,
    isSideBar: false,
  },
  {
    name: "List Customers",
    path: ROUTES.LIST_CUSTOMERS,
    component: ListCustomers,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List Expenses",
    path: ROUTES.LIST_EXPENSES,
    component: ListExpenses,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List Inventory Adjustments",
    path: ROUTES.LIST_INVENTORY_ADJUSTMENTS,
    component: ListInventoryAdjustments,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List Invoices",
    path: ROUTES.LIST_INVOICES,
    component: ListInvoices,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List Products",
    path: ROUTES.LIST_PRODUCT,
    component: ListProducts,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List User",
    path: ROUTES.LIST_USER,
    component: ListUsers,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List Vendor Bills",
    path: ROUTES.LIST_VENDOR_BILLS,
    component: ListVendorBills,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "List Vendors",
    path: ROUTES.LIST_VENDORS,
    component: ListVendors,
    requireAuthentication: true,
    isSideBar: true,
  },
  {
    name: "Summary Report",
    path: ROUTES.SUMMARY_REPORT,
    component: SummaryReport,
    requireAuthentication: true,
    isSideBar: true,
  },
];

export default Routes;
