import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const PaymentStatus = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Status'
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
        Pending Billing
      </Option>
      <Option value='1' key='1'>
        Partially Billed
      </Option>
      <Option value='2' key='2'>
        Fully Billed
      </Option>
    </Select>
  );
};

export default PaymentStatus;
