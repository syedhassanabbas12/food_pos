const permissions = [
  { label: 'Dashboard', value: 'DASHBOARD', disabled: true },
  { label: 'My Profile', value: 'EMPLOYEE_PROFILE', disabled: true },
  { label: 'Employee', value: 'EMPLOYEE' },
  { label: 'Customer', value: 'CUSTOMER' },
  { label: 'Vendor', value: 'VENDOR' },
  { label: 'Items', value: 'ITEMS' },
  { label: 'Sales Order', value: 'SALES_ORDER' },
  { label: 'Invoice', value: 'INVOICE' },
  { label: 'Cash Sale', value: 'CASH_SALE' },
  { label: 'Payment', value: 'PAYMENT' },
  { label: 'Credit Memo', value: 'CREDIT_MEMO' },
  { label: 'Return Authorization', value: 'RETURN_AUTHORIZATION' },
  { label: 'Purchase Order', value: 'PURCHASE_ORDER' },
  { label: 'Bill', value: 'BILL' },
  { label: 'Vendor Credit', value: 'VENDOR_CREDIT' },
  {
    label: 'Vendor Return Authorization',
    value: 'VENDOR_RETURN_AUTHORIZATION',
  },
  { label: 'Expense', value: 'EXPENSE' },
  { label: 'Inventory Transfer', value: 'INVENTORY_TRANSFER' },
  { label: 'Report', value: 'REPORT' },
];

const disabledAndSelected = ['DASHBOARD', 'EMPLOYEE_PROFILE'];

export default {
  permissions,
  disabledAndSelected,
};
