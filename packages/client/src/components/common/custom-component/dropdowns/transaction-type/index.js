import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TransactionType = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Transaction'
      optionFilterProp='children'
      allowClear
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value='0' key='0'>
        - All -
      </Option>
      <Option value='2' key='2'>
        Cash Sale
      </Option>
      <Option value='3' key='3'>
        Credit Memo
      </Option>
      <Option value='4' key='4'>
        Return Authorization
      </Option>
      <Option value='5' key='5'>
        Bills
      </Option>
      <Option value='6' key='6'>
        Vendor Credit
      </Option>
      <Option value='7' key='7'>
        Vendor Return
      </Option>
      <Option value='8' key='8'>
        Expense
      </Option>
      <Option value='9' key='9'>
        Other Transactions
      </Option>
    </Select>
  );
};

export default TransactionType;
