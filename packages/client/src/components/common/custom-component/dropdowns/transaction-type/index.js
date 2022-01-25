/* eslint-disable no-console */
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
        All
      </Option>
      <Option value='1' key='1'>
        Invoices
      </Option>
      <Option value='2' key='2'>
        Bills
      </Option>
      <Option value='3' key='3'>
        Expenses
      </Option>
    </Select>
  );
};

export default TransactionType;
