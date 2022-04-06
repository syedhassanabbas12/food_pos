import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TransactionNature = (props) => {
  return (
    <Select
      {...props}
      showSearch
      style={{ width: '100%' }}
      placeholder='Transaction Nature'
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
      <Option value='2' key='2'>
        Earning
      </Option>
      <Option value='3' key='3'>
        Deduction
      </Option>
    </Select>
  );
};

export default TransactionNature;
