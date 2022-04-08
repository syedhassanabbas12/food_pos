import ROUTES from '../constants/route-constants';

import Login from '../components/login';
import ForgotPassword from '../components/forgotpassword';
import ResetPassword from '../components/resetPassword';
import Dashboard from '../components/dashboard';
import CompanyInformation from '../components/companyInformation';
import AddEmployee from '../components/addEmployee';
import AddCustomer from '../components/addCustomer';
import AddExpense from '../components/addExpense';
import AddInvoice from '../components/addInvoice';
import AddSaleOrder from '../components/addSaleOrder';
import AddCreditMemo from '../components/addCreditMemo';
import AddReturnAuthorization from '../components/addReturnAuthorization';
import AddInventoryAdjustment from '../components/addInventoryAdjustment';
import AddProduct from '../components/addProduct';
import AddVendor from '../components/addVendor';
import AddVendorBill from '../components/addVendorBill';
import AddPurchaseOrder from '../components/addPurchaseOrder';
import AddVendorCredit from '../components/addVendorCredit';
import AddVendorReturn from '../components/addVendorReturn';
import ChangePasswrord from '../components/changePassword';
import EditProfile from '../components/editProfile';
import ListCustomers from '../components/listCustomers';
import ListExpenses from '../components/listExpenses';
import ListInventoryAdjustments from '../components/listInventoryAdjustments';
import ListInvoices from '../components/listInvoices';
import ListSaleOrders from '../components/listSaleOrders';
import ListCreditMemos from '../components/listCreditMemos';
import ListReturnAuthorizations from '../components/listReturnAuthorizations';
import ListProducts from '../components/listProducts';
import ListEmployees from '../components/listEmployees';
import ListVendors from '../components/listVendors';
import ListPurchaseOrders from '../components/listPurchaseOrders';
import ListVendorCredits from '../components/listVendorCredits';
import ListVendorReturns from '../components/listVendorReturns';
import ListVendorBills from '../components/listVendorBills';
import SummaryReport from '../components/summaryReport';
import BaseLayout from '../components/layouts/BaseLayout';
import ListClasses from '../components/listClasses';
import AddClass from '../components/addClass';
import ListLocations from '../components/listLocations';
import AddLocation from '../components/addLocation';
import AddDepartment from '../components/addDepartment';
import ListDepartments from '../components/listDepartments';
import ListDesignations from '../components/listDesignations';
import AddDesignation from '../components/addDesignation';
import AddInventoryTransfer from '../components/addInventoryTransfer';
import ListInventoryTransfers from '../components/listInventoryTransfers';
import AddUnit from '../components/addUnit';
import ListUnits from '../components/listUnits';
import AddCashSale from '../components/addCashSale';
import ListCashSales from '../components/listCashSales';
import AddRole from '../components/addRole';
import ListRoles from '../components/listRoles';
import AddTenant from '../components/addTenant';
import ListTenants from '../components/listTenants';
import ListExpenseCatgories from '../components/listExpenseCategories';
import AddExpenseCategory from '../components/addExpenseCategory';
import SystemNotes from '../components/systemNotes';

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
    name: 'Add Tenant',
    path: ROUTES.ADD_TENANT,
    component: AddTenant,
    requireAuthentication: true,
  },
  {
    name: 'Company Information',
    path: ROUTES.COMPANY_INFORMATION,
    component: CompanyInformation,
    requireAuthentication: true,
  },
  {
    name: 'Add Employee',
    path: ROUTES.ADD_EMPLOYEE,
    component: AddEmployee,
    requireAuthentication: true,
  },
  {
    name: 'Add Customer',
    path: ROUTES.ADD_CUSTOMER,
    component: AddCustomer,
    requireAuthentication: true,
  },
  {
    name: 'Add Sales Order',
    path: ROUTES.ADD_SALES_ORDER,
    component: AddSaleOrder,
    requireAuthentication: true,
  },
  {
    name: 'Add Invoice',
    path: ROUTES.ADD_INVOICE,
    component: AddInvoice,
    requireAuthentication: true,
  },
  {
    name: 'Add Credit Memo',
    path: ROUTES.ADD_CREDIT_MEMO,
    component: AddCreditMemo,
    requireAuthentication: true,
  },
  {
    name: 'Add Return Authorization',
    path: ROUTES.ADD_RETURN_AUTHORIZATION,
    component: AddReturnAuthorization,
    requireAuthentication: true,
  },
  {
    name: 'List Sale Orders',
    path: ROUTES.LIST_SALES_ORDERS,
    component: ListSaleOrders,
    requireAuthentication: true,
  },
  {
    name: 'List Tenants',
    path: ROUTES.LIST_TENANTS,
    component: ListTenants,
    requireAuthentication: true,
  },
  {
    name: 'List Credit Memos',
    path: ROUTES.LIST_CREDIT_MEMOS,
    component: ListCreditMemos,
    requireAuthentication: true,
  },
  {
    name: 'List Return Authorization',
    path: ROUTES.LIST_RETURN_AUTHORIZATIONS,
    component: ListReturnAuthorizations,
    requireAuthentication: true,
  },
  {
    name: 'Add Expense',
    path: ROUTES.ADD_EXPENSE,
    component: AddExpense,
    requireAuthentication: true,
  },
  {
    name: 'Add Cash Sale',
    path: ROUTES.ADD_CASH_SALE,
    component: AddCashSale,
    requireAuthentication: true,
  },
  {
    name: 'Add Expense',
    path: ROUTES.LIST_CASH_SALES,
    component: ListCashSales,
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
    name: 'Add Location',
    path: ROUTES.ADD_LOCATION,
    component: AddLocation,
    requireAuthentication: true,
  },
  {
    name: 'Add Class',
    path: ROUTES.ADD_CLASS,
    component: AddClass,
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
    name: 'Add Role',
    path: ROUTES.ADD_ROLE,
    component: AddRole,
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
    name: 'Add Expense Category',
    path: ROUTES.ADD_EXPENSE_CATEGORY,
    component: AddExpenseCategory,
    requireAuthentication: true,
  },
  {
    name: 'Add Purchase Order',
    path: ROUTES.ADD_PURCHASE_ORDER,
    component: AddPurchaseOrder,
    requireAuthentication: true,
  },
  {
    name: 'Add Vendor Credit',
    path: ROUTES.ADD_VENDOR_CREDIT,
    component: AddVendorCredit,
    requireAuthentication: true,
  },
  {
    name: 'Add Vendor Return',
    path: ROUTES.ADD_VENDOR_AUTHORIZATION,
    component: AddVendorReturn,
    requireAuthentication: true,
  },
  {
    name: 'List Purchase Orders',
    path: ROUTES.LIST_PURCHASE_ORDERS,
    component: ListPurchaseOrders,
    requireAuthentication: true,
  },
  {
    name: 'List Vendor Credits',
    path: ROUTES.LIST_VENDOR_CREDITS,
    component: ListVendorCredits,
    requireAuthentication: true,
  },
  {
    name: 'List Vendor Returns',
    path: ROUTES.LIST_VENDOR_AUTHOIZATIONS,
    component: ListVendorReturns,
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
    name: 'List Employee',
    path: ROUTES.LIST_EMPLOYEES,
    component: ListEmployees,
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
    name: 'List Classes',
    path: ROUTES.LIST_CLASSES,
    component: ListClasses,
    requireAuthentication: true,
  },
  {
    name: 'List Expense Categories',
    path: ROUTES.LIST_EXPENSE_CATEGORIES,
    component: ListExpenseCatgories,
    requireAuthentication: true,
  },
  {
    name: 'List Locations',
    path: ROUTES.LIST_LOCATIONS,
    component: ListLocations,
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
    name: 'List Roles',
    path: ROUTES.LIST_ROLES,
    component: ListRoles,
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
  {
    name: 'System Notes',
    path: ROUTES.SYSTEM_NOTES,
    component: SystemNotes,
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
    key: 'tenant',
    text: 'Tenants',
    to: ROUTES.LIST_TENANTS,
    icon: 'plus-circle',
  },
  {
    key: 'setup',
    text: 'Setup',
    icon: 'setting',
    subMenus: [
      {
        key: 'companyinformation',
        text: 'Company Information',
        to: ROUTES.COMPANY_INFORMATION,
        icon: 'info-circle',
      },
      {
        key: 'roles',
        text: 'Roles',
        to: ROUTES.LIST_ROLES,
        icon: 'block',
      },
      {
        key: 'list-classes',
        text: 'Classes',
        to: ROUTES.LIST_CLASSES,
        icon: 'project',
      },
      {
        key: 'list-locations',
        text: 'Locations',
        to: ROUTES.LIST_LOCATIONS,
        icon: 'pause',
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
        key: 'list-expense-categories',
        text: 'Expense Category',
        to: ROUTES.LIST_EXPENSE_CATEGORIES,
        icon: 'account-book',
      },
    ],
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
    key: 'list-employees',
    text: 'Employees',
    to: ROUTES.LIST_EMPLOYEES,
    icon: 'smile-o',
  },
  {
    key: 'list-products',
    text: 'Products',
    // to: ROUTES.LIST_PRODUCT,
    icon: 'tag',
    subMenus: [
      {
        key: 'list-products',
        text: 'Items',
        to: ROUTES.LIST_PRODUCT,
        icon: 'tag',
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
    ],
  },
  {
    key: 'list-sales-orders',
    text: 'Sales Orders',
    to: ROUTES.LIST_SALES_ORDERS,
    icon: 'money-collect',
  },
  {
    key: 'list-invoices',
    text: 'Invoices',
    to: ROUTES.LIST_INVOICES,
    icon: 'money-collect',
  },
  {
    key: 'list-cash-sales',
    text: 'Cash Sales',
    to: ROUTES.LIST_CASH_SALES,
    icon: 'money-collect',
  },
  {
    key: 'list-credit-memos',
    text: 'Credit Memos',
    to: ROUTES.LIST_CREDIT_MEMOS,
    icon: 'money-collect',
  },
  {
    key: 'list-return-authorizations',
    text: 'Return Authorizations',
    to: ROUTES.LIST_RETURN_AUTHORIZATIONS,
    icon: 'money-collect',
  },
  {
    key: 'list-purchase-orders',
    text: 'Purchase Orders',
    to: ROUTES.LIST_PURCHASE_ORDERS,
    icon: 'pay-circle',
  },
  {
    key: 'list-vendor-bills',
    text: 'Vendor Bill',
    to: ROUTES.LIST_VENDOR_BILLS,
    icon: 'pay-circle',
  },
  {
    key: 'list-vendor-credit',
    text: 'Vendor Credit',
    to: ROUTES.LIST_VENDOR_CREDITS,
    icon: 'pay-circle',
  },
  {
    key: 'list-vendor-return',
    text: 'Vendor Return',
    to: ROUTES.LIST_VENDOR_AUTHOIZATIONS,
    icon: 'pay-circle',
  },
  {
    key: 'list-expenses',
    text: 'Expenses',
    to: ROUTES.LIST_EXPENSES,
    icon: 'exception',
  },
  {
    key: 'summary-report',
    text: 'Summary Report',
    to: ROUTES.SUMMARY_REPORT,
    icon: 'bar-chart',
  },
  {
    key: 'system-notes',
    text: 'System Notes',
    to: ROUTES.SYSTEM_NOTES,
    icon: 'database',
  },
];

export { Routes, SiderList };
